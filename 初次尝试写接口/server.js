const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

http.createServer((req,res) => {
	let str = ''; //用于拼接传往后台的数据
	let users = {}; //用来存放前台传的数据,存放的数据的格式为{['name':'jack','password':'123455']}
	req.on('data', data => str+=data);
	req.on('end', () => {
		// console.log(url.parse(req.url, true));
		let pathname = url.parse(req.url, true).pathname;
		let query = url.parse(req.url, true).query;
		// console.log(querystring.parse(str))
		if (pathname === '/' || pathname === '/index.html') {
			pathname = 'index.html';
		} // 首页默认为index.html
		// 判断是请求接口还是读取文件，目前接口只有/user所有可以直接判断是否是/user
		if (query === '/user') {
			console.log(123);
			// 处理接口相关的内容
			if (query.act === 'register') {
				// 判断是注册还是登录
				users[query.name] = query.password;
				res.write('{"status":OK,"msg":"注册成功"}');
			} else if (query.act === 'login'){
				res.write('{"status":OK,"msg":"注册成功2313"}');
			} else {
				// fs.readFile('404.html', (error,result) => {
				// 	res.writeHead(404, {'Content-Type':'text/html;charset=UTF8'});
				// 	res.end(result)
				// })
			}
			res.end();
		} else {
			console.log(356);
			// 读取文件
			fs.readFile(pathname, (err, data) => {
				if(err) {
					fs.readFile('404.html', (error,result) => {
						res.writeHead(404, {'Content-Type':'text/html;charset=UTF8'});
						res.end(result)
					})
				} else {
					res.writeHead(200, {'Content-Type':'text/html;charset=UTF8'});
					res.end(data)
				}
			})
		}
	});
}).listen('8080');