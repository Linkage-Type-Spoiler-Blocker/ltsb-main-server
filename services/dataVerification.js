const {constants} = require('../utils');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const pwRegex = /(.){6,20}/
const availableLocales = constants.availableLocales;
//TODO 굳이 constants를 불러와야 했을까? 여기에서 그냥 변수로 넣어놓는게 나았을지도..

// TODO verificate 코드 작성
const verificateRegistration = (email, pw, locale)=>{
    try{
        const wholeResult = [];
        isEmailValid(email, wholeResult);
        isPWValid(pw, wholeResult);
        isLocaleValid(locale, wholeResult);
        if(wholeResult.length>0){
            throw new Error(wholeResult.join(','));
        }
        return true;
    }
    catch(e){
        throw new Error(e.message);
    }
}

function isEmailValid(email,wholeResult){
    if(!emailRegex.test(email)){
        wholeResult.push('email invalid');
    }
}

function isPWValid(pw, wholeResult){
    if(!pwRegex.test(pw)){
        wholeResult.push('pw invalid');
    }
}

function isLocaleValid(locale, wholeResult){
    if(!availableLocales.includes(locale)){
        wholeResult.push('locale invalid');
    }
}

module.exports = {
    verificateRegistration
}