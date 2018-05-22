const http = require('http');
const url = require('url');

http.createServer((req, res) => {
	var pathName = url.parse(req.url).pathname; 
	//访问 http://127.0.0.1:3000/user?id=1&name=jack  输出 /user

	var query = url.parse(req.url).query; 
	//访问 http://127.0.0.1:3000/user?id=1&name=jack  输出 id=1&name=jack

	var queryarr = url.parse(req.url, true).query; 
	//访问 http://127.0.0.1:3000/user?id=1&name=jack  输出 { id: '1', name: 'jack' }

	console.log(queryarr);
	res.end('success');
}).listen(3000, '127.0.0.1');
