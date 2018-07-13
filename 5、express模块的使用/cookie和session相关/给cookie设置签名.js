const express = require('express');
const cookieParse = require('cookie-parser');
const app = express();

app.use(cookieParse());

app.use('/', (req, res) => {
	req.secret = 'sdasdlaksjdkajsdl'; // 设置签名
	res.cookie('name', 'test', {signed: true}); // 来校验cookie是否被篡改过
	console.log(req.cookies); //只能获取未设置签名的cookie
	console.log(req.signedCookies); // 获取已经被签名的cookie
	res.send('hello world');
})

app.listen('8080');