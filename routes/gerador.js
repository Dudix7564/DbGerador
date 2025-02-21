let express = require('express');
let router = express.Router();
let db = require('../utils/db');

router.get('/gerador', function(req, res) {
    db.query('SELECT * FROM tbmídia', [], function(erro, listagem){
        if (erro){
        res.send(erro);
        }
        res.send(listagem);
        res.render('mídia', {resultado: listagem});
        });
    });
 
    
    module.exports = router;