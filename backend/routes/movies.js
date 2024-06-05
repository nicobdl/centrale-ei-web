import express from 'express';
import { appDataSource } from '../datasource.js';
import Movie from '../entities/movies.js';

const router = express.Router();

function routeCallback(req, res) {
    console.log(req.body);
    res.json({ message: "Hello" });
}

router.get("/", routeCallback)

router.post('/new', function (req, res) {
    const movieRepository = appDataSource.getRepository(Movie);
    const newMovie = userRepository.create({
      title: req.body.title,
      date: req.body.date,
    });
  
    movieRepository
      .save(newMovie)
      .then(function (savedMovie) {
        res.status(201).json({
          message: 'Movie successfully created',
          id: savedMovie.id,
        });
      })
      .catch(function (error) {
        console.error(error);
        if (error.code === '23505') {
          res.status(400).json({
            message: `Movie with title "${newMovie.title}" already exists`,
          });
        } else {
          res.status(500).json({ message: 'Error while creating the movie' });
        }
      });
  });
  

export default router;
