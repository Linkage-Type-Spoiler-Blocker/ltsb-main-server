const express = require('express')
const app = express()
const path = require('path')
const mysql = require('mysql')

const router = express.Router()

var connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3000,
    user     : /*입력*/,
    password : /*입력*/,
    database : /*입력*/'
});

router.get('/', function(req,res){
     res.sendFile(path.join(__dirname, './route/index'))
 })

router.post('/', function(req,res){
 var email = body.email;
 var passwd = body.password;

 var query = connection.query('insert into user (email, password) values ("' + email + '","' + passwd + '")', function(err, rows) {
     if(err) { throw err;}
     console.log("Data inserted!");
 })
})

module.exports = router;
