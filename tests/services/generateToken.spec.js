const {generateToken} = require('../../services');

describe('generateToken',()=>{
    it('success Test', async () =>{
        const result = await generateToken();
        console.log(result);
    })
})