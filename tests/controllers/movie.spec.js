const request = require('supertest');
const syncDB = require('../../bin/sync-db');
const app = require('../../app');
const {sequelize} = require('../../db');
const MovieModel = sequelize.model('movie');

describe('/movie', ()=>{

    beforeEach(async ()=>{
        console.log('beforeEach');
        await syncDB()
        await MovieModel.create({
            movie_id : 1234,
            movie_name : "Avengers",
            director_name : "Ruso",
            release_year : 2008,
            language : "en",
            wordset_created : 1
        });
        await MovieModel.create({
            movie_id : 5678,
            movie_name : "Avengers2",
            director_name : "Ruso",
            release_year : 2012,
            language : "en",
            wordset_created : 1
        });
    });

    it('영화검색', async()=>{
        const result = await request(app)
            .get('/movie/search')
            .query(
                {
                    title : "avengers",
                    // director_name : "",
                    // release_year : 1234,
                    language : "en"
                })
            .set('Accept', 'application/json')
            .expect(200);
        console.log(result.body);
    });

    it('단어리스트 받아오기', async()=>{
        const result = await request(app)
            .get('/movie/words')
            .query(
                {
                    movie_id : 1234,
                    title : "Avengers"
                })
            .set('Accept', 'application/json')
            .expect(200);
        console.log(result.body);
    });
});