import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import moviesRouter from './routes/movies.js'
import { routeNotFoundJsonHandler } from './services/routeNotFoundJsonHandler.js';
import { jsonErrorHandler } from './services/jsonErrorHandler.js';
import { appDataSource } from './datasource.js';
import Genre from './entities/genre.js';
import Movie from './entities/movie.js';

appDataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
    const app = express();

    app.use(logger('dev'));
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    // Register routes
    app.use('/', indexRouter);
    app.use('/users', usersRouter);
    app.use("/movies", moviesRouter);

    // Register 404 middleware and error handler
    app.use(routeNotFoundJsonHandler); // this middleware must be registered after all routes to handle 404 correctly
    app.use(jsonErrorHandler); // this error handler must be registered after all middleware to catch all errors

    const port = parseInt(process.env.PORT || '8000');

    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });



const app = express();
app.use(express.json());

// Saving genres
app.post('/api/genres', async (req, res) => {
  const genreRepository = appDataSource.getRepository(Genre);
  const genres = req.body.genres;

  try {
    await genreRepository.save(genres);
    res.status(201).json({ message: 'Genres successfully saved' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving genres' });
  }
});

// Saving movies
app.post('/api/movies', async (req, res) => {
  const movieRepository = appDataSource.getRepository(Movie);
  const movies = req.body.movies;

  try {
    await movieRepository.save(movies);
    res.status(201).json({ message: 'Movies successfully saved' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving movies' });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});