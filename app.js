const express = require("express");

const app = express();

app.use(express.json());

const alunoRoutes = require("./routes/alunoRoutes");
const clienteRoutes = require("./routes/clienteRoutes");
const fornecedorRoutes = require("./routes/fornecedorRoutes");
const funcionarioRoutes = require("./routes/funcionarioRoutes");

app.use("/alunos", alunoRoutes);
app.use("/clientes", clienteRoutes);
app.use("/fornecedores", fornecedorRoutes);
app.use("/funcionarios", funcionarioRoutes);

app.get("/", (req, res) => {
    res.json({
        mensagem: "API funcionando com sucesso!"
    });
});

app.listen(3000, () => {
    console.log("Servidor funcionando em http://localhost:3000");
});
