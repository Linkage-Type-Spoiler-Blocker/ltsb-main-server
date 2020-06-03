const {sequelize} = require('../index');
const UserModel = sequelize.model('user');

// user를 사용한 function들이 있어야 .

const addUser = async (email,encryptedPW,locale,registrationCode) => {
    UserModel.create({
        email : email,
        pw : encryptedPW,
        location : locale,
        is_active : 0,
        registration_code : registrationCode
    });
}

module.exports = {
    addUser
}