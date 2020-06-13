//TODO util로 분리할걸 그랬다.

const env = process.env.NODE_ENV ||'development';

const AWS = require('aws-sdk');

const loadS3 = async()=>{
    AWS.config.region = 'us-west-1';
    if(env === 'development'||'test'){
        AWS.config.accessKeyId = process.env.AWS_DEV_ACCESS_KEY;
        AWS.config.secretAccessKey = process.env.AWS_DEV_SECRET_ACCESS_KEY;
    }

    return new AWS.S3();
}

const loadSES = async()=>{
    const sesCred = await AWS.config.loadFromPath('../config/ses-config.json');
    return new AWS.SES(sesCred);
}

//TODO 테스트 필요.
(async()=>{
    exports.S3 = await loadS3();
    // exports.SES = await loadSES();
})();

module.exports = {
}