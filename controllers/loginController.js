const {encryption, generateAccessToken} = require('../services');
const {UserDAO} = require('../db/dao');

//TODO supertest 정의하기.
const login = async (req,res,next)=>{
    const {email,pw} = req.body;
    const {salt, encryptedPW, uid} = await UserDAO.getUserProfileFromEmail(email);
    const encryptedPWFromUser = await encryption.encryptPWWithSalt(pw,salt);

    if (encryptedPWFromUser == encryptedPW){
        const token = generateAccessToken(uid);
        res.json({
            token : token
        });
    }
    else{
        next();
    }
}

module.exports = {
    login
}
