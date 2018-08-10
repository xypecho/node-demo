const express = require('express');
const tool = require('../../libs/common.js')
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
    router.get('/', (req, res) => {
        res.render('./admin/index.ejs', {});
    })

    router.use('/login',require('./login.js')())
    router.use('/banner', require('./banner.js')())

    return router;
}