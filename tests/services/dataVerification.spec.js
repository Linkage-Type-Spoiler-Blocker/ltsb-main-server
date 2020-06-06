
const {dataVerification} = require('../../services');
const should = require('should')


describe('Registration verificate', ()=>{
    it('success test', ()=>{
        let testEmail = 'jooha208@gmail.com';
        let testPW = 'abcdef';
        let testLocale = 'KR';

        dataVerification.verificateRegistration(testEmail,testPW,testLocale);
    })
    it('wrong email address', ()=>{
        let testEmail = 'jooha208gmail.com';
        let testPW = 'abcdef';
        let testLocale = 'KR';

        should.throws(()=>dataVerification.verificateRegistration(testEmail,testPW,testLocale),"email invalid");
    })
    it('wrong pw', ()=>{
        let testEmail = 'jooha208@gmail.com';
        let testPW = 'abcd';
        let testLocale = 'KR';

        should.throws(()=>dataVerification.verificateRegistration(testEmail,testPW,testLocale),"pw invalid");
    })
    it('wrong locale', ()=>{
        let testEmail = 'jooha208@gmail.com';
        let testPW = 'abcdef';
        let testLocale = 'KFC';

        should.throws(()=>dataVerification.verificateRegistration(testEmail,testPW,testLocale),"locale invalid");
    })
})