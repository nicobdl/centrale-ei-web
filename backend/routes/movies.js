import express from 'express';
import { appDataSource } from '../datasource.js';
import Movie from '../entities/movie.js';
import Genre from '../entities/genre.js';

const router = express.Router();

// Obtenir tous les films
router.get('/', function (req, res) {
  appDataSource
    .getRepository(Movie)
    .find({ relations: ["genres"] })
    .then(function (movies) {
      res.json({ movies: movies });
    });
});

// Ajouter un nouveau film
router.post('/new', function (req, res) {
  const movieRepository = appDataSource.getRepository(Movie);
  const genreRepository = appDataSource.getRepository(Genre);
  const { title, overview, release_date, vote_average, tmdb_id, genre_ids } = req.body;

  genreRepository.findByIds(genre_ids)
    .then(genres => {
      const newMovie = movieRepository.create({
        title,
        overview,
        release_date,
        vote_average,
        tmdb_id,
        genres
      });

      return movieRepository.save(newMovie);
    })
    .then(function (savedMovie) {
      res.status(201).json({
        message: 'Movie successfully created',
        id: savedMovie.id,
      });
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).json({ message: 'Error while creating the movie' });
    });
});

// Supprimer un film
router.delete('/:movieId', function (req, res) {
  appDataSource
    .getRepository(Movie)
    .delete({ id: req.params.movieId })
    .then(function () {
      res.status(204).json({ message: 'Movie successfully deleted' });
    })
    .catch(function () {
      res.status(500).json({ message: 'Error while deleting the movie' });
    });
});

export default router;