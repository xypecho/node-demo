const jade = require('jade');

const str = jade.renderFile('./index.jade', {pretty: true});
console.log(str);