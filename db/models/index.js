
const initializeModels = (sequelize, DataTypes) =>{
    require('./userModel')(sequelize, DataTypes);

    // 테이블간 관계정의도 삽입 가능.
}

module.exports = {
    initializeModels
};
