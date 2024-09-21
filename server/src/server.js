// Importa a instância do servidor Express criada no arquivo app.js
const app = require("./app");

// Define a porta em que o servidor irá ouvir as requisições.
// A porta é obtida da variável de ambiente process.env.PORT,
// caso ela esteja definida, ou usa a porta 3000 como padrão.
const port = process.env.PORT || 5000;

// O servidor começa a ouvir por requisições na porta especificada.
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
