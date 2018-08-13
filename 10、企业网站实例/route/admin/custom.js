const express = require('express');
const mysql = require('mysql');

const db = mysql.createPool({ host: 'localhost', post: '3306', user: 'root', password: '123456', database: 'company_website' });
const router = express.Router();

module.exports = () => {
    router.get('/', (req, res) => {
        db.query('SELECT * FROM custom_evaluation_table', (err, data) => {
            if (err) {
                res.status(500).send('failed to select data from custom_evaluation_table').end();
            } else {
                res.render('./admin/custom.ejs');
            }
        })
    })
    router.post('/', (req, res) => {
        console.log(req.body)
        console.log(req.files)
        
    })
    return router;
}