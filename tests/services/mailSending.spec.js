const {sendMailToUser} = require('../../services');
require("dotenv").config();

describe('sendingEmail',()=>{
    beforeEach(async ()=>{
        require("dotenv").config();
    })
    it('success Test', async (done) =>{
        const testMailAddress = 'astoru@naver.com'
        const testToken = 'www.google.com';
        const result = sendMailToUser('127.0.0.1',testMailAddress, testToken);
        console.log(result.response);
        done();
    })
})