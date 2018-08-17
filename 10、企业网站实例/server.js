const express = require('express');
const mysql = require('mysql');
const expressStatic = require('express-static');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const consolidate = require('consolidate');
const expressRoute = require('express-route');
const multer = require('multer');
const multerobj = multer({ dest: './static/upload' }); // 设置存放图片的位置

const app = express();
app.listen(8080);

//1.获取请求数据
app.use(bodyParser.urlencoded())
app.use(multerobj.any()); // any指接受所有文件，single()指接受指定文件，例如single('f1')指只接受html文件里面name为f1的input的文件

//2.cookie，session
app.use(cookieParser());
(() => {
    let keys = [];
    for (var i = 0; i < 10000; i++) {
        keys[i] = 'a_' + Math.random();
    }
    app.use(cookieSession({
        name: 'admin_id',
        keys,
        MaxAge: 20 * 60 * 1000 // 20分钟
    }))
})(); // 设置session

//3.模版
app.engine('html', consolidate.ejs);
app.set('views', 'template');
app.set('view engine', 'html');

//4.route
app.use('/', require('./route/web/web.js')());
app.use('/admin/', require('./route/admin/admin.js')());


//5.没有获取到数据，设置默认显示的数据 default:static
app.use(expressStatic('./static/web'))