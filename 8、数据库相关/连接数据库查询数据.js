const mysql = require('mysql');

//主机 端口号 用户名 密码 哪个表
const db = mysql.createConnection({host:'localhost',post:'3306',user:'root',password:'123456',database:'2018718'});
db.query("SELECT * FROM `user_table`;", (err,data) => {
	if (err) {
		console.log('查询出错');
	} else {
		console.log(data);
		//输出 [ RowDataPacket { ID: 1, UserName: '呆呆', PassWord: '123456' },
  // RowDataPacket { ID: 2, UserName: 'test', PassWord: '1214124' },
  // RowDataPacket { ID: 3, UserName: '张恒', PassWord: '8888888888888' } ]

	}
})

//增 INSERT INTO `user_table` (`ID`, `UserName`, `PassWord`) VALUES (0, '张恒', '8888888888888');
//删
//改
//查