// 引用模块
const http = require('http');
const fs = require('fs');
//创建一个服务器，回调函数表示收到请求后做的事，request是请求，response是响应
let server = http.createServer((req, res) => {
	fs.readFile('./newtest.html',(err,data)=>{
		res.end(data);//必须要有end，不然一直在加载
	})
})

server.listen(8888, '127.0.0.1');//监听3000端口，第二个参数是绑定的ip；node该文件夹后，浏览器打开 127.0.0.1:3000 即可访问