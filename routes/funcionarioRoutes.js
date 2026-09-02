const express = require("express");
const router = express.Router();

let funcionarios = [
    { id: 1, nome: "Carlos", cargo: "Gerente" }
];

router.get("/", (req, res) => {
    res.json(funcionarios);
});

router.get("/:id", (req, res) => {
    const funcionario = funcionarios.find(f => f.id == req.params.id);

    if (!funcionario) {
        return res.status(404).json({ mensagem: "Funcionário não encontrado" });
    }

    res.json(funcionario);
});

router.post("/", (req, res) => {
    const novoFuncionario = {
        id: funcionarios.length > 0 ? Math.max(...funcionarios.map(f => f.id)) + 1 : 1,
        nome: req.body.nome,
        cargo: req.body.cargo
    };

    funcionarios.push(novoFuncionario);
    res.status(201).json(novoFuncionario);
});

router.put("/:id", (req, res) => {
    const funcionario = funcionarios.find(f => f.id == req.params.id);

    if (!funcionario) {
        return res.status(404).json({ mensagem: "Funcionário não encontrado" });
    }

    funcionario.nome = req.body.nome;
    funcionario.cargo = req.body.cargo;

    res.json(funcionario);
});

router.delete("/:id", (req, res) => {
    const indice = funcionarios.findIndex(f => f.id == req.params.id);

    if (indice === -1) {
        return res.status(404).json({ mensagem: "Funcionário não encontrado" });
    }

    funcionarios.splice(indice, 1);
    res.json({ mensagem: "Funcionário excluído com sucesso" });
});

module.exports = router;
