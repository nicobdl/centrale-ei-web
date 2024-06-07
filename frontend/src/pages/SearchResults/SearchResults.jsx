import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './SearchResults.css';

function SearchResults() {
  const { query_name } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(query_name);
    axios
      .get(`https://api.themoviedb.org/3/search/tv?query=${query_name}`, {
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjlmNjAwMzY4MzMzODNkNGIwYjNhNzJiODA3MzdjNCIsInN1YiI6IjY0NzA5YmE4YzVhZGE1MDBkZWU2ZTMxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Em7Y9fSW94J91rbuKFjDWxmpWaQzTitxRKNdQ5Lh2Eo',
        },
      })
      .then((response) => {
        console.log(response.data);
        const listMovies = response.data.results.map((movie) => ({
          name: movie.original_name,
          first_air_date: movie.first_air_date,
          poster_path: movie.poster_path,
          id: movie.id,
        }));
        setMovieDetails(listMovies);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des films:', error);
        setError('Erreur lors de la récupération des films.');
      });
  }, [query_name]);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="search-results-container">
      {movieDetails.map((movie) => (
        <Link
          to={`/movies/${movie.id}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div key={movie.id} className="search-results movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.name}
              className="search-results movie-poster"
            />
            <div className="search-results movie-info">
              <h3>{movie.name}</h3>
              <p>{movie.first_air_date}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default SearchResults;
