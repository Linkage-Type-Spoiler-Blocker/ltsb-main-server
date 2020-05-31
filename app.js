var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var movieRouter = require('./routes/movie');
var sequelize = require('./db').sequelize;

var app = express();
var mysql = require('mysql');
var user = require('./models/user');
var PORT = process.env.PORT || 3000;


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

//로그인
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Session = require('express-session');
var flash = require('connect-flash');
var mysql = require('connect-mysql-session')(Session);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/movie',movieRouter);

app.listen(PORT, function () {
    console.log('Example app listening on port',PORT);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
