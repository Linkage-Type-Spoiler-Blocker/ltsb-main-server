const nodemailer = require('nodemailer');

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

const generateRegistrationLink = (hostAddress, generationToken) => {
    const url = 'http://' + hostAddress + '/verify-email'+'?token=' + generationToken;

    return url;
}

const sendMailToUser = async (hostAddress, userMail, registrationToken) => {

    console.log(process.env.EMAIL_PW === undefined);
    console.log(process.env.EMAIL_ID === undefined);

    const registrationLink = generateRegistrationLink(hostAddress, registrationToken);

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