const express = require('express');
const tool = require('../libs/common.js')
const mysql = require('mysql');

module.exports = () => {
    const db = mysql.createPool({ host: 'localhost', post: '3306', user: 'root', password: '123456', database: 'company_website' });
    const router = express.Router();
    // 路由拦截，没登录时重定向到login页面
    router.use((req, res, next) => {
        if (!req.session['admin_id'] && req.url != '/login') {
            res.redirect('/admin/login');
        } else {
            next();
        }
    })

    router.use('/login', (req, res) => {
        let username = req.body.username;
        let password = req.body.password;
        db.query('SELECT * FROM admin_table', (err, data) => {
            if (err) {
            	res.status(500).send('database error').end();
            } else {
            	if (data.length == 0) {
            		res.status(404).send('not found data').end();
            	} else {
            		if (data[0].password == tool.md5(`${password}`)) {
            			res.status(200).send('登录成功').end();
            		} else {
            			res.status(500).send('帐号不存在').end();
            		}
            	}
            }
        })
        res.render('admin/login.ejs', {})
    })
    return router;
}