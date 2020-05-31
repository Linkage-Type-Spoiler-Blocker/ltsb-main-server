const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV ||'development';
const config = require(path.join(__dirname,'..','config','sequelize'))[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

/* table간의 연결 */
db.User = require('./models/user')(sequelize, Sequelize);
// db.Comment = require('./models/movie')(sequelize, Sequelize);

module.exports = db;