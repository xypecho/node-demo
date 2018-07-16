const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const _file = multer({dest:'./uploads/'}); // 设置存放图片的位置
app.use(_file.any()); // any指接受所有文件，single()指接受指定文件，例如single('f1')指只接受html文件里面name为f1的input的文件
app.post('/',(req,res) => {
	console.log(req.files)
	let newName = './uploads/' + new Date().toLocaleString().replace(' ','-').replace(/:/g,'-') + path.extname(req.files[0].originalname);
	console.log(newName);
	// 下面是重命名文件的方法
	fs.rename(req.files[0].path, newName, (err, data) => {
		if (err) {
			res.send('上传错误')
		} else {
			res.send('上传成功');
		}
	})
})
app.listen('8080');