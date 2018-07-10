const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.listen('8080')

app.use(bodyParser.urlencoded())

app.use('/', (req, res) => {
	console.log(req.body)
})