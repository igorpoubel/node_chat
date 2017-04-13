module.exports.iniciar_chat = function (app, req, res) {

    var dados = req.body;
    console.log(dados);

    req.assert('apelido', 'Apelido é obrigatório').notEmpty();
    req.assert('apelido', 'Apelido deve ter conter entre 3 e 15 caracteres').len(3,15);

    var erros = req.validationErrors();

    if(erros){
        res.render('index',{validacao: erros});
        return;
    }

    app.get('io').emit(
        'mensagem',
        {
            apelido: dados.apelido,
            mensagem: 'logou com sucesso'
        }
    );

    res.render('chat', {dadosLogin : dados});
};