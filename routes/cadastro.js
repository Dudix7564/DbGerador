let express = require('express');
let router = express.Router();
let db = require('../utils/db'); // Conexão com o banco de dados

// /* Página de cadastro */
router.get('/cadastro', function(req, res) {
    res.render('cadastro', { title: 'Cadastro' });
});

/* Processar cadastro */
router.post('/cadastro', function(req, res) {
    let IdUsuário = req.body.IdUsuário;
    let NomeUsuário = req.body.NomeUsuário;

    let sql = 'INSERT INTO tbusuários (IdUsuário, NomeUsuário) VALUES (?, ?)';
    db.query(sql, [IdUsuário, NomeUsuário], function(erro, resultado) {
        if (erro) {
            console.error(erro);
            return res.send('Erro ao cadastrar usuário.');
        }
        res.send('Cadastro realizado com sucesso!'); // Aqui você pode redirecionar para o login
    });
});
module.exports = router;
