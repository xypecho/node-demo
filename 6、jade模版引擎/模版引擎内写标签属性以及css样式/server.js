const jade = require('jade');
const fs = require('fs');

const str = jade.renderFile('./index.jade', {pretty: true, name: '的呆呆地', json:{color:'red',fontSize:'33px'},arr:['test','test123']})
console.log(str);
fs.writeFile('./test.html', str, (err, date) => {
	if (err) {
		console.log('创建文件错误')
	} else {
		console.log('success');
	}
})