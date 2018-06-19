const queryString = require('querystring');

const arr = queryString.parse('user=daidai&sex=man&age=18');
console.log(arr);
//{ user: 'daidai', sex: 'man', age: '18' }
