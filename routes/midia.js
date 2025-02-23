// nao faço ideia doq tem q fazer mas eu vou continuar dps
let express = require('express');
let router = express.Router();
let db = require('../utils/db')

// /* Página de cadastro */
router.get('/midia', function(req, res) {
    res.render('midia', { title: 'Mídia' });
});

router.get('/midia', function(req, res) {
    db.query('SELECT (NoMídia, AnoMídia) FROM tbmídia', [], function(erro, listagem) {
        if (erro) {
            console.error(erro);
            return res.send('Erro ao listar mídia.');
        }
        res.send(listagem);
    });
});

module.exports = router