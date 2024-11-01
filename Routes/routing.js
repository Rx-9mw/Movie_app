const express = require('express');
const router = express.Router();
const Movie = require('../Models/model.js');

router.get('/', async (req, res) => {
     try {
          const movie = await Movie.aggregate().sample(1);
          res.send(movie);
     } catch (error) {
          console.error(error);
     }
})

router.post('/', async (req, res) => {
     const movie = new Movie({
          name: req.body.name,
          genre: req.body?.genre,
          rating: req.body.rating,
          description: req.body?.description
     })
     try {
          const newMovie = await movie.save();
          res.status(201).json('Movie added');
     } catch (error) {
          res.status(400).json({message: error.message});
     }
})

router.delete('/:id', async (req, res) => {
     try {
          const deleteMovie = await Movie.findByIdAndDelete(req.params.id);
          res.send('Movie deleted')
     } catch (error) {
          res.json({message: error.message});
     }
})

module.exports = router;
