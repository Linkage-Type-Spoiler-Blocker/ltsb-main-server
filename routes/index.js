var express = require('express');
var router = express.Router();
var app = express();
var path = require('path')
// // var Promise = require("bluebird");
// // var crypto = requrie("crypto");
//
// //회원가입
//  var main = require('./main/main')
//  var email = require('./email/email')
//  var join = require('./join/index')
//
//  router.get('/', function(req,res){
//      console.log('indexjs . path loaded');
//  });
//
//  router.use('/main', main)
//  router.use('/email', email)
//  router.use('/join', join)
//
//  module.exports = router;
//
// //로그인
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
//
// passport.serializeUser(function (user, done) {
//     done(null, user);
// });
// passport.deserializeUser(function (user, done) {
//     done(null, user);
// });
//
// passport.use(new LocalStrategy({
//         usernameField: 'email',
//         passwordField : 'password',
//         passReqToCallback : true
//     },
//     function (req, email, password, done)
//     {
//         User.findOne({email: email, password: crypto.createHash('sha256').update(password).digest('base64')}, function(err, user){
//             if (err) {
//                 throw err;
//             } else if (!user) {
//                 return done(null, false, req.flash('login_message','이메일 또는 비밀번호를 확인하세요.'));
//             } else {
//                 return done(null, user);
//             }
//         });
//     }
// ));
//
// router.post('/login', passport.authenticate('local', {failureRedirect: '/login', failureFlash: true}),function (req, res) {
//     res.redirect('/');
// });
// router.get("/login", (req, res) => res.render("login", {message: req.flash('login_message')}));
//
//
// /* 생략가능하긴 함.  */
// router.get('/', function(req, res, next) {
//   res.writeHead(200,{"Content-Type" : "application/json"});
//   var resText = JSON.stringify({
//     text : "this is rest-api server, so please check the api documents"
//   })
//   res.end(resText);
// });

module.exports = router;
