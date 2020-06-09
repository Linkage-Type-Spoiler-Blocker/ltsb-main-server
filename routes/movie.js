var express = require('express');
var router = express.Router();

const { movieController } = require('../controllers');

router.get('/search', movieController.searchMovies);

module.exports = router;
