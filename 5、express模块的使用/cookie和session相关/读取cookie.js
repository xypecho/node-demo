const express = require('express');
const cookieParse = require('cookie-parser');
const app = express();

app.use(cookieParse());

app.use('/', (req, res) => {
	res.cookie('name', 'test', {path: '/aaa', maxAge: 1000 * 3600});
	res.send('hello');
	console.log(req.cookies); //{ name: 'test' }
})

app.listen('9999');