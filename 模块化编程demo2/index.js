const http = require('http');
const router = require('./test/router.js');
http.createServer((req, res) => {
	console.log(req.url);
	if (req.url === '/' || req.url === '/index') {
		router.showIndex(req, res);
	} else if (req.url === '/student') {
		router.showStudent(req, res);
	} else {
		router.show404(req, res);
	}
}).listen(3000, '127.0.0.1');