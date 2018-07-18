const mysql = require('mysql');

//主机 端口号 用户名 密码 哪个表
const db = mysql.createConnection({host:'localhost',post:'3306',user:'root',password:'123456',database:'2018718'});
console.log(db);