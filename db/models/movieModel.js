module.exports = (sequelize, DataTypes) =>{
    sequelize.define('movie',{
        movie_id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            allowNull : false
        },
        movie_name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        director_name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        release_year : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        language : {
            type : DataTypes.STRING,
            allowNull : false
        },
        wordset_created : {
            type : DataTypes.INTEGER,
            allowNull : false,
            defaultValue : 0
        }
    },{
        timestamps : false,
        freezeTableName : true
    });
};