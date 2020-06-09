
const {MovieDAO} = require('../db/dao');
const {resourceLoader} = require('../services');

const searchMovies = async (req,res,next)=>{
    const options = {};
    options['director'] = req.query['director'];
    options['title'] = req.query['title'];
    options['language'] = req.query['language'];
    options['releaseYear'] = req.query['release-year'];

    const entries = await MovieDAO.searchMovies(options);

    res.json({result : entries});
}

// TODO naming 마음에 안든다.
const requestWordList = async (req, res, next) =>{
    const movieId = req.query['movie_id'];
    const title = req.query['title'];

    const resultObj = {};
    resultObj['movieId'] = movieId;
    resultObj['title'] = title;
    resultObj['words'] = await resourceLoader.loadJson(movieId);
    res.json(resultObj);
}

module.exports = {
    searchMovies,
    requestWordList
}