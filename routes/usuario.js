let express = require('express');
let router = express.Router();
let db = require('../utils/db'); // Conexão com o banco de dados

router.get('/:matricula', function(req, res) {
    let matricula = req.params.matricula;

    let sqlUsuario = 'SELECT * FROM tbusuários WHERE Matrícula = ?';
    let sqlAvaliacoes = 'SELECT tbusuáriomidia.NotaAvaliação, tbmídia.NoMídia FROM tbusuáriomidia INNER JOIN tbmídia ON tbusuáriomidia.CodMídia = tbmídia.CodMídia WHERE tbusuáriomidia.Matrícula = ?';

    // Consultando o usuário
    db.query(sqlUsuario, [matricula], function(erro, resultadoUsuario) {
        if (erro) {
            console.error('Erro ao buscar usuário:', erro);
            return res.send('Erro ao carregar usuário.');
        }

        if (resultadoUsuario.length === 0) {
            return res.send('Usuário não encontrado.');
        } 

        // Consultando as avaliações do usuário
        db.query(sqlAvaliacoes, [matricula], function (erro, resultadoAvaliacoes) {
            if (erro) {
                console.error('Erro ao buscar avaliações:', erro);
                return res.send('Erro ao carregar avaliações.');
            }

            // Renderizando a página com o usuário e suas avaliações
            res.render('usuario', {
                title: 'Página do Usuário',
                usuario: resultadoUsuario[0],
                avaliacoes: resultadoAvaliacoes // Passando as avaliações para a view
            });
        });
    });
});


module.exports = router;
