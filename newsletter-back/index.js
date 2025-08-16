const express = require('express');
const app = express();
const cadastroRouter = require('./routes/cadastro');

app.use(express.json()); // habilita JSON no body
app.use(cadastroRouter); // usa as rotas de inscrição

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});