const express = require('express');

module.exports = () => {
    const router = express.Router();
    router.use('/1.html', (req, res) => {
        // res.send('这是test页面').end();
        res.render('1.ejs', {title:'test123',a:'hello world'});
    });
    router.use('/2.html', (req, res) => {
        res.send('啪啪啪').end();
    })
    return router;
}