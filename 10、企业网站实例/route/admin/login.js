const express = require('express');
const mysql = require('mysql');
const tool = require('../../libs/common.js')

const db = mysql.createPool({ host: 'localhost', post: '3306', user: 'root', password: '123456', database: 'company_website' });
const router = express.Router();
module.exports = () => {
    // 解决 Can't set headers after they are sent.报错 即把get请求和post请求分开处理
    router.get('/', (req, res) => {
        res.render('admin/login.ejs', {})
    })
    router.post('/', (req, res) => {
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
    return router;
}