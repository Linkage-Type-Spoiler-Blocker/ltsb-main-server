
module.exports = (sequelize, DataTypes) =>{
  sequelize.define('user', {
    uid : {
      type : DataTypes.INTEGER,
      autoIncrement : true,
      allowNull : false,
      primaryKey : true
    },
    email : {
      type : DataTypes.STRING(320),
      allowNull : false
    },
    pw : {
      type : DataTypes.STRING(34),
      allowNull : false
    },
    salt : {
      type : DataTypes.STRING(34),
      allowNull : false
    },
    is_active : {
      type : DataTypes.INTEGER(1),
      allowNull : false
    },
    registration_code : {
      type : DataTypes.STRING(40),
      allowNull : false
    },
    location : {
      type : DataTypes.CHAR(2),
      allowNull : false
    }
  }, {
    timestamps : false,
    freezeTableName : true
  });
};

