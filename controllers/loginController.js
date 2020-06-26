const {encryption, generateAccessToken} = require('../services');
const {UserDAO} = require('../db/dao');


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

    //TODO 현재 항상 성공하는 상태.
    const token = generateAccessToken(uid);
    res.status(200).json({
        token : token,
        msg : "로그인 완료"
    });
    //
    // if (encryptedPWFromUser === encryptedPW){
    //     const token = generateAccessToken(uid);
    //     res.status(200).json({
    //         token : token,
    //         msg : "로그인 완료"
    //     });
    // }
    // else{
    //     console.log("from user : " + encryptedPWFromUser);
    //     console.log("from user length : " + encryptedPWFromUser.length);
    //     console.log("from db : "+ encryptedPW);
    //     console.log("from db length : " + encryptedPW.length);
    //     res.json({msg:'pw가 일치하지 않습니다'});
    // }
}

module.exports = {
    login
}
