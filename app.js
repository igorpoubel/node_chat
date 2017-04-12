/*
* importar configurações
* */

var app = require('./config/server');


/*
* Parametrizar a porta listen
* */

app.listen(8080, function () {
    console.log('SERVER NODE [ON]');
});
