const express = require('express');
let app = express();

const users = {
	'test': '123',
	'admin': 'admin'
}
app.get('/login', (req, res) => {
	console.log(req.query)
	console.log(req.query.user,users[req.query.password]);
	if (req.query.password === users[req.query.user]) {
		res.send({'status':true,'msg':'登录成功'})
	}
	res.end();
})

app.listen('8080');