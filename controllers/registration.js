const {dataVerification} = require('../services');
const {encryption} = require('../services');

const applyRegistration = async (req,res,next) =>{
    const {email, pw, locale} = req.body;
    try{
        let isValid = dataVerification.verificateRegistration(email,pw,locale);
        if(isValid){
            const {encryptedPW, salt} = await encryption.encryptPW(pw);
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