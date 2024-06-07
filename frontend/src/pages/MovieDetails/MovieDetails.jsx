import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './MovieDetails.css';
import axios from 'axios';

function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);
  const [userRating, setUserRating] = useState(0); // 0: default, 1: like, -1: dislike

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/${id}`, {
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjlmNjAwMzY4MzMzODNkNGIwYjNhNzJiODA3MzdjNCIsInN1YiI6IjY0NzA5YmE4YzVhZGE1MDBkZWU2ZTMxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Em7Y9fSW94J91rbuKFjDWxmpWaQzTitxRKNdQ5Lh2Eo',
        },
      })
      .then((response) => {
        const movie = response.data;
        setMovieDetails(movie);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des films:', error);
        setError('Erreur lors de la récupération des films.');
      });
  }, [id]);

  const handleLike = () => {
    setUserRating(userRating === 1 ? 0 : 1);
  };

  const handleDislike = () => {
    setUserRating(userRating === -1 ? 0 : -1);
  };

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details-container">
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.original_name}
        className="movie-poster"
      />
      <div className="movie-info">
        {movieDetails.original_name && (
          <h1>
            {movieDetails.original_name}
            <button
              className={`like-button ${userRating === 1 ? 'selected' : ''}`}
              onClick={handleLike}
            >
              👍
            </button>
            <button
              className={`dislike-button ${
                userRating === -1 ? 'selected' : ''
              }`}
              onClick={handleDislike}
            >
              👎
            </button>
          </h1>
        )}
        {movieDetails.overview && (
          <p className="movie-overview">
            <strong>Résumé :</strong> {movieDetails.overview}
          </p>
        )}
        <div className="movie-details">
          {movieDetails.release_date && (
            <p>
              <strong>Date de sortie :</strong> {movieDetails.release_date}
            </p>
          )}
          {movieDetails.vote_average && (
            <p>
              <strong>Note moyenne :</strong> {movieDetails.vote_average}
            </p>
          )}
          {movieDetails.vote_count && (
            <p>
              <strong>Nombre de votes :</strong> {movieDetails.vote_count}
            </p>
          )}
          {movieDetails.status && (
            <p>
              <strong>Statut :</strong> {movieDetails.status}
            </p>
          )}
          {movieDetails.runtime && (
            <p>
              <strong>Durée :</strong> {movieDetails.runtime} minutes
            </p>
          )}
          {movieDetails.genres && (
            <p>
              <strong>Genres :</strong>{' '}
              {movieDetails.genres.map((genre) => genre.name).join(', ')}
            </p>
          )}
          {movieDetails.production_countries && (
            <p>
              <strong>Pays de production :</strong>{' '}
              {movieDetails.production_countries
                .map((country) => country.name)
                .join(', ')}
            </p>
          )}
          {movieDetails.spoken_languages && (
            <p>
              <strong>Langues parlées :</strong>{' '}
              {movieDetails.spoken_languages
                .map((language) => language.name)
                .join(', ')}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
