const http = require('http');
// 接收前台post请求发送的数据
http.createServer((req, res) => {
	let str = '';
	req.on('data', (data) => {
		str += data;
	}); // 数据传输时触发(可以触发多次)
	req.on('end', () => {
		console.log(str)
	}) // 数据全部到达触发 (只触发一次)
}).listen(3000);