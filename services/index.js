const dataVerification = require('./dataVerification');
const encryption = require('./encryption');
const {generateRegistrationToken, generateAccessToken} = require('./generateToken');
const {sendMailToUser} = require('./mailSending');
const awsConnector = require('./awsConnector');
const resourceLoader = require('./resourceLoader');

const services = {};
services.dataVerification = dataVerification;
services.encryption = encryption;
services.generateRegistrationToken = generateRegistrationToken;
services.generateAccessToken = generateAccessToken;
services.sendMailToUser = sendMailToUser;
services.awsConnector = awsConnector;
services.resourceLoader = resourceLoader;

module.exports = services;