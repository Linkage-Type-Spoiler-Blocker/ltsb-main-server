var express = require('express');
var router = express.Router();

/* 생략가능하긴 함.  */
router.get('/', function(req, res, next) {
  res.writeHead(200,{"Content-Type" : "application/json"});
  var resText = JSON.stringify({
    text : "this is rest-api server, so please check the api documents"
  })
  res.end(resText);
});

module.exports = router;
