const express = require('express');
const app = express();

app.use('/', (req, res) => {
	//res.cookie('user', 'xyp');
	res.clearCookie('user'); // 删除cookie里面到底user字段
	res.send('hello world')
});

app.listen('8080');