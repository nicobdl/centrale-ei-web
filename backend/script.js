// appdatasource - req http - create save

import React, { useEffect } from 'react';
import { useFetchGenres } from './services/useFetchGenres';
import { useFetchMovies } from './services/useFetchMovies';
import axios from 'axios';

function Script() {
  const { genre_list } = useFetchGenres();
  const { movies_list } = useFetchMovies();

  useEffect(() => {
    {
      axios.post('http://localhost:3001/api/genres', { genres: genre_list })
        .then(response => {
          console.log(response.data.message);
        })
        .catch(error => {
          console.error('Error saving genres:', error);
        });
    }
  }, [genre_list]);

  useEffect(() => {
    {
      axios.post('http://localhost:3001/api/movies', { movies: movies_list })
        .then(response => {
          console.log(response.data.message);
        })
        .catch(error => {
          console.error('Error saving movies:', error);
        });
    }
  }, [movies_list]);

  return (
    <div>
      <h1>Fetching and Saving Data</h1>
    </div>
  );
}

export default Script;