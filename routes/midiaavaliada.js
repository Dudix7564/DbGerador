let express = require('express');
let router = express.Router();
let db = require('../utils/db');

router.get('/midiaavaliada', function (req, res) {
    db.query('SELECT * FROM `tbusuáriomidia`', [], function (erro, resultado) {
        if (erro) {
            res.send(erro);
            return res.send('Erro ao processar.');
        }
        res.send(resultado);
    });
});



module.exports = router;