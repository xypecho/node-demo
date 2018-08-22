const express = require('express');
const app = express()
const expressStatic = require('express-static');
const mysql = require('mysql');

module.exports = () => {
	const router = express.Router();
	//设置跨域请求头
	router.all('*', function (req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "X-Requested-With");
		res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
		res.header("X-Powered-By", ' 3.2.1')
		res.header("Content-Type", "application/json;charset=utf-8");
		next();
	});
	db = mysql.createPool({ host: 'localhost', post: '3306', user: 'root', password: '123456', database: 'company_website' })
	router.get('/', (req, res) => {
		res.redirect('/index.html')
	})
	router.get('/get_banners', (req, res) => {
		db.query('SELECT * FROM banner_table', (err, data) => {
			if (err) {
				res.status(500).send('failed to get data').end();
			} else {
				res.status(200).send([data]).end();
			}
		})
	})
	return router;
}