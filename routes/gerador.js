let express = require('express');
let router = express.Router();
let db = require('../utils/db');

router.get('/:matricula', function (req, res) {
    let matricula = req.params.matricula
    db.query('SELECT * FROM tbmídia', [], function (erro, listagem) {
        if (erro) {
            res.send(erro);
        }
        res.render('gerador', { resultado: listagem, matricula: matricula });
    });
});
module.exports = router;