const jade = require('jade');

const str = jade.renderFile('./index.jade', {pretty: true}); // pretty美化输出的html
console.log(str);
// 输出内容如下
// <html>
//   <head>
//     <style></style>
//   </head>
//   <body>
//     <div></div>
//     <div>
//       <ul>
//         <li></li>
//         <li></li>
//       </ul>
//     </div>
//   </body>
// </html>
