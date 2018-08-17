const express = require('express');
const app = express()
const expressStatic = require('express-static');
const mysql = require('mysql');

module.exports = () => {
	const router = express.Router();
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