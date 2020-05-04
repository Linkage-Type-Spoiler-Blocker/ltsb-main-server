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
    username: env.TEST_DB_USER,
    password: env.TEST_DB_PW,
    database: env.TEST_DB_NAME,
    host: env.TEST_DB_HOST,
    dialect: env.TEST_DB_DIALECT,
    port: env.TEST_DB_PORT,
    storage : env.TEST_DB_STORAGE
};

module.exports = {development, test, production};