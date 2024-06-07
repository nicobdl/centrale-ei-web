// recuperer tmdb (genre puis film), 
// requete post pour chaque elem

import axios from 'axios';

async function Script() {
  const genres = await axios
  .get('https://developer.themoviedb.org/reference/genre-movie-list', {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjlmNjAwMzY4MzMzODNkNGIwYjNhNzJiODA3MzdjNCIsInN1YiI6IjY0NzA5YmE4YzVhZGE1MDBkZWU2ZTMxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Em7Y9fSW94J91rbuKFjDWxmpWaQzTitxRKNdQ5Lh2Eo'

    }
  });
  const movies = await axios
    .get('https://developer.themoviedb.org/reference/movie-top-rated-list', {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjlmNjAwMzY4MzMzODNkNGIwYjNhNzJiODA3MzdjNCIsInN1YiI6IjY0NzA5YmE4YzVhZGE1MDBkZWU2ZTMxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Em7Y9fSW94J91rbuKFjDWxmpWaQzTitxRKNdQ5Lh2Eo'

      }
    })
    for (const genre of genres){
    axios.post('http://localhost:3001/genres/new', genre)
        .then(response => {
          console.log(response.data.message);
        })
        .catch(error => {
          console.error('Error saving genres:', error);
        });
      }
    for (const movie of movies){
      axios.post('http://localhost:3001/movies/new', movie)
        .then(response => {
          console.log(response.data.message);
        })
        .catch(error => {
          console.error('Error saving movies:', error);
        });
      }
    }


Script()
