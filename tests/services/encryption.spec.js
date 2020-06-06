
const {encryption} = require('../../services');

describe('encryption', ()=>{
    it('success test', async()=>{
        const testPW = 'redpanda';
        const {encryptedPW, salt} = await encryption.encryptPW(testPW);
        console.log(encryptedPW);
        console.log(salt);
    })
})