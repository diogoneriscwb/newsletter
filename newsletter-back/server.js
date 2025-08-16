const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conexão com o banco de dados
const db = new sqlite3.Database('newsletter.db', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
        console.log('Banco de dados conectado com sucesso!');
    }
});

// Criação da tabela (se não existir)
db.run(`CREATE TABLE IF NOT EXISTS inscritos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL
)`, (err) => {
    if (err) {
        console.error('Erro ao criar tabela:', err.message);
    } else {
        console.log('Tabela "inscritos" pronta!');
    }
});

// Rota de inscrição
app.post('/api/inscricao', (req, res) => {
    const { email } = req.body;
    console.log('Novo inscrito:', email);

    db.run(`INSERT INTO inscritos (email) VALUES (?)`, [email], function(err) {
        if (err) {
            if (err.message.includes('UNIQUE constraint failed')) {
                // Email já existe
                res.status(400).json({ mensagem: 'Este email já está cadastrado.' });
            } else {
                // Outro erro qualquer
                console.error('Erro ao inserir inscrito:', err.message);
                res.status(500).json({ mensagem: 'Erro ao salvar inscrição.' });
            }
        } else {
            res.status(200).json({ mensagem: 'Inscrição recebida com sucesso!' });
        }
    });
});

// Inicialização do servidor
app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});