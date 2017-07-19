var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var onlineUsers = [];

io.on('connection', function(socket) {

  // New socket connection
  console.log('New connection - socket id: ' + socket.id);

  // Broadcast received messages to all but the sender
  socket.on('chat message', function(msg) {
    console.log('message: ' + JSON.stringify(msg));
    socket.broadcast.emit('chat message', msg);
  });

  // New user joins the chat
  socket.on('chat join', function(displayName) {
    // Add user to list of online users
    console.log('New member joined chat: ' + displayName);
    onlineUsers.push({
      'id': socket.id,
      'displayName': displayName
    });
    // Send a message to say someone has joined
    io.emit('chat message', {
      sender: '',
      message: displayName + ' joined the chat',
      received: new Date()
    });
    // Send the updated list of online users
    io.emit('chat online', onlineUsers);
  });

  // Disconnect from socket/chat
  socket.on('disconnect', function() {
    console.log('User disconnected - socket id: ' + socket.id);
    // Remove user from logged in onlineUsers
    var pos = onlineUsers.map(function(user) {
      return user.id;
    }).indexOf(socket.id);
    onlineUsers.splice(pos, 1);
    // Send the list of online users
    socket.broadcast.emit('chat online', onlineUsers);
  });

});

http.listen(3000, function() {
  console.log('listening on *:3000');
});
