const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração do banco de dados MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'lucas',
    password: 'mimoprograma19',
    database: 'enaile'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conectado ao banco de dados MySQL.');
});

// Chave secreta para JWT
const secret = 'sua_chave_secreta';


// Rota para login do usuário
app.post('/auth/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({ error: 'Preencha todos os campos' });
    }

    // Lógica de autenticação com email e senha
});

// Rota para cadastrar um novo processo
app.post('/api/processos', (req, res) => {
    const {
        titulo,
        num_protocolo,
        num_processo,
        vara,
        unidade,
        via_prospeccao,
        materia_juridica,
        tipo_acao,
        data_cadastro,
        nome_cliente,
        nome_advogado
    } = req.body;

    // Verificar se todos os campos obrigatórios foram preenchidos
    if (!titulo || !num_protocolo || !num_processo || !vara || !unidade || !via_prospeccao || !materia_juridica || !tipo_acao || !data_cadastro || !nome_cliente || !nome_advogado) {
        return res.status(400).send({ error: 'Preencha todos os campos obrigatórios' });
    }

    // Executar operação de inserção na tabela processos
    const sql = `INSERT INTO processos (titulo, num_protocolo, num_processo, vara, unidade, via_prospeccao, materia_juridica, tipo_acao, data_cadastro, nome_cliente, nome_advogado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    db.query(sql, [titulo, num_protocolo, num_processo, vara, unidade, via_prospeccao, materia_juridica, tipo_acao, data_cadastro, nome_cliente, nome_advogado], (err, result) => {
        if (err) return res.status(500).send({ error: 'Erro ao cadastrar o processo' });
        res.send({ success: 'Processo cadastrado com sucesso' });
    });
});

// Shorthand para servir arquivos da pasta 'client'
app.use(express.static('client'));

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}.`);
});