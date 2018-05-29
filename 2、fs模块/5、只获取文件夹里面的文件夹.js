const fs = require('fs');


fs.readdir('../1、http模块', (err, data) => {
	let fireArr = [];
	(function getFile(i){
		// 这种写法强行把异步函数变成了同步
		if (i === data.length) {
			console.log(fireArr);
			return;
		} // 当循环的次数等于数组的长度时，退出循环
		fs.stat('../1、http模块/' + data[i], (error, status) => {
			if (status.isDirectory()) {
				fireArr.push(data[i]);
			}
			getFile(i + 1);
		});
	})(0);
});
