const express = require('express');
const cookieSession = require('cookie-session');
const app = express();

app.use(cookieSession({
	name: 'test',
	keys: ['a', 'b', 'c'],
	maxAge: 1000 // 过期时间，单位是毫秒
}));
app.use('/', (req, res) => {
	if (req.session['count'] == null) {
		req.session['count'] = 1;
	} else {
		req.session['count'] ++;
	}
	console.log(req.session['count']);
	// delete req.session;  // 删除session
	res.send('finally');
})

app.listen('8080');
