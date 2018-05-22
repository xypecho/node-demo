let http = require('http');

let server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type':'text/html;charset=UTF8'}); 
	//前面的200是状态码
	//`text/html`指将返回的内容解析为html；若把`text/html`改为`text/plain`将直接输出‘<h1>hello world</h1>’
	res.end('<h1>hello world</h1>')
});

server.listen(3000,'127.0.0.1');
//此时的response headers为

//Connection: keep-alive
// Content-Type: text/html;charset=UTF8
// Date: Tue, 22 May 2018 14:23:17 GMT
// Transfer-Encoding: chunked