var express = require('express');
var router = express.Router();

const { movieController } = require('../controllers');

router.get('/search', movieController.searchMovies);
router.get('/words',movieController.requestWordList);

module.exports = router;
