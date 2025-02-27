let express = require('express');
let router = express.Router();
let db = require('../utils/db'); // Conexão com o banco de dados

// /* Página de cadastro */
router.get('/', function(req, res) {
    res.render('cadastro', { title: 'Cadastro' });
});

/* Processar cadastro */
router.post('/', function(req, res) {
    let Matrícula = req.body.Matrícula;
    let NomeUsuário = req.body.NomeUsuário;

    let sql = 'INSERT INTO tbusuários (Matrícula, NomeUsuário) VALUES (?, ?)';
    db.query(sql, [Matrícula, NomeUsuário], function(erro, resultado) {
        if (erro) {
            console.error(erro);
            return res.send('Erro ao cadastrar usuário.');
        }
        res.redirect('/login/'); // Redireciona para a página de login
    });
});
module.exports = router;
