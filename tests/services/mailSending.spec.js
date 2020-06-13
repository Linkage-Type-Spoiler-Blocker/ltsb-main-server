const {sendMailToUser} = require('../../services');
require("dotenv").config();

describe('sendingEmail',()=>{
    beforeEach(async ()=>{
        require("dotenv").config();
    })
    it('success Test', async (done) =>{
        const testMailAddress = 'astoru@naver.com'
        const testToken = 'www.google.com';
        const result = sendMailToUser(testMailAddress, testToken);
        console.log(result.response);
        done();
    })
})