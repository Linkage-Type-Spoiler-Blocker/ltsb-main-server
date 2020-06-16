const should = require('should')
const request = require('supertest')
const app = require('../app')
const syncDB = require('../bin/sync-db');
const {UserDAO, MovieDAO} = require('../db/dao');
const {sequelize} = require('../db/index');
const MovieModel = sequelize.model('movie');

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

//TODO db 테스트도 분리해가지고, 가끔 실행시키는게 맞는듯. db테스트는 아무리 sqlite로 대체해도 쌓이면 오래걸린다.
describe('db sync test',()=>{

	beforeEach(async ()=>{
		console.log('beforeEach');
		await syncDB()
	})

	it('user create worked',async ()=>{
		const testMail = 'jooha208@gmail.com';
		const testPW = 'abcde';
		const testLocale = 'KR';
		const registrationCode = 'abcdde';
		const testSalt = 'ddd';

		await UserDAO.addUser(testMail,testPW, testLocale, registrationCode, testSalt);
		const result = await UserDAO.userAlreadyExist('jooha208@gmail.com');

		result.should.equal(true);
	});

	it('activateTokenUser test', async () =>{
		const testMail = 'jooha208@gmail.com';
		const testPW = 'abcde';
		const testLocale = 'KR';
		const registrationCode = 'abcdde';
		const testSalt = 'ddd';

		await UserDAO.addUser(testMail,testPW, testLocale, registrationCode, testSalt);
		await UserDAO.activateTokenUser(registrationCode);
		const result = await UserDAO.checkIfNoWaitingUser();

		result.should.equal(false);
	});

	//TODO 검색 옵션 좀더 강화시킨 후 실패테스트까지 하나 추가로 만들기.
	it('movie search test', async() => {
		const createOptions = {
			movie_id : 1,
			movie_name : "Avengers",
			director_name : "Joseph",
			release_year : 2012,
			language : "kr",
			wordset_created : 1
		};
		const createOptions2 = {
			movie_id : 2,
			movie_name : "ffff",
			director_name : "bbbbb",
			release_year : 2015,
			language : "kr",
			wordset_created : 1
		};
		const searchOptions = {
			title : "Avengers",
			director : "Joseph",
			language : "kr",
			releaseYear : 2012
		};

		await MovieModel.create(createOptions);
		await MovieModel.create(createOptions2);

		const entry = await MovieDAO.searchMovies(searchOptions);
		console.log(entry);

		const searchOptions2 = {
			title : "avenge",
			director : "josE",
		};

		const entry2 = await MovieDAO.searchMovies(searchOptions2);
		console.log(entry2);
	})
});
