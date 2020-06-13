const {S3} = require('./awsConnector');
//TODO s3 의존성 제거할 수 있는 방법? 제거해야 하나?

const loadJson = async (movieId) => {
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