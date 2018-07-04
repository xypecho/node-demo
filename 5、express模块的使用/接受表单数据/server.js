const express = require('express');
let server = express();

server.get('', (data) => {
	console.log('这是get方法');
	console.log(data);
})

server.listen('8081');