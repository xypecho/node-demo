const express = require('express');
const expressStatic = require('express-static');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');
const bodyParser=require('body-parser');
const multer=require('multer');
const consolidate=require('consolidate');
const mysql = require('mysql');

//创建连接池
const db = mysql.createPool({host: 'localhost', user: 'root', password: '123456', database: 'blog'});

const app = express();
app.listen('8080');

// 配置模版引擎
app.set('view engine', 'html'); // 设置输出的文本格式
app.set('views','./views');
app.engine('html',consolidate.ejs); // 使用哪种模版引擎

app.use('/', (req, res) => {
	db.query('SELECT * FROM banner_table',(err, data) => {
		if (err) {
			res.send('查询错误')
		} else {
			res.send(data)
		}
	})
})