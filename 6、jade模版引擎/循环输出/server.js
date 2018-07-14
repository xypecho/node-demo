const jade = require('jade');

	const str = jade.renderFile('./index.jade', {pretty: true, arr: ['a', 'b', 'c', 'd'], text:'<h1>这是文档啊啊啊</h1>'});
console.log(str);