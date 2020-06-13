const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const generateRegistrationToken = ()=>{
    return new Promise((resolve,reject)=>{
        crypto.randomBytes(16,(err,buf)=>{
            if (err) reject(err);
            else resolve(buf.toString('hex'));
        });
    })
}

const generateAccessToken = (uid)=>{
    return new Promise((resolve,reject)=>{
        jwt.sign({
            uid: uid
        }, process.env.JWT_SECRET, {
            issuer: 'ltsb',
        },(err,token2)=>{
            if (err) reject(err);
            else resolve(token2);
        });
    });
}

module.exports = {
    generateRegistrationToken,
    generateAccessToken
}