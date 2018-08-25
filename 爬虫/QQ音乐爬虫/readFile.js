const fs = require('fs');
const express = require('express');
const app = express();

app.use('/get_comment', (req, res) => {
    fs.readFile('./musicComment.json', (err, data) => {
        if (err) {
            console.log('读取文件错误')
            res.send(err).end()
        } else {
            let result = data.toString();
            res.send(result).end();
        }
    })
}).listen(3001)

