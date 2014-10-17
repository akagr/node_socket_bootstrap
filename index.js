var express        = require('express'),
    bodyparser     = require('body-parser'),
    methodOverride = require('method-override'),
    path           = require('path'),
    config         = require('./config.js'),
    app            = express(),
    server         = require('http').createServer(app),
    io             = require('socket.io').listen(server),
    socket_routes  = require('./app/routes/sockets.js'),
    user_routes    = require('./app/routes/users.js'),
    home_routes    = require('./app/routes/home.js');

app.set('views', path.join(__dirname, 'app', 'views'));
app.set('view engine', 'jade');
app.use(methodOverride('_method'));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', home_routes);
app.use('/u', user_routes);

socket_routes(io);

server.listen(config.port, function(){
  console.log('Server started on:' + config.port);
});
