import { useEffect } from 'react';
import axios, {isCancel, AxiosError} from 'axios';
import { useState } from 'react';

export function useFetchMovies() {
  {
    axios
  .get('https://developer.themoviedb.org/reference/movie-top-rated-list', {headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjlmNjAwMzY4MzMzODNkNGIwYjNhNzJiODA3MzdjNCIsInN1YiI6IjY0NzA5YmE4YzVhZGE1MDBkZWU2ZTMxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Em7Y9fSW94J91rbuKFjDWxmpWaQzTitxRKNdQ5Lh2Eo'
  }})
  .then((response) => {
		set_movie_list(response.data.results);
        console.log(response.data.results);
  })
  .catch((error) => {
		// Do something if call failed
		console.log(error)
  });
  };
  return {movie_list}
}