const {sequelize} = require('../index');
const UserModel = sequelize.model('user');

// user를 사용한 function들이 있어야 .

const addUser = async (email,encryptedPW,locale,registrationCode, salt) => {
    UserModel.create({
        email : email,
        pw : encryptedPW,
        location : locale,
        is_active : 0,
        registration_code : registrationCode,
        salt : salt
    });
}

const userAlreadyExist = async (email) => {
    const entry = await UserModel.findOne({
        where : {
            email : email
        },
        raw : true
    });
    if(entry !== null){
        return true;
    }
    else{
        return false;
    }
}


const activateTokenUser = async (token) =>{
    const result = await UserModel.update({
        is_active : 1,
    }, {
        where: {
            registration_code : token,
            is_active : 0
        },
    });
    if(result[0] ===0){
        return false;
    }else{
        return true;
    }

}

const checkIfNoWaitingUser = async () => {
    const entry = await UserModel.findOne({
        where : {
            is_active : 0
        },
        raw : true
    })
    if(entry !== null){
        return true;
    }
    else{
        return false;
    }
}

const getUserProfileFromEmail = async (email)=>{
    const entry = await UserModel.findOne({
        where : {
            email :email
        },
        raw : true
    });
    const resultObject = {};
    if(entry !== null){
        resultObject.salt = entry.salt;
        resultObject.encryptedPW = entry.pw;
        resultObject.uid = entry.uid;
    }
    return resultObject;
}

module.exports = {
    addUser,
    userAlreadyExist,
    activateTokenUser,
    checkIfNoWaitingUser,
    getUserProfileFromEmail
}