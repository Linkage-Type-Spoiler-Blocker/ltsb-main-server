const db = require('../db');

// bin/www에서 이 함수를 실행. 테스트는 이 함수를 실행시켜도 되고, 별도로 sync를 호출해도 된다. 
module.exports = () => {
  const options = {
    force: process.env.NODE_ENV === 'test' ? true : false
  };
  return db.sequelize.sync(options);
}