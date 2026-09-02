PROJETO API - NODE.JS E EXPRESS

COMO EXECUTAR:

1. Abra a pasta do projeto no VS Code.
2. Abra o terminal.
3. Execute:
   npm install

4. Depois execute:
   npm start

5. O servidor estará em:
   http://localhost:3000

ROTAS:

ALUNOS
GET     http://localhost:3000/alunos
GET     http://localhost:3000/alunos/1
POST    http://localhost:3000/alunos
PUT     http://localhost:3000/alunos/1
DELETE  http://localhost:3000/alunos/1

CLIENTES
GET     http://localhost:3000/clientes
GET     http://localhost:3000/clientes/1
POST    http://localhost:3000/clientes
PUT     http://localhost:3000/clientes/1
DELETE  http://localhost:3000/clientes/1

FORNECEDORES
GET     http://localhost:3000/fornecedores
GET     http://localhost:3000/fornecedores/1
POST    http://localhost:3000/fornecedores
PUT     http://localhost:3000/fornecedores/1
DELETE  http://localhost:3000/fornecedores/1

FUNCIONÁRIOS
GET     http://localhost:3000/funcionarios
GET     http://localhost:3000/funcionarios/1
POST    http://localhost:3000/funcionarios
PUT     http://localhost:3000/funcionarios/1
DELETE  http://localhost:3000/funcionarios/1

EXEMPLOS DE BODY JSON:

ALUNO:
{
    "nome": "Ana",
    "idade": 17
}

CLIENTE:
{
    "nome": "Joaquim",
    "email": "joaquim@email.com"
}

FORNECEDOR:
{
    "nome": "Empresa XYZ",
    "produto": "Materiais"
}

FUNCIONÁRIO:
{
    "nome": "Pedro",
    "cargo": "Vendedor"
}
