
const {encryption} = require('../../services');

describe('encryption', ()=>{
    it('success test', async()=>{
        const testPW = 'redpanda';
        const {encryptedPW, salt} = await encryption.encryptPW(testPW);
        console.log(encryptedPW);
        console.log(salt);
    })
    it('encryption test', async()=>{
        // const testPW = 'abcdef';
        // const testSalt = 'aQoLcZT1tFfq3OvOX+gk1vvNEjhbCdZERM';
        // const base64Salt = encryption.base64Encode(testSalt);
        // const encryptedPW = await encryption.encryptPWWithSalt(testPW, base64Salt);
        //
        // console.log(testSalt);
        // console.log(encryptedPW);
        // const expectedPW = '+1loaLvX4Clf8VM5QBp4IXbz5frua4/i+K';
        // const base64ExpectedPW = encryption.base64Encode(expectedPW);
        // console.log(expectedPW);
        // console.log(base64ExpectedPW);
        //
        // const utf8PW = Buffer.from(encryptedPW, 'base64').toString('utf8');
        // console.log(utf8PW);
    })
})