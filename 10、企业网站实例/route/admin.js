const express = require('express');
const tool = require('../libs/common.js')
const mysql = require('mysql');
const app = express()
const path = require('path')

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

    // 解决 Can't set headers after they are sent.报错
    router.get('/login', (req, res) => {
        res.render('admin/login.ejs', {})
    })
    router.post('/login', (req, res) => {
        let username = req.body.username;
        let password = req.body.password;
        db.query('SELECT * FROM admin_table', (err, data) => {
            if (err) {
                res.status(500).send('{"status":true,"msg":"查询数据失败"}').end();
            } else {
                if (data.length == 0) {
                    res.status(404).send('{"status":true,"msg":"查询失败"}').end();
                } else {
                    if (data[0].password == tool.md5(`${password}`)) {
                        res.account = data[0];
                        req.session['admin_id'] = data[0].ID;
                        res.redirect('/admin/');
                    } else {
                        res.status(500).send('{"status":true,"msg":"帐号不存在"}').end();
                    }
                }
            }
        })
    })

    router.get('/', (req, res) => {
        res.render('./admin/index.ejs', {});
    })

    router.get('/banner', (req, res) => {
        db.query('SELECT * FROM banner_table', (err, data) => {
            console.log(data)
            if (err) {
                res.status(500).send('failed to select data from banner_table');
            } else {
                res.render('./admin/banner.ejs', {data});
            }
        })

    })

    router.post('/banner', (req, res) => {
        let title = req.body.title;
        let description = req.body.description;
        let href = req.body.href;
        db.query(`INSERT INTO banner_table (title,description,href) VALUES ('${title}','${description}','${href}')`, (err, data) => {
            if (err) {
                res.status(500).send('failed to insert into banner_table');
            } else {
                res.redirect('/admin/banner')
            }
        })
    })
    return router;
}