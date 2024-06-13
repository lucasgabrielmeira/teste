const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    const { email, senha } = req.body;

    // Simulação de autenticação (substitua com sua lógica real)
    if (email === "admin@admin.com" && senha === "senha") {
        res.json({ token: "your-token-goes-here" });
    } else {
        res.status(401).json({ message: "Usuário ou senha inválidos" });
    }
});

module.exports = router;