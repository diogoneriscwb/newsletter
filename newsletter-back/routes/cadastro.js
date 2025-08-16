const express = require('express');
const router = express.Router();
const db = require('../database');

// Rota para cadastrar novo inscrito (sem verificação por e-mail)
router.post('/cadastro', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'E-mail é obrigatório' });
    }

    const query = `INSERT INTO inscritos (email, verificado) VALUES (?, ?)`;
    db.run(query, [email, 1], function(err) {
        if (err) {
            return res.status(500).json({ error: 'Erro ao cadastrar', detalhes: err.message });
        }

        res.status(200).json({ mensagem: 'Inscrição realizada com sucesso!' });
    });
});

module.exports = router;