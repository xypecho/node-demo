const jade = require('jade');

const str = jade.renderFile('./index.jade', {pretty: true, arr: ['a', 'b', 'c', 'd']});
console.log(str);