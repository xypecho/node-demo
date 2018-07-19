const express = require('express');
const mysql = require('mysql');

//创建连接池
const db = mysql.createPool({host: 'localhost', user: 'root', password: '123456', database: 'blog'});

const app = express();
app.listen('8080');

app.use('/', (req, res) => {
	db.query('SELECT * FROM banner_table',(err, data) => {
		if (err) {
			res.send('查询错误')
		} else {
			res.send(data)
		}
	})
})