const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
	fs.stat('2、异步创建文件夹.js', (err, data) => {
		console.log(data);
		console.log(data.isDirectory());
	});
	res.end('success');
}).listen(3000, '127.0.0.1');