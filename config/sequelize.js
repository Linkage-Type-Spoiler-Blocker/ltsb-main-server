require('dotenv').config();
const env = process.env;

const development = {
    username: env.TEST_DB_USER,
    password: env.TEST_DB_PW,
    database: env.TEST_DB_NAME,
    host: env.TEST_DB_HOST,
    dialect: env.TEST_DB_DIALECT,
    port: env.TEST_DB_PORT,
    storage : env.TEST_DB_STORAGE
};

const test = {
    username: env.TEST_DB_USER,
    password: env.TEST_DB_PW,
    database: env.TEST_DB_NAME,
    host: env.TEST_DB_HOST,
    dialect: env.TEST_DB_DIALECT,
    port: env.TEST_DB_PORT,
    storage : env.TEST_DB_STORAGE
};

const production = {
    username: env.PROD_DB_USER,
    password: env.PROD_DB_PW,
    database: env.PROD_DB_NAME,
    host: env.PROD_DB_HOST,
    dialect: env.PROD_DB_DIALECT,
    port: env.PROD_DB_PORT,
};

module.exports = {development, test, production};