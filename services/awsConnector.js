//TODO util로 분리할걸 그랬다.

const env = process.env.NODE_ENV ||'development';

const AWS = require('aws-sdk');
if (env === 'development' || 'test') {
    AWS.config.accessKeyId = process.env.AWS_DEV_ACCESS_KEY;
    AWS.config.secretAccessKey = process.env.AWS_DEV_SECRET_ACCESS_KEY;
}
const S3 = new AWS.S3();

console.log('S3 is'+ typeof S3);
console.log(Object.keys(S3));

const loadSES = async()=>{
    const sesCred = await AWS.config.loadFromPath('../config/ses-config.json');
    return new AWS.SES(sesCred);
}

//TODO 테스트 필요.
// (async()=>{
//     exports.S3 = await loadS3();
//     // exports.SES = await loadSES();
// })();

module.exports = {
    S3 : S3
}