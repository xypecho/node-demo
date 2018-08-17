const express = require('express');
const app = express()
const expressStatic = require('express-static');

module.exports = () => {
	const router = express.Router();
	router.get('/',(req,res) => {
		res.render('./web/index.html')
	})
	return router;
}