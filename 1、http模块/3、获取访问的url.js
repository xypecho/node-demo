let http = require('http');

http.createServer((req, res) => {
	console.log(req.url);
	res.end('success');
}).listen(3000, '127.0.0.1');
// 访问http://127.0.0.1:3000/  控制台输出‘/’
// 访问http://127.0.0.1:3000/end  控制台输出 ‘/end’
// 访问http://127.0.0.1:3000/user?id=1&name=jack  控制台输出  /user?id=1&name=jack
// 所有的路由设计都是通过 req.url 来实现的