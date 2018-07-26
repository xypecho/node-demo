const express = require('express');
const multer = require('multer');
const fs = require('fs');

const app = express();
const multerobj = multer({ dest: './static' }); // 设置存放图片的位置
app.use(multerobj.any()); // any指接受所有文件，single()指接受指定文件，例如single('f1')指只接受html文件里面name为f1的input的文件
app.use('/', (req, res) => {
    for (let i = 0; i <= req.files.length; i++) {
        fs.rename(req.files[i].path, `static/${req.files[i].originalname}`, (err, data) => {
            if (err) {
                console.log('文件存储失败');
            } else {
                console.log('文件上传成功!!!');
            }
        })
    }
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*" //允许跨域。。。
    });
    res.end('文件上传好了哦');
});
app.listen(8080);