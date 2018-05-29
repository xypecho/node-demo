const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname; // 获取路径
  if (pathname === '/favicon.ico') {
    return;
  } // 把请求图标的return掉
  if (pathname === '/') {
    pathname = '/index.html';
  } // 设备默认主页
  fs.readFile(`../static${pathname}`,(err, data) => {
    if (err) {
      fs.readFile('../static/404.html', 'utf8', (error, result) => {
        res.writeHead(404, {'Content-Type': 'text/html;charset=UTF8'});
        res.end(result);
      });
      return false;
    }
    const mine = getMine(pathname);
    //mine类型
    //网页文件： text/html
    //jpg文件： image/jpg
    res.writeHead(200, {'Content-Type':mine});
    res.end(data);
  });
}).listen(3000, '127.0.0.1');

function getMine(extname) {
  extname = path.extname(extname); // 获取文件后缀
  switch (extname) {
    case '.html':
      return 'text/html';
      break;
    case '.jpg':
      return 'image/jpg';
      break;
  }
}