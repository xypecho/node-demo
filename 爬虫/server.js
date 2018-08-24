let cheerio = require('cheerio');
let http = require('http');
let https = require("https");
let fs = require('fs');
const url = 'http://example.com'

for (let i = 3; i < 50; i++) {
    http.get(`http://example?page=${i}.html`, res => {
        let dataArr = [];
        res.on('data', data => {
            dataArr.push(data);
        })
        res.on('end', () => {
            dataArr = dataArr.toString();
            let $ = cheerio.load(dataArr, { decodeEntities: false })
            $('.ABox img').each(function (idx) {
                let src = $(this).attr('src')
                console.log(`这是第${i}页${idx}张图片，图片路径是${src}`)
                if (src) {
                    if (src.indexOf(',') != -1) {
                        src = src.replace(',', '');
                    }
                    http.get(src, function (response) {
                        let images = '';
                        response.setEncoding("binary"); // 设置编码，不然打不开下载的图片  
                        response.on('data', function (image) {
                            images += image;
                        })
                        response.on('end', function () {
                            fs.writeFile(`./images/${i}page${idx}index.jpg`, images, "binary", function (err) {
                                if (err) {
                                    console.log("down fail");
                                } else {
                                    console.log('down success')
                                }
                            });
                        })
                    })
                }
            })
        })
    }).on('error', err => {
        console.error(err)
    })
    for (let j = 0; j < 50000; j++) {

    }
}
