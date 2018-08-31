const fs = require('fs');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://jandan.net/top-ooxx');
  let imgObj = await page.$$eval('.view_img_link', a => {
    let arr = [];
    a.map(v => {
      arr.push(v.href);
    })
    return arr;
  });
  // console.log(imgObj)
  for (let i = 0; i < imgObj.length; i++) {
    // page = await browser.newPage()
    await page.goto(imgObj[i]); //防止页面太长，加载超时
    await page.screenshot({ path: `./img/img${i}.jpg` });
    console.log(`================正在下载第${i}张图片，还剩${imgObj.length - i}张待下载================`)
  }
  browser.close()
})();
