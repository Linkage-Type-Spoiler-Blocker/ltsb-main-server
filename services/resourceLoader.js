const awsConnector = require('../services')
const s3 = awsConnector['S3'];
//TODO s3 의존성 제거할 수 있는 방법? 제거해야 하나?
//환경 파악해서, production 아니라면 단순한 객체형태로 만들기? 대신 인터페이스는 일치시키자.

const loadJson = async (movieId) => {
    const keyName = 'movie-words/' + movieId.toString() + '.json';
    try {
        const data = await s3.getObject({
            Bucket: 'ltsb-main',
            Key: keyName,
            ResponseContentType: 'application/json'
        });
        const contents = data.Body.toString()
        return JSON.parse(contents);
    }
    catch (err){
        return {};
    }
}

module.exports = {
    loadJson
}