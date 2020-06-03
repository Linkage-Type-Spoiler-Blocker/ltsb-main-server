const should = require('should')
const request = require('supertest')
const app = require('../app')
const syncDB = require('../bin/sync-db');
const {UserDAO} = require('../db/dao');

/* 단순히 서버 동작 확인위한 테스트. */
describe('GET /index', ()=>{
	it('index test', (done)=>{
		request(app)
			.get('/')
			.end((err,res)=>{
				console.log(res.status);
				console.log(res.body);
				done()
			})
	})
});

describe('db sync test',()=>{

	it('user create worked',async ()=>{
		await syncDB();
		const testMail = 'jooha208@gmail.com';
		const testPW = 'abcde';
		const testLocale = 'KR';
		const registrationCode = 'abcdde';
		const testSalt = 'ddd';
		await UserDAO.addUser(testMail,testPW, testLocale, registrationCode, testSalt);
		console.log(await UserDAO.userAlreadyExist('jooha208@gmail.com'));
	});
});
