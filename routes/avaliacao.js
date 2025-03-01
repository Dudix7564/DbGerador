let express = require('express');
let router = express.Router();
let db = require('../utils/db'); // Conexão com o banco de dados

// /* Página de cadastro */
router.get('/', function(req, res) {
    res.render('avaliacao', { title: 'Avaliação' });
});

/* Processar cadastro */
router.post('/', function(req, res) {
    let Matrícula = req.body.Matrícula;
    let Filme = req.body.CodMídia;
    let Nota = req.body.NotaAvaliação;

    let sql = 'INSERT INTO tbusuáriomidia (Matrícula, CodMídia, NotaAvaliação) VALUES (?, ?, ?)';
    db.query(sql, [Matrícula, Filme, Nota], function(erro, resultado) {
        if (erro) {
            console.error(erro);
            return res.send('Erro na avaliação');
        }
        res.redirect('/usuario//:matricula'); // Redireciona para a página de login
    });
});
module.exports = router;
