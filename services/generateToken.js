const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const generateRegistrationToken = async ()=>{
    const result = await crypto.randomBytes(16).toString('hex');
    return result;
}

const generateAccessToken = async (uid)=>{
    return jwt.sign({
        uid: uid
    }, process.env.JWT_SECRET, {
        issuer: 'ltsb',
    });
}

module.exports = {
    generateRegistrationToken,
    generateAccessToken
}