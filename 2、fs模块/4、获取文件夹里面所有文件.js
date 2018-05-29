const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
	if (req.url === '/favicon.ico') {
		return;
	}
	fs.readdir('../1、http模块', (err, data) => {
		console.log(data); // 返回的data是个数组
	});
	res.end('success');
}).listen(3000, '127.0.0.1');