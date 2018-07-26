const express = require('express');
const mysql = require('mysql');
const expressStatic = require('express-static');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const consolidate = require('consolidate');
const expressRoute = require('express-route');
const multer = require('multer');
const fs = require('fs');

const app = express();
const multerobj = multer({dest:'./static/upload'}); // 设置存放图片的位置
app.use(multerobj.any());// any指接受所有文件，single()指接受指定文件，例如single('f1')指只接受html文件里面name为f1的input的文件
app.use('/',(req, res) => {
    for (let i = 0; i <= req.files.length; i++) {
    	fs.rename(req.files[i].path,'static/upload'+req.files[i].originalname,(err,data) => {
    		if (err) {
    			res.send('文件存储失败');
    		} else {
    			res.send('文件上传成功!!!');
    		}
    	})
    }
});
app.listen(8080);