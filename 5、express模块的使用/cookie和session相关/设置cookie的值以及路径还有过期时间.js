const express = require('express');
const app = express();

app.use('/', (req, res) => {
	res.cookie('user', 'test', {path: '/aaa', maxAge: 30 * 24 * 3600 * 1000}); //过期时间以毫秒为单位，path指只能在这个路径下访问cookie
	res.send('hello world');
})

app.listen('8080');