// Import des composants nécessaires
import { appDataSource } from './datasource.js';
import Rating from './entities/rating.js';
import Movie from './entities/movie.js';

// Fonction pour exécuter la requête de recommandation
const generateRecommendations = async (userId) => {
  try {
    // Récupérer l'accès aux entités Rating et Movie
    const ratingRepository = appDataSource.getRepository(Rating);
    const movieRepository = appDataSource.getRepository(Movie);

    // Exécuter la requête SQL
    const recommendations = await ratingRepository.query(`
      WITH user_genres AS (
        SELECT
            rg.genre_id,
            r.opinion
        FROM
            ratings r
        JOIN
            UNNEST((SELECT genre_ids FROM movies WHERE movies.id = r.movie_id)) AS rg(genre_id)
        WHERE
            r.user_id = $1
      ),
      genre_scores AS (
        SELECT
            genre_id,
            SUM(CASE WHEN opinion = 1 THEN 1 ELSE -1 END) AS score
        FROM
            user_genres
        GROUP BY
            genre_id
      ),
      ranked_genres AS (
        SELECT
            genre_id,
            score,
            RANK() OVER (ORDER BY score DESC) AS rank
        FROM
            genre_scores
      ),
      unrated_movies AS (
        SELECT
            movies.id AS movie_id,
            movies.title,
            movies.overview,
            movies.release_date,
            movies.vote_average,
            movies.genre_ids
        FROM
            movies
        LEFT JOIN
            ratings r ON movies.id = r.movie_id AND r.user_id = $1
        WHERE
            r.movie_id IS NULL
      )
      SELECT
          um.movie_id,
          um.title,
          um.overview,
          um.release_date,
          um.vote_average,
          um.genre_ids,
          rg.rank
      FROM
          unrated_movies um
      JOIN
          ranked_genres rg ON um.genre_ids && ARRAY[rg.genre_id]
      ORDER BY
          rg.rank ASC,
          um.vote_average DESC;
    `, [userId]);

    // Retourner les recommandations
    return recommendations;
  } catch (error) {
    console.error('Error generating recommendations:', error);
    throw error;
  }
};

export default generateRecommendations;
