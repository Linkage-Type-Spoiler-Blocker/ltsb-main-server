const {dataVerification, encryption, generateToken} = require('../services');
const {UserDAO} = require('../db/dao');

const applyRegistration = async (req,res,next) =>{
    try{
        const {email, pw, locale} = req.body;
        // TODO userDAO 다루는걸 service로 분리?
        const isAlreadyExist = await UserDAO.userAlreadyExist(email);

        if(isAlreadyExist){
            return false;
        }

        let isValid = dataVerification.verificateRegistration(email,pw,locale);
        if(isValid){
            const {encryptedPW, salt} = await encryption.encryptPW(pw);
            const registrationCode = await generateToken();
            await UserDAO.addUser(email, encryptedPW, locale, registrationCode, salt);
        }
        else{
            return false;
        }

    }
    catch(e){

    }
}

module.exports = {
    applyRegistration
}