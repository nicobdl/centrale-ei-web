import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <Link
      to={`/movies/${movie.id}`}
      style={{ textDecoration: 'none', color: 'inherit' }} //inherit permet au texte de garder la couleur de son élément parent et d'éviter la couleur bleu des lien hypertextes classiques
    >
      <div className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.name}
          className="movie-poster"
        />
        <div className="movie-info">
          <h3 className="movie-title">{movie.name}</h3>
          <p className="movie-date">{movie.first_air_date}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
