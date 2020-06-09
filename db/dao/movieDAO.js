const {sequelize} = require('../index');
const MovieModel = sequelize.model('movie');

const searchMovies = async (options) => {
    //TODO 정확히 일치하는 결과만 보여주고 있다. 영화이름과 감독이름에 대해서는 부분적으로 일치해도 반환을 해야함.

    const convertedOptions = {};

    convertedOptions['movie_name'] = options['title'];
    convertedOptions['director_name'] = options['director'];
    convertedOptions['language'] = options['language'];
    convertedOptions['release_year'] = options['releaseYear'];
    convertedOptions['wordset_created'] = 1;

    const fullOptions = {};
    fullOptions.where = convertedOptions;
    fullOptions.raw = true;
    const entries = await MovieModel.findAll(fullOptions);

    // TODO 결과를 db결과를 날것으로 반환하기보다는 좀 더 비즈니스로직에 맞게 바꿔서 반환해주어야 하나?
    return entries
}

module.exports = {
    searchMovies
}