const express = require('express');

module.exports = () => {
	const router = express.Router();
	router.get('/',(req,res) => {
		res.send('我是admin的首页');
	})
	return router;
}