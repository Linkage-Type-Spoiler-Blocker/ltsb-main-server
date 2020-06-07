const registration = require('./registration');
const loginController = require('./loginController');

const controllers = {};
controllers.registration = registration;
controllers.loginController = loginController;

module.exports = controllers;