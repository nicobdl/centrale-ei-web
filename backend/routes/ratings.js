import express from 'express';
import { appDataSource } from '../datasource.js';
import Rating from '../entities/rating.js';
import Movie from '../entities/movie.js';
import User from '../entities/user.js';

const router = express.Router();

// Obtenir toutes les notations
router.get('/', function (req, res) {
  appDataSource
    .getRepository(Rating)
    .find({ relations: ["movie", "user"] })
    .then(function (ratings) {
      res.json({ ratings: ratings });
    });
});

// Ajouter une nouvelle notation
router.post('/new', function (req, res) {
  const ratingRepository = appDataSource.getRepository(Rating);
  const movieRepository = appDataSource.getRepository(Movie);
  const userRepository = appDataSource.getRepository(User);
  const { film_id, user_id, opinion } = req.body;

  Promise.all([
    movieRepository.findOneBy({ id: film_id }),
    userRepository.findOneBy({ id: user_id })
  ])
  .then(([movie, user]) => {
    if (!movie || !user) {
      return res.status(404).json({ message: 'Movie or User not found' });
    }

    const newRating = ratingRepository.create({
      movie,
      user,
      opinion,
    });

    return ratingRepository.save(newRating);
  })
  .then(function (savedRating) {
    res.status(201).json({
      message: 'Rating successfully created',
      id: savedRating.id,
    });
  })
  .catch(function (error) {
    console.error(error);
    res.status(500).json({ message: 'Error while creating the rating' });
  });
});

// Supprimer une notation
router.delete('/:ratingId', function (req, res) {
  appDataSource
    .getRepository(Rating)
    .delete({ id: req.params.ratingId })
    .then(function () {
      res.status(204).json({ message: 'Rating successfully deleted' });
    })
    .catch(function () {
      res.status(500).json({ message: 'Error while deleting the rating' });
    });
});

export default router;