const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost:3306',
    user: 'root',
    password: 'LiaoSha831106'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });