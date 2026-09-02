const express = require("express");
const router = express.Router();

let fornecedores = [
    { id: 1, nome: "Fornecedor ABC", produto: "Informática" }
];

router.get("/", (req, res) => {
    res.json(fornecedores);
});

router.get("/:id", (req, res) => {
    const fornecedor = fornecedores.find(f => f.id == req.params.id);

    if (!fornecedor) {
        return res.status(404).json({ mensagem: "Fornecedor não encontrado" });
    }

    res.json(fornecedor);
});

router.post("/", (req, res) => {
    const novoFornecedor = {
        id: fornecedores.length > 0 ? Math.max(...fornecedores.map(f => f.id)) + 1 : 1,
        nome: req.body.nome,
        produto: req.body.produto
    };

    fornecedores.push(novoFornecedor);
    res.status(201).json(novoFornecedor);
});

router.put("/:id", (req, res) => {
    const fornecedor = fornecedores.find(f => f.id == req.params.id);

    if (!fornecedor) {
        return res.status(404).json({ mensagem: "Fornecedor não encontrado" });
    }

    fornecedor.nome = req.body.nome;
    fornecedor.produto = req.body.produto;

    res.json(fornecedor);
});

router.delete("/:id", (req, res) => {
    const indice = fornecedores.findIndex(f => f.id == req.params.id);

    if (indice === -1) {
        return res.status(404).json({ mensagem: "Fornecedor não encontrado" });
    }

    fornecedores.splice(indice, 1);
    res.json({ mensagem: "Fornecedor excluído com sucesso" });
});

module.exports = router;
