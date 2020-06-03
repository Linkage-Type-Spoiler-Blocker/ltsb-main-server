
const {dataVerification} = require('../../services');
const should = require('should')


describe('Registration verificate', ()=>{
    it('success test', ()=>{
        let testEmail = 'jooha208@gmail.com';
        let testPW = 'abcdef';
        let testLocale = 'KR';

        dataVerification.verificateRegistration(testEmail,testPW,testLocale);
    })
    // TODO 테스트 형식을 에러가 발생하고, 그 메시지 내용이 일치하는걸로 바꾸자.
    // 실패하는 테스트는 오해하기 쉽다.
    it('wrong email address', ()=>{
        let testEmail = 'jooha208gmail.com';
        let testPW = 'abcdef';
        let testLocale = 'KR';

        dataVerification.verificateRegistration(testEmail,testPW,testLocale);
    })
    it('wrong pw', ()=>{
        let testEmail = 'jooha208@gmail.com';
        let testPW = 'abcd';
        let testLocale = 'KR';

        dataVerification.verificateRegistration(testEmail,testPW,testLocale);
    })
    it('wrong locale', ()=>{
        let testEmail = 'jooha208@gmail.com';
        let testPW = 'abcdef';
        let testLocale = 'KFC';

        dataVerification.verificateRegistration(testEmail,testPW,testLocale);
    })
})