const crypto = require("crypto");

const stretchCounts = 9528;
const keyLen = 32;

const encryptPW = async (pw)=>{
    const salt = await generateSalt();
    const encryptedPW = await encryptPWWithSalt(pw,salt);
    return {
        salt : salt,
        encryptedPW : encryptedPW
    }
}

async function generateSalt(){
    const buf = await new Promise((resolve, reject) => {
        crypto.randomBytes(keyLen, (err, buf) => {
            resolve(buf);
        });
    });
    return buf.toString('base64');
}

async function encryptPWWithSalt(pw,salt){
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(pw, salt, stretchCounts, keyLen, 'sha256', (err, key) => {
            const encodedKey = key.toString('base64');
            resolve(encodedKey);
        });
    });
}

const base64Encode = (utf8Text)=>{
    return Buffer.from(utf8Text, "utf8").toString('base64');
}


module.exports = {
    encryptPW,
    encryptPWWithSalt,
    base64Encode
}