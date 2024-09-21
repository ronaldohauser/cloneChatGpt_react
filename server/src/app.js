const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");

// Importa o módulo "dotenv", que permite carregar variáveis de ambiente a partir de um arquivo .env
require("dotenv").config();

// Cria uma instância do servidor utilizando o Express
const app = express();

// Configura o middleware do Express para processar corpos de requisições no formato JSON
app.use(express.json());

// Configura o middleware do Express para habilitar o CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Configura o servidor para usar as rotas definidas no módulo routes.js
app.use(routes);

// Exporta a instância do servidor para ser utilizada em outros módulos
module.exports = app;
