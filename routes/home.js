let express = require('express');
let router = express.Router();

/* Página principal */
router.get('/', function(req, res) {
    res.render('home', { title: 'Bem-vindo' });
});

module.exports = router;
