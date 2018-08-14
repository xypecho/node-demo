const express = require('express');
const mysql = require('mysql');
const db = mysql.createPool({ host: 'localhost', post: '3306', user: 'root', password: '123456', database: 'company_website' });
const router = express.Router();
const path = require('path');
const fs = require('fs');

module.exports = () => {
    router.get('/', (req, res) => {
        // 判断是否是删除数据的请求
        if (req.query.act == 'delete') {
            db.query(`DELETE FROM custom_evaluation_table WHERE ID=${req.query.id}`, (err, data) => {
                if (err) {
                    res.status(500).send('failed to delete data from custom_evaluation_table')
                } else {
                    res.redirect('/admin/custom')
                }
            })
        } else {
            db.query('SELECT * FROM custom_evaluation_table', (err, data) => {
                if (err) {
                    res.status(500).send('failed to select data from custom_evaluation_table').end();
                } else {
                    res.render('./admin/custom.ejs', { data });
                }
            })
        }
    })
    router.post('/', (req, res) => {
        // 判断是编辑还是新增，有id则是编辑
        let title = req.body.title;
        let description = req.body.description;
        console.log(req.files[0])
        console.log(path.parse(req.files[0].path).destination)
        let src = `/${req.files[0].destination}/${req.files[0].originalname}${path.extname(req.files[0].originalname)}`;
        fs.rename(req.files[0].path, src, (err, data) => {
            if (err) {
                // res.status(500).send('failed to upload files').end();
                console.log(err)
            } else {
                if (req.body.id) {
                    db.query(`UPDATE custom_evaluation_table SET title='${title}',description='${description}',src='${src}' WHERE ID = ${req.body.id}`, (err, data) => {
                        if (err) {
                            res.status(500).send('failed to update data in custom_evaluation_table')
                        } else {
                            res.redirect('/admin/custom')
                        }
                    })
                } else {
                    db.query(`INSERT INTO custom_evaluation_table (title,description,src) VALUES ('${title}','${description}','${src}')`, (err, data) => {
                        if (err) {
                            res.status(500).send('failed to insert data in custom_evaluation_table')
                        } else {
                            res.redirect('/admin/custom')
                        }
                    })
                }
            }
        })
    })
    return router;
}