const express = require('express');
const mysql = require('mysql');

const db = mysql.createPool({ host: 'localhost', post: '3306', user: 'root', password: '123456', database: 'company_website' });
const router = express.Router();
module.exports = () => {
    router.get('/', (req, res) => {
        if (req.query.act == 'delete') {
            db.query(`DELETE FROM banner_table WHERE ID = ${req.query.id}`, (err, data) => {
                if (err) {
                    res.status(500).send('failed to delete data')
                } else {
                    res.redirect('/admin/banner');
                }
            })
        } else {
            db.query('SELECT * FROM banner_table', (err, data) => {
                if (err) {
                    res.status(500).send('failed to select data from banner_table');
                } else {
                    res.render('./admin/banner.ejs', { data });
                }
            })
        }

    })

    router.post('/', (req, res) => {
        let title = req.body.title;
        let description = req.body.description;
        let href = req.body.href;
        // 根据是否有id字段，来判断是插入数据还是更新数据
        if (req.body.id) {
            db.query(`UPDATE banner_table SET title='${title}',description='${description}',href='${href}' WHERE ID =${req.body.id}`, (err, data) => {
                if (err) {
                    res.status(500).send('failed to update into banner_table');
                } else {
                    res.redirect('/admin/banner')
                }
            })
        } else {
            db.query(`INSERT INTO banner_table (title,description,href) VALUES ('${title}','${description}','${href}')`, (err, data) => {
                if (err) {
                    res.status(500).send('failed to insert into banner_table');
                } else {
                    res.redirect('/admin/banner')
                }
            })
        }

    })
    return router;
}