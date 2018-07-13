const express = require('express');
const cookieParse = require('cookie-parser');
const app = express();

app.use(cookieParse());

app.use('/', (req, res) => {
	req.secret = 'sdasdlaksjdkajsdl'; // 设置签名
	res.cookie('name', 'test', {signed: true}); // 来校验cookie是否被篡改过
	console.log(req.cookies); //{ name: 'test' }
	res.send('hello world');
})

app.listen('8080');