
const {MovieDAO} = require('../db/dao');

const searchMovies = async (req,res,next)=>{
    const options = {};
    options['director'] = req.query['director'];
    options['title'] = req.query['title'];
    options['language'] = req.query['language'];
    options['releaseYear'] = req.query['release-year'];

    const entries = await MovieDAO.searchMovies(options);

    res.json({result : entries});
}

const retrieveWordList = async (req,res,next) =>{

}

module.exports = {
    searchMovies,
    retrieveWordList
}