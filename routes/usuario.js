let express = require('express');
let router = express.Router();
let db = require('../utils/db'); // Conexão com o banco de dados

// Página do usuário


router.get('/:Matrícula', function (req, res){
    console.log("Rota /usuario carregada!");
    let Matrícula = req.params.Matrícula;

    let sqlUsuario = 'SELECT * FROM tbusuários WHERE Matrícula = ?';
    let sqlAvaliacoes = 'SELECT * FROM tbusuáriomidia WHERE Matrícula = ?';  // Supondo que a avaliação tenha um campo MatrículaUsuario que referencia o usuário

    // Consultando o usuário
    db.query(sqlUsuario, [Matrícula], (erro, resultadoUsuario) => {
        if (erro) {
            console.error('Erro ao buscar usuário:', erro);
            return res.send('Erro ao carregar usuário.');
        }

        if (resultadoUsuario.length === 0) {
            return res.send('Usuário não encontrado.');
        }

        // Consultando as avaliações do usuário
        db.query(sqlAvaliacoes, [Matrícula], (erro, resultadoAvaliacoes) => {
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
