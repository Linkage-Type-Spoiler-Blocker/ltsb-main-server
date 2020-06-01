// const db = require('../db');
const {dataVerification} = require('../../services');
const should = require('should')


describe('Registration verificate', ()=>{
    it('success test', ()=>{
        let testEmail = 'jooha208@gmail.com';
        let testPW = 'abcdef';
        let testLocale = 'KR';

        dataVerification.verificateRegistration(testEmail,testPW,testLocale);
    // TODO    테스트 코드 작성
    })
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