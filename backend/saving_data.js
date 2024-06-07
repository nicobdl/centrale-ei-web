import { getManager } from 'typeorm';
import Movie from './entities/movie.js';
import Genre from './entities/genre.js';


async function saveMovie(movieData) {
  const movieRepository = getManager().getRepository(Movie);


  const movie = movieRepository.create(movieData);


  await movieRepository.save(movie);
}


async function saveGenre(genreData) {
  const genreRepository = getManager().getRepository(Genre);


  const genre = genreRepository.create(genreData);


  await genreRepository.save(genre);
}


export { saveMovie, saveGenre };