let express = require('express');
let router = express.Router();
let db = require('../utils/db'); // Conexão com o banco de dados

// /* Página de cadastro */
router.get('/:matricula', function(req, res) {
    let matricula = req.params.matricula;
    res.render('avaliacao', { title: 'Avaliação', matricula: matricula });
});

/* Processar cadastro */
router.post('/:matricula', function(req, res) {
    let matricula = req.params.matricula;
    let Filme = req.body.CodMídia;
    let Nota = req.body.NotaAvaliação;

    let sql = 'INSERT INTO tbusuáriomidia (matricula, CodMídia, NotaAvaliação) VALUES (?, ?, ?)';
    db.query(sql, [matricula, Filme, Nota], function(erro, resultado) {
        if (erro) {
            console.error(erro);
            return res.send('Erro na avaliação');
        }
        res.redirect(`/usuario/${matricula}`); // Redireciona para a página de login
    });
});
module.exports = router;
