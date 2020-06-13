
const {MovieDAO} = require('../db/dao');
const {resourceLoader} = require('../services');

const searchMovies = async (req,res,next)=>{
    const options = {};
    options['director'] = req.query['director'];
    options['title'] = req.query['title'];
    options['language'] = req.query['language'];
    options['releaseYear'] = req.query['release-year'];

    const withoutUndefinedOptions = {};

    for (let [key, value] of Object.entries(options)) {
        if(value !== undefined){
            withoutUndefinedOptions[key] = value;
        }
    }

    const entries = await MovieDAO.searchMovies(withoutUndefinedOptions);

    res.json({result : entries});
}

// TODO naming 마음에 안든다.
const requestWordList = async (req, res, next) =>{
    try {

        const movieId = req.query['movie_id'];
        const title = req.query['title'];

        const resultObj = {};
        resultObj['movieId'] = movieId;
        resultObj['title'] = title;
        resultObj['words'] = await resourceLoader.loadJson(movieId);
        res.json(resultObj);
    }
    catch(e) {
        console.log(e);
        next(e);
    }
}

module.exports = {
    searchMovies,
    requestWordList
}