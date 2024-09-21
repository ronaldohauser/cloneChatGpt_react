const express = require("express");
const promptController = require("../controllers/prompt-controller");

// Cria um objeto Router do Express para definir as rotas
const routes = express.Router();

// Define a rota POST para o caminho "/api/prompt"
// Quando o servidor recebe uma solicitação POST em "/api/prompt",
// o controlador promptController.sendText será chamado para lidar com a solicitação.
routes.post('/api/prompt', promptController.sendText);

// Exporta o objeto Router para que possa ser utilizado no servidor principal (app.js).
module.exports = routes;
