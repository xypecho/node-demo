const fs = require('fs');

fs.readFile('package.json', 'utf8', (err, data) => {
	if (err) {
		throw Error('没有找到JSON文件');
	}
	console.log(typeof(data));
	data = JSON.parse(data); // JSON.parse() 方法用于将一个 JSON 字符串转换为对象。
	console.log(typeof(data));
	console.log(data.name);
	console.log(data.scripts.dev);
})