const nodemailer = require('nodemailer');
const aws = require('aws-sdk');
const {constants} = require('../utils');
const {baseAPIAddress} = constants;
const path = require('path');

// TODO config 저장 해두는게 낫나? 다른 config랑 충돌될 가능성?
const configPath = path.join(__dirname, '..', '/config/ses-config.json');
aws.config.loadFromPath(configPath);

let transporter = nodemailer.createTransport({
    SES: new aws.SES({
        apiVersion: '2010-12-01'
    })
});

const generateRegistrationLink = (generationToken) => {
    // TODO base api주소 반영하기 baseAPIAddress 활용

    return generationToken;
}

const sendMailToUser = async (userMail, registrationToken) => {

    const registrationLink = generateRegistrationLink(registrationToken);

    const info = await transporter.sendMail({
        // TODO from 메일주소도 env처리하는게 좋나?
        from: 'jooha208@gmail.com',
        to: userMail,
        subject: 'lstb registration mail',
        text: registrationLink,
    });

    return info;
}


module.exports = {
    sendMailToUser
}