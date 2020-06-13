const awsConnector = require('../services')
const {S3} = require('./awsConnector');
//TODO s3 의존성 제거할 수 있는 방법? 제거해야 하나?
//환경 파악해서, production 아니라면 단순한 객체형태로 만들기? 대신 인터페이스는 일치시키자.

const loadJson = async (movieId) => {
    console.log(typeof S3);
    const keyName = 'movieWords/' + String(movieId) + '.json';
    try {
        const data = await S3.getObject({
            Bucket: 'ltsb-bucket',
            Key: keyName,
            ResponseContentType: 'application/json'
        }).promise();
        const contents = data.Body.toString()
        return JSON.parse(contents);
    }
    catch (err){
        console.log(err);
        return {};
    }
}

module.exports = {
    loadJson
}