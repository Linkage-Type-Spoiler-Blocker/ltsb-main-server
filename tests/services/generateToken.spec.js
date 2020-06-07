const {generateRegistrationToken, generateAccessToken} = require('../../services');

describe('generateToken',()=>{
    it('registrationtoken success Test', async () =>{
        const result = await generateRegistrationToken();
        console.log(result);
    });
})