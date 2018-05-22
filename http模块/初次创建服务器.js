// 引用模块
let http = require('http');

//创建一个服务器，回调函数表示收到请求后做的事，request是请求，response是响应
let server = http.createServer((request, response) => {
	console.log(`服务器已经打开${request.url}`);	
	response.end('完毕');//必须要有end，不然一直在加载
})

server.listen(3000, '127.0.0.1');