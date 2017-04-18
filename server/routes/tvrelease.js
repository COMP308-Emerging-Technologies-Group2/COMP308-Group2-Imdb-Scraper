// modules required for routing
let express = require('express');
let router = express.Router();

// require the tv controller
let tvController = require('../controllers/tv');

// get release date
router.get('/:id', (req, res)=>{
	let id = req.params.id;
	tvController(req,res,id);
});


module.exports = router;
