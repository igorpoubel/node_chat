/*
* importar configurações
* */

var app = require('./config/server');


/*
* Parametrizar a porta listen
* */

var server = app.listen(3000, function () {
    console.log('SERVER NODE [ON]');
});

// Rodar o WebSocket na mesma porta que o express
var io = require('socket.io').listen(server);

// Cria uma variável "global"
app.set('io',io);


// Criar a conexão por websocket
io.on('connection', function (socket) {
    console.log('SOCKET.IO [ON]');

    socket.on('disconnect', function () {
        console.log('SOCKET.IO [OFF]');
    });

    socket.on('msg_server',function (data) {

        // Dialogos
        socket.emit('mensagem',{
            apelido: data.apelido,
            mensagem:data.mensagem
        });

        socket.broadcast.emit('mensagem',{
            apelido: data.apelido,
            mensagem:data.mensagem
        });

        // participantes
        socket.emit('participantes',{
            apelido: data.apelido
        });

        socket.broadcast.emit('participantes',{
            apelido: data.apelido
        });
    });
});