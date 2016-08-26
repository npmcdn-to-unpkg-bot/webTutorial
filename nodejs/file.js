var file = require('fs');

// 创建目录
// file.mkdir("newdir",function(err){
//   console.log(err);
// });


// 删除目录
// file.unlink("./newdir",function(err){
//   console.log(err);
// });


// 文件重命名
file.rename('./olddir', './newdir', (err) => {
  console.log(err);
  if (err) throw err;
  file.stat('./newdir', (err, stats) => {
    if (err) throw err;
    console.log(`stats: ${JSON.stringify(stats)}`);
  });
});
