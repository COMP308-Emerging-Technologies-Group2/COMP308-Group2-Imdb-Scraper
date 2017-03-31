// modules required for routing
let express = require('express');
let router = express.Router();

// require the index controller
let indexController = require('../controllers/index');

/* GET */
router.get('/scrape', (req, res, next) => {
  indexController.scrapeMovieDetails(req, res);
});



module.exports = router;