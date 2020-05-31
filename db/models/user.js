var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost',
  port: /*입력*/,
  user: /*입력*/,
  password: /*입력*/,
  database: /*입력*/
});

conn.connect();

var sql = 'SELECT * FROM topic';
conn.query(sql, function(err, row, fields){
  if(err){
    console.log(err);
  } else{
    console.log('rows', rows);
    console.log('fields', fields);
  }
});

conn.end();
