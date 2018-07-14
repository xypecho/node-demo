const ejs = require('ejs');

ejs.renderFile('./index.ejs', {name: '呆呆'}, (err, data) => {
	if (err) {
		console.log('编译失败');
	} else {
		console.log(data);
	}
})

// 输出内容为
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Document</title>
// </head>
// <body>
//         <h1>我的名字是 呆呆 </h1>
// </body>
// </html>
