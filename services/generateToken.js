const crypto = require('crypto');

module.exports = async ()=>{
    const result = await crypto.randomBytes(16).toString('hex');
    return result;
}