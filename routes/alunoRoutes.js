const express = require("express");
const router = express.Router();

let alunos = [
    { id: 1, nome: "João", idade: 17 }
];

router.get("/", (req, res) => {
    res.json(alunos);
});

router.get("/:id", (req, res) => {
    const aluno = alunos.find(a => a.id == req.params.id);

    if (!aluno) {
        return res.status(404).json({ mensagem: "Aluno não encontrado" });
    }

    res.json(aluno);
});

router.post("/", (req, res) => {
    const novoAluno = {
        id: alunos.length > 0 ? Math.max(...alunos.map(a => a.id)) + 1 : 1,
        nome: req.body.nome,
        idade: req.body.idade
    };

    alunos.push(novoAluno);
    res.status(201).json(novoAluno);
});

router.put("/:id", (req, res) => {
    const aluno = alunos.find(a => a.id == req.params.id);

    if (!aluno) {
        return res.status(404).json({ mensagem: "Aluno não encontrado" });
    }

    aluno.nome = req.body.nome;
    aluno.idade = req.body.idade;

    res.json(aluno);
});

router.delete("/:id", (req, res) => {
    const indice = alunos.findIndex(a => a.id == req.params.id);

    if (indice === -1) {
        return res.status(404).json({ mensagem: "Aluno não encontrado" });
    }

    alunos.splice(indice, 1);
    res.json({ mensagem: "Aluno excluído com sucesso" });
});

module.exports = router;
