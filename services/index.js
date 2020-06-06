const dataVerification = require('./dataVerification');
const encryption = require('./encryption');
const generateToken = require('./generateToken');
const {sendMailToUser} = require('./mailSending');

const services = {};
services.dataVerification = dataVerification;
services.encryption = encryption;
services.generateToken = generateToken;
services.sendMailToUser = sendMailToUser;

module.exports = services;