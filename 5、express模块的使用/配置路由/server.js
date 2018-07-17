const express = require('express');
const app = express();

// 下面是user的子页面
const router = express.Router();
router.get('/a.html',(req, res) => {
	res.send('这是a页面');
})
router.get('/b.html',(req, res) => {
	res.send('这是bbbbbbbbbbbbbbbbbb页面');
})
app.use('/user' ,router);

// 下面是admin的子页面
const adminRouter = express.Router();
adminRouter.get('/a.html',(req, res) => {
	res.send('这是admin页面');
})
adminRouter.get('/b.html',(req, res) => {
	res.send('这是aaaaaaaaaaaaaaaaaaaaadmin页面');
})
app.use('/admin' ,adminRouter);
app.listen('8080');