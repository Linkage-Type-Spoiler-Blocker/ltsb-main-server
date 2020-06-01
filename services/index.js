const dataVerification = require('./dataVerification');
const encryption = require('./encryption');

const services = {};
services.dataVerification = dataVerification;
services.encryption = encryption;

module.exports = services;