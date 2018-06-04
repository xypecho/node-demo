const txt = require('./test/index.js');


// console.log(txt); // module.exports = str; 这种方式导出的话，则使用使用txt
console.log(txt.str); // 如果是用exports.str = str;导出的话，则使用这种方式输出