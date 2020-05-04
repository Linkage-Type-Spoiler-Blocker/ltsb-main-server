const should = require('should')
const request = require('supertest')
const app = require('../app')
const db = require('../db');

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
	it('db',(done)=>{
		console.log(Object.keys(db));
		done()
	})
})