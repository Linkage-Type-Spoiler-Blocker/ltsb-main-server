var nodemailer = require('nodemailer');
var smtpTransporter=require('nodemailer-smtp-transport');

var key_one=crypto.randomBytes(256).toString('hex').substr(100, 5);
var key_two=crypto.randomBytes(256).toString('base64').substr(50, 5);
var key_for_verify=key_one+key_two;


var user = new User({
  id: new mysql.Types.ObjectId(),
  email: req.body.email,
  password:crypto.createHmac('sha256', secret).update('password').digest('base64'),
  key_for_verify: key_for_verify
});

const smtpTransport = nodemailer.createTransport(smtpTransporter({
  service: "Gmail",
  host: "smtp.gmail.com",
  auth: {
    user: "구글계정@gmail.com",
    pass: "password"
  }
}));
.then(result => {
  console.log(result);
  var url = 'http://' + req.get('host')+'/confirmEmail'+'?key='+key_for_verify;
                    //옵션
  var mailOpt = {
    from: 'dalha.vv@gmail.com',
    to: user.email,
    subject: '이메일 인증을 진행해주세요.',
    html : '<h1>이메일 인증을 위해 URL을 클릭해주세요.</h1><br>'+url
  };
                    //전송
  smtpTransport.sendMail(mailOpt, function(err, res) {
    if (err) {
      console.log(err);
    } else {
        console.log('email has been sent.');
    }
    smtpTransport.close();
  });
  res.send('<script type="text/javascript">alert("이메일을 확인하세요."); window.location="/"; </script>');
}

router.get('/confirmEmail',function (req,res) {
    User.updateOne({key_for_verify:req.query.key},{$set:{email_verified:true}}, function(err,user){
        if (err) {
            console.log(err);
        }
        else if(user.n==0){
            res.send('<script type="text/javascript">alert("Not verified"); window.location="/"; </script>');
        }
        //인증 성공
        else {
            res.send('<script type="text/javascript">alert("Successfully verified"); window.location="/"; </script>');
        }
    });
});
