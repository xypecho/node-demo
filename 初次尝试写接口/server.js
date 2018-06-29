const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

http.createServer((req, res) => {
	let str; // 用来接收前台传来的数据
	req.on('data', (data) => {
		str+=data;
	})
	req.on('end', () => {
		const obj = url.parse(req.url, true);
		const query = obj.query; // url中的参数
		const pathname = obj.pathname; // 获取url路由
		const postData = querystring.parse(str); // 解析前台传来的数据，解析的格式为{ name: 'whitemu', sex: 'man' }
		if (obj.pathname === '/favicon.ico') {
			return false; // 屏蔽对favicon.ico'的请求
		}
		// console.log(pathname)
		if (pathname === '/user') {
			// 在此处处理user接口相关内容
			if (query.act == 'registered') {
				res.writeHead(200, {'Content-Type':'text/plain;charset=UTF8'});
				res.write("{'status':'ok','msg':'注册成功'}")
				res.end();
				// 处理注册相关的逻辑
			} else if (query.act == 'login') {
				res.writeHead(200, {'Content-Type':'text/plain;charset=UTF8'});
				res.write("{'status':'ok','msg':'登录成功'}")
				res.end();
				// 处理登录相关逻辑
			} else {
				res.writeHead(404, {'Content-Type':'text/plain;charset=UTF8'});
				res.write("{'status':'error','msg':'发生未知错误'}")
				res.end();
				// fs.readFile('www/404.html', 'utf8', (error, result) => {
				// 	if (error) {
				// 		return;
				// 	}
				// 	res.writeHead(404, {'Content-Type':'text/html;charset=UTF8'});
				// 	res.end(result);
				// })
			}
		} else {
			fs.readFile('www' + pathname, (err, data) => {
				if (err) {
					fs.readFile('www/404.html', 'utf8', (error, result) => {
						if (error) {
							return;
						}
						res.writeHead(404, {'Content-Type':'text/html;charset=UTF8'});
						res.end(result);
					})
					return;
				}
				console.log(data)
				res.writeHead(200, {'Content-Type':'text/html;charset=UTF8'});
				res.end(data)
			})
		}
	})
}).listen('8081')