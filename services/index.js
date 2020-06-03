const dataVerification = require('./dataVerification');
const encryption = require('./encryption');
const generateToken = require('./generateToken');

const services = {};
services.dataVerification = dataVerification;
services.encryption = encryption;
services.generateToken = generateToken;

module.exports = services;