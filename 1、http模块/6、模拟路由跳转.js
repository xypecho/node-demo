let http = require('http');
let url = require('url');

http.createServer((req, res) => {
	let url = req.url;
	if (url.substr(0, 9) === '/student/') {
		res.writeHead(200, {'Content-Type':'text/html;charset=UTF8'});
		res.end('您正在请求学生的数据,学生的id为' + url.substr(9));
	} else if (url.substr(0, 9) === '/teacher/') {
		res.writeHead(200, {'Content-Type':'text/html;charset=UTF8'});
		res.end('您正在请求老师的数据,老师的id为' + url.substr(9));
	} else {
		res.writeHead(404, {'Content-Type':'text/html;charset=UTF8'});
		res.end('404 not found');
	}
	console.log(url);
}).listen(3000, '127.0.0.1');