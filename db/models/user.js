
module.exports = (sequelize, DataTypes) =>{
  return sequelize.define('user', {
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
      type : DataTypes.TEXT(40),
      allowNull : false
    },
    is_active : {
      type : DataTypes.INTEGER(1),
      allowNull : false
    },
    location : {
      type : DataTypes.INTEGER(3),
      allowNull : false
    }
  }, {
    timestamps : false,
  });
};