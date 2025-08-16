const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'newsletter.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Erro ao abrir o banco:', err.message);
    } else {
        console.log('Banco de dados conectado com sucesso!');
    }
});

db.run(`
    CREATE TABLE IF NOT EXISTS inscritos (
                                             id INTEGER PRIMARY KEY AUTOINCREMENT,
                                             email TEXT NOT NULL UNIQUE,
                                             data_inscricao TEXT DEFAULT CURRENT_TIMESTAMP
    )`, (err) => {
    if (err) {
        console.error('Erro ao criar tabela:', err.message);
    } else {
        console.log('Tabela "inscritos" pronta!');

        // Agora sim: consulta após a criação
        db.all('SELECT * FROM inscritos', [], (err, rows) => {
            if (err) {
                console.error('Erro ao consultar inscritos:', err.message);
            } else {
                console.log('Inscritos:', rows);
            }
        });
    }

});
module.exports = db;