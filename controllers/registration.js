const {dataVerification, encryption, generateRegistrationToken, sendMailToUser} = require('../services');
const {UserDAO} = require('../db/dao');

const applyRegistration = async (req,res,next) =>{
    let registrationCode;
    try{
        const {email, pw, locale} = req.body;
        const hostAddress = req.get('host');

        // TODO userDAO 다루는걸 service로 분리?
        const isAlreadyExist = await UserDAO.userAlreadyExist(email);

        if(isAlreadyExist){
            res.status(200).json({msg : "이미 가입한 사용자입니다."});
            return false;
        }

        let isValid = dataVerification.verificateRegistration(email,pw,locale);
        if(isValid){
            const {encryptedPW, salt} = await encryption.encryptPW(pw);
            registrationCode = await generateRegistrationToken();
            // console.log('token : '+registrationCode);
            await UserDAO.addUser(email, encryptedPW, locale, registrationCode, salt);
            sendMailToUser(hostAddress, email, registrationCode);
            res.status(200).json({msg : "요청이 성공적으로 보내졌습니다. 메일을 확인하세요.", token : registrationCode});
            //TODO 원래 여기서 token 반환해주면 안된다.
        }
        else{
            res.status(200).json({msg : "유효하지 않은 토큰입니다"});
            return false;
        }
    }
    catch(e){
        res.status(200).json({msg : e.message});
        next(e);
    }
}

const activateUser = async (req,res,next) => {
    try{
        const token = req.query.regtoken;

        const result = await UserDAO.activateTokenUser(token);
        if(result === true){
            res.status(200).json({msg : "가입이 완료되었습니다."});
        }
        else{
            res.status(200).json({msg : "가입을 먼저 진행해주세요."});
        }
    }
    catch(e){
        console.log(e);
        next(e);
    }
}

module.exports = {
    applyRegistration,
    activateUser
}