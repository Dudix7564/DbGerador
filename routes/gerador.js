let express = require('express');
let router = express.Router();
let db = require('../utils/db');

router.get('/', function (req, res) {
    db.query('SELECT * FROM tbmídia', [], function (erro, listagem) {
        if (erro) {
            res.send(erro);
        }
        res.render('gerador', { resultado: listagem });
    });
});
module.exports = router;