const {encryption, generateAccessToken} = require('../services');
const {UserDAO} = require('../db/dao');

//TODO supertest 정의하기.
const login = async (req,res,next)=>{
    const {email,pw} = req.body;
    const {salt, encryptedPW, uid} = await UserDAO.getUserProfileFromEmail(email);
    if(salt === undefined){
        res.status(200).json({
            msg:"해당 유저가 없습니다"
        });
        return ;
    }
    const encryptedPWFromUser = await encryption.encryptPWWithSalt(pw,salt);

    if (encryptedPWFromUser === encryptedPW){
        const token = generateAccessToken(uid);
        res.status(200).json({
            token : token,
            msg : "로그인 완료"
        });
    }
    else{
        res.json({msg:'pw가 일치하지 않습니다'});
        next();
    }
}

module.exports = {
    login
}
