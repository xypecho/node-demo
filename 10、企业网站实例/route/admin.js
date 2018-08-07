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
    router.get('/login',(req,res) => {
        res.render('admin/login.ejs', {})
    })
    router.post('/login', (req, res) => {
        let username = req.body.username;
        let password = req.body.password;
        db.query('SELECT * FROM admin_table', (err, data) => {
            // console.log(data[0].ID)
            if (err) {
            	res.status(500).send('{"status":true,"msg":"查询数据失败"}').end();
            } else {
            	if (data.length == 0) {
            		res.status(404).send('{"status":true,"msg":"查询失败"}').end();
            	} else {
            		if (data[0].password == tool.md5(`${password}`)) {
                        res.account = data[0];
            			// res.status(200).send('{"status":true,"msg":"登录成功"}').end();
                        req.session['admin_id'] = data[0].ID;
                        res.redirect('/admin/');
            		} else {
            			res.status(500).send('{"status":true,"msg":"帐号不存在"}').end();
            		}
            	}
            }
        })
    })

    router.get('/',(req,res) => {
        console.log(res.account);
        app.use(express.static(path.join('template/admin/assets')))
        res.render('./admin/index.ejs',{});
    })
    return router;
}