let express = require('express');
let router = express.Router();
let db = require('../utils/db'); // Conexão com o banco de dados

router.get('/:matricula', function(req, res) {
    let matricula = req.params.matricula;

    // Buscar informações do usuário para mostrar na página
    let sql = 'SELECT * FROM tbusuários WHERE Matrícula = ?';
    db.query(sql, [matricula], function(erro, resultado) {
        if (erro) {
            console.error(erro);
            return res.send('Erro ao carregar a página do usuário.');
        }
        
        if (resultado.length > 0) {
            res.render('pagina_usuario', { title: 'Página do Usuário', usuario: resultado[0] });
        } else {
            res.send('Usuário não encontrado.');
        }
    });
});

module.exports = router;