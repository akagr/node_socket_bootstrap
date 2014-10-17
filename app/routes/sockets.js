module.exports = function(io){
  io.on('connection', function(socket){

    socket.on('test', function(data){
      socket.broadcast.emit('tested', data);
    });

    socket.on('disconnect', function(){
      // Cleanup code
    });

  });
};
