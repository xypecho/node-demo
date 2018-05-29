const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
	res.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
	//readFile接受两个参数，第一个是文件路径，第二个是读取成功的回调函数
	fs.readFile('word.txt',(err, data) => {
		if (err) {
			throw err;
		}
		console.log(1);
		res.end('success' + data);
	});
	console.log(2);
}).listen(3000, '127.0.0.1');