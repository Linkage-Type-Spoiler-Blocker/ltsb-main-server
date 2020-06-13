const nodemailer = require('nodemailer');
const {constants} = require('../utils');
const {baseAPIAddress} = constants;
const path = require('path');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port : 587,
    host :'smtp.gmlail.com',
    secure : false,
    requireTLS : true,
    auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PW
    },
    tls: {
        rejectUnauthorized: false
    }
});

const generateRegistrationLink = (generationToken) => {
    // TODO base api주소 반영하기 baseAPIAddress 활용
    // TODO regtoken이라는 parameter로 넣어줘야 한다는거, 주소에 넣어줘야함.

    //  var url = 'http://' + req.get('host')+'/confirmEmail'+'?key='+key_for_verify;

    return generationToken;
}

const sendMailToUser = async (userMail, registrationToken) => {

    const registrationLink = generateRegistrationLink(registrationToken);

    const result = await transporter.sendMail({
        from: process.env.EMAIL_ID,
        to: userMail,
        subject: 'lstb registration mail',
        text: registrationLink,
        //html : '<h1>이메일 인증을 위해 URL을 클릭해주세요.</h1><br>'+url
    });

    return result;
}


module.exports = {
    sendMailToUser
}