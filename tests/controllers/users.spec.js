const request = require('supertest');
const syncDB = require('../../bin/sync-db');
const app = require('../../app');

describe('/users', ()=>{

    beforeEach(async ()=>{
        console.log('beforeEach');
        await syncDB()
    });
    
    //TODO token 반환 없이로 바뀌면, 이 테스트도 변경되어야 한다.

    it('회원가입 - 인증 - 로그인', async()=>{
        let regToken = "";
        const result = await request(app)
            .post('/users/signup')
            .send({email: 'astoru@naver.com', pw :'abcdef', locale:'KR'})
            .set('Accept', 'application/json')
            .expect(200);

        console.log(result.body);
        regToken = result.body.token;

        // 내가 어떤 토큰이 반환되는지 어떻게 압니까. 그걸 email로만 보낼텐데.
        // 일단 테스트용으로 토큰도 반환하도록 만들자.

        const result2 = await request(app)
            .post('/users/verify-email')
            .query({ regtoken: regToken })
            .set('Accept', 'application/json')
            .expect(200)
            .expect({msg : "가입이 완료되었습니다."});

        console.log(result2.body);

        const result3 = await request(app)
            .post('/users/login')
            .send({email: 'astoru@naver.com', pw :'abcdef'})
            .set('Accept', 'application/json')
            .expect(200)
        console.log(result3.body);
    });
})