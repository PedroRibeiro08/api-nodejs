const express = require("express");
const router = express.Router();

let clientes = [
    { id: 1, nome: "Maria", email: "maria@email.com" }
];

router.get("/", (req, res) => {
    res.json(clientes);
});

router.get("/:id", (req, res) => {
    const cliente = clientes.find(c => c.id == req.params.id);

    if (!cliente) {
        return res.status(404).json({ mensagem: "Cliente não encontrado" });
    }

    res.json(cliente);
});

router.post("/", (req, res) => {
    const novoCliente = {
        id: clientes.length > 0 ? Math.max(...clientes.map(c => c.id)) + 1 : 1,
        nome: req.body.nome,
        email: req.body.email
    };

    clientes.push(novoCliente);
    res.status(201).json(novoCliente);
});

router.put("/:id", (req, res) => {
    const cliente = clientes.find(c => c.id == req.params.id);

    if (!cliente) {
        return res.status(404).json({ mensagem: "Cliente não encontrado" });
    }

    cliente.nome = req.body.nome;
    cliente.email = req.body.email;

    res.json(cliente);
});

router.delete("/:id", (req, res) => {
    const indice = clientes.findIndex(c => c.id == req.params.id);

    if (indice === -1) {
        return res.status(404).json({ mensagem: "Cliente não encontrado" });
    }

    clientes.splice(indice, 1);
    res.json({ mensagem: "Cliente excluído com sucesso" });
});

module.exports = router;
