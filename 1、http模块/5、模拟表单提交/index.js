let http = require('http');
let url = require('url');

http.createServer((req, res) => {
	let queryObj = url.parse(req.url, true).query;
	console.log(queryObj);
	res.end('服务器收到了请求' + queryObj.name);
}).listen(3000, '127.0.0.1');