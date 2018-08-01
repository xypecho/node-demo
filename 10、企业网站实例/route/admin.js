const express = require('express');

module.exports = () => {
	const router = express.Router();
	// 路由拦截，没登录时重定向到login页面
	router.use((req,res,next) => {
		if (!req.session['admin_id'] && req.url != '/login') {
			res.redirect('/admin/login');
		} else {
			next();
		}
	})

	router.get('/login',(req,res) => {
		res.render('../template/admin/login.ejs')
	})
	return router;
}