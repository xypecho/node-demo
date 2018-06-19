const url = require('url');

const data = url.parse('http://127.0.0.1:3000/?name=jack&age=123123&sex=woman');
// Url {
//   protocol: 'http:',
//   slashes: true,
//   auth: null,
//   host: '127.0.0.1:3000',
//   port: '3000',
//   hostname: '127.0.0.1',
//   hash: null,
//   search: '?name=jack&age=123123&sex=woman',
//   query: 'name=jack&age=123123&sex=woman',
//   pathname: '/',
//   path: '/?name=jack&age=123123&sex=woman',
//   href: 'http://127.0.0.1:3000/?name=jack&age=123123&sex=woman' }

const obj = url.parse('http://127.0.0.1:3000/?name=jack&age=123123&sex=woman', true); // 加参数true则会解析query字段成json
// Url {
//   protocol: 'http:',
//   slashes: true,
//   auth: null,
//   host: '127.0.0.1:3000',
//   port: '3000',
//   hostname: '127.0.0.1',
//   hash: null,
//   search: '?name=jack&age=123123&sex=woman',
//   query: { name: 'jack', age: '123123', sex: 'woman' },
//   pathname: '/',
//   path: '/?name=jack&age=123123&sex=woman',
//   href: 'http://127.0.0.1:3000/?name=jack&age=123123&sex=woman' }

console.log(obj);