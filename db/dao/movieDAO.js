const {Sequelize,sequelize} = require('../index');
const MovieModel = sequelize.model('movie');
const like = Sequelize.Op.like;


const searchMovies = async (options) => {
    //TODO undefined 걸러내기와 like 대입하기를 어떻게 효율적으로 할 수 있지?

    const convertedOptions = {};
    if(options['title']!==undefined){
        convertedOptions['movie_name'] = {[like]: `%${options['title']}%`};
        console.log(convertedOptions['movie_name']);
    }
    if(options['director']!==undefined){
        convertedOptions['director_name'] = {[like]: `%${options['director']}%`};
    }
    if(options['releaseYear']!==undefined){
        convertedOptions['language'] = options['language'];
    }
    if(options['language']!==undefined){
        convertedOptions['release_year'] = options['releaseYear'];
    }
    convertedOptions['wordset_created'] = 1;

    const fullOptions = {};
    fullOptions.where = convertedOptions;
    fullOptions.raw = true;
    const entries = await MovieModel.findAll(fullOptions);

    // TODO 결과를 db결과를 날것으로 반환하기보다는 좀 더 비즈니스로직에 맞게 바꿔서 반환해주어야 하나?
    // TODO wordset created옵션은 제외하고 돌려주기. 이건 내부적으로만 사용될 attribute다.
    return entries
}

module.exports = {
    searchMovies
}