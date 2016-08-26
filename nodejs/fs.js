var fs = require('fs');

// 创建目录
// fs.mkdir("newdir",function(err){
//   console.log(err);
// });
// 
// 删除目录
fs.unlink("./newdir",function(err){
  console.log(err);
});
