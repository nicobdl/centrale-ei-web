import './DB_connexion.js';  
import { getManager } from 'typeorm';
import Genre from './entities/genre.js';
import Movie from './entities/movie.js';
import axios from 'axios';

async function fetchAndSaveMovies() {
    try {
        const genresResponse = await axios
        .get('https://developer.themoviedb.org/reference/genre-movie-list', {
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjlmNjAwMzY4MzMzODNkNGIwYjNhNzJiODA3MzdjNCIsInN1YiI6IjY0NzA5YmE4YzVhZGE1MDBkZWU2ZTMxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Em7Y9fSW94J91rbuKFjDWxmpWaQzTitxRKNdQ5Lh2Eo'
      
          }
        });
        const genresData = genresResponse.data

        const moviesResponse = await axios
        .get('https://developer.themoviedb.org/reference/movie-top-rated-list', {
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjlmNjAwMzY4MzMzODNkNGIwYjNhNzJiODA3MzdjNCIsInN1YiI6IjY0NzA5YmE4YzVhZGE1MDBkZWU2ZTMxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Em7Y9fSW94J91rbuKFjDWxmpWaQzTitxRKNdQ5Lh2Eo'
    
          }
        });
        console.log(moviesResponse)
        const moviesData = moviesResponse.data
        console.log(moviesData)

        const genreRepository = getManager().getRepository(Genre);
        const movieRepository = getManager().getRepository(Movie);

        for (const genreData of genresData) {
            if (genreData.name){const genre = genreRepository.create({
                id: genreData.id,
                name: genreData.name
            });
            await genreRepository.save(genre);
        }}
        
        
        for (const movieData of moviesData) {
            if (movieData.title){const movie = movieRepository.create({
            id : movieData.id, 
            title : movieData.title,
            overview : movieData.overview,
            release_date : movieData.release_date,
            vote_average : movieData.vote_average,
        });
            await movieRepository.save(movie);
        }}
        console.log('Genres and movies saved successfully');
    } catch (error) {
        console.error('An error occurred while saving genres and movies:', error);
    }
}

fetchAndSaveMovies();
