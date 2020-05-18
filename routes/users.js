var express = require('express');
var router = express.Router();
var crypto = requrie('crypto');
/* Sign up. */
// router.post('/signup', function(req, res, next) {
//   res.send('respond with a resource');
// });


/* Sign in. */
// router.post('/login', function(req, res, next) {
//   res.send('respond with a resource');
// });

//비밀번호 암호화
router.post("/sign_up", async function(req,res,next){
  let body = req.body;

  let inputPassword = body.password;
  let salt = Math.round((new Date().valueOf() * Math.random())) + "";
  let hashPassword = crypto.createHash("sha256").update(inputPassword + salt).digest("hex");

  let result = models.user.create({
    email: body.userEmail,
    password: hashPassword,
    salt: salt
  })

  res.redirect("/route/index");
})


module.exports = router;
