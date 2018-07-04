const express = require('express');
let server = express();

server.use('/a.html', (req, res) => {
	res.send('hello world');
	res.end();
})
server.listen('8080');