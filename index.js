var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

socketList = [];

app.get('/', (req, res) => {io.emit("New Github push");  res.send('ok')})

http.listen(port, function(){
  console.log('listening on *:' + port);
});
