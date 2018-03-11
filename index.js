var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

socketList = [];


app.post('/pushHook', (req, res) => {io.emit("push");res.send('ok')})

http.listen(port, function(){
  console.log('listening on *:' + port);
});
