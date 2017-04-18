// modules required for routing
let express = require('express');
let router = express.Router();

// require the index controller
let indexController = require('../controllers/index');

/* GET - most popular movies */
router.get('/mostPopularMovies', (req, res) => {
  indexController.scrapeMostPopularMovies(req, res);
});

/* GET - most popular movies */
router.get('/mostPopularTvs', (req, res) => {
  indexController.scrapeMostPopularTvs(req, res);
});

module.exports = router;
