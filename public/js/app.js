(function(){

  var socket = io();

  socket.emit('test', Date.now());

  socket.on('tested', function(data){
    console.log('New client joined at:' + data);
  });

})();
