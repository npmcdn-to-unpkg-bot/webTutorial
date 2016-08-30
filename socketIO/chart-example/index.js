var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// 测试 express
// app.get('/', function(req, res){
//   res.send('<h1>Hello World</h1>');
// });

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
})

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  })
})

http.listen(3000, function(){
  console.log(('listening on localhost.3000'));
})