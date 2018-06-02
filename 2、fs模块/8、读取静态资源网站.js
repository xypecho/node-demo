const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path'); // 用来获取文件后缀

http.createServer((req, res) => {
	let pathName = url.parse(req.url).pathname;
	if (pathName === '/favicon.ico') {
		return;
	}
	if (pathName === '/') {
		pathName = '/index.html';
	}
	fs.readFile(`./测试的网站${pathName}`, (err, data) => {
		if (err) {
			fs.readFile('404.html', 'utf8', (error, result) => {
				res.writeHead(404, {'Content-Type':'text/html;charset=UTF8'});
				res.end(result);
			})
			return;
		}
		getExtname(pathName, function(ret) {
			res.writeHead(200, {'Content-Type':`${ret};charset=UTF8`});
			res.end(data);
		});
	})
}).listen(3000, '127.0.0.1');

function getExtname(file, callback) {
	let extname = path.extname(file);
	fs.readFile('./contentType.json', (err,data) => {
		if (err) {
			throw Error('没有找到contentType.json文件');
		}
		data = JSON.parse(data);
		callback(data[extname]);
	})
}