const cheerio = require('cheerio');
const superagent = require('superagent');
const fs = require('fs');

superagent.get('https://c.y.qq.com/base/fcgi-bin/fcg_global_comment_h5.fcg').query({
    g_tk: '5381',
    jsonpCallback: 'jsoncallback4760315459529325',
    loginUin: '0',
    hostUin: '0',
    format: 'jsonp',
    inCharset: 'utf8',
    outCharset: 'GB2312',
    notice: '0',
    platform: 'yqq',
    needNewCode: '0',
    cid: '205360772',
    reqtype: '2',
    biztype: '1',
    topid: '202371397',
    cmd: '8',
    needmusiccrit: '0',
    pagenum: '1',
    pagesize: '25',
    lasthotcommentid: 'song_202371397_2655675121_1535193660',
    callback: 'jsoncallback4760315459529325',
    domain: 'qq.com',
    ct: '24',
    cv: '101010'
}).end(res => {
    let result = res.rawResponse
    let idx = result.indexOf('(');
    result = result.substring(idx, result.length);
    result = result.substring(1, result.length - 3);
    fs.writeFile('./musicComment.json', result, (err) => {
        if (err) {
            console.log('获取评论失败')
        } else {
            console.log('下载成功')
        }
    })
})