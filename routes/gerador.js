let express = require('express');
let router = express.Router();
let db = require('../utils/db');

router.get('/:matricula', function (req, res) {
    let matricula = req.params.matricula
    db.query('SELECT m.CodMídia, m.NoMídia, tm.NoTipoMídia AS TipoMídia, gm.NoGênero AS GêneroMídia, sm.NoStreaming AS Streaming, m.AnoMídia FROM tbmídia m JOIN tbtipomídia tm ON m.TipoMídia = tm.TipoMídia JOIN tbgêneros gm ON m.GêneroMídia = gm.GêneroMídia JOIN tbstreaming sm ON m.Streaming = sm.Streaming ORDER BY m.CodMídia', [], function (erro, listagem) {
        if (erro) {
            res.send(erro);
        }
        res.render('gerador', { resultado: listagem, matricula: matricula });
    });
});
module.exports = router;