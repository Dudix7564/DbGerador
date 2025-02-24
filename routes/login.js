let express = require('express');
let router = express.Router();
let db = require('../utils/db'); // Conexão com o banco de dados

// Página de login
router.get('/', function(req, res) {
    res.render('login', { title: 'Login' });
});

// Processar login
router.post('/', function(req, res) {
    let Matrícula = req.body.Matrícula;
    let NomeUsuário = req.body.NomeUsuário;

    // Verificar se o usuário existe no banco
    let sql = 'SELECT * FROM tbusuários WHERE Matrícula = ? AND NomeUsuário = ?';
    db.query(sql, [Matrícula, NomeUsuário], function(erro, resultado) {
        if (erro) {
            console.error(erro);
            return res.send('Erro ao tentar logar.');
        }

        if (resultado.length > 0) {
            // Usuário encontrado, redirecionar para a página pessoal
            res.redirect('/matricula/' + Matrícula); // A URL que leva à página do usuário
        } else {
            res.send('Matrícula ou nome de usuário incorretos.');
        }
    });
});

module.exports = router;
