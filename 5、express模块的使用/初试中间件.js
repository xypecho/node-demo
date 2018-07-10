const express = require('express');
const app = express();

app.listen('8080');

app.use((req, res, next) => {
	console.log('hello world');
	req.a = 'test';
	next();
})

app.use('/', (req, res) => {
	console.log(req.a);
})