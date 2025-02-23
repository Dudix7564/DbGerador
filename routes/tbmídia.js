// nao faço ideia doq tem q fazer mas eu vou continuar dps

router.post('/mídia', function(req, res) {
    let NoMídia = req.body.NoMídia;
    let AnoMídia = req.body.AnoMídia;

    let sql = 'SELECT (NoMídia, AnoMídia) FROM tbmídia';
    db.query(sql, [IdUsuário, NomeUsuário], function(erro, resultado) {
        if (erro) {
            console.error(erro);
            return res.send('Erro ao cadastrar usuário.');
        }
        res.send('Cadastro realizado com sucesso!'); // Aqui você pode redirecionar para o login
    });
});