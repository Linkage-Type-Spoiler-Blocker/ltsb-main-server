const AWS = require('aws-sdk');

const loadS3 = async()=>{
    //TODO accesspath 따로 지정할 수 있으니까 이것도 그냥 dotenv로 부르자.
    const s3Cred = await AWS.config.loadFromPath('../config/s3-config.json');
    return new AWS.S3(s3Cred);
}

const loadSES = async()=>{
    const sesCred = await AWS.config.loadFromPath('../config/ses-config.json');
    return new AWS.SES(sesCred);
}

//TODO 테스트 필요.
(async()=>{
    exports.S3 = await loadS3();
    exports.SES = await loadSES();
})();

module.exports = {
}