const registration = require('./registration');
const loginController = require('./loginController');
const movieController = require('./movieController');

const controllers = {};
controllers.registration = registration;
controllers.loginController = loginController;
controllers.movieController = movieController;

module.exports = controllers;