# Server

## Dependências

```shell
npm init -y
```

```shell
npm i cors dotenv express openai
```

- **cors**: O pacote cors (Cross-Origin Resource Sharing) é uma middleware do Node.js que habilita a configuração de políticas de compartilhamento de recursos entre diferentes origens (domínios).
- **dotenv**: O pacote dotenv é utilizado para carregar variáveis de ambiente a partir de um arquivo .env no Node.js. Ele é muito útil para manter configurações sensíveis ou variáveis de ambiente que podem variar de ambiente para ambiente (como chaves de API, credenciais de banco de dados, etc.).
- **express**: O pacote express é um framework web para Node.js que permite criar APIs e servidores web de forma simples e eficiente. Ele fornece uma série de recursos úteis para lidar com rotas, middlewares, manipulação de requisições e respostas HTTP, além de facilitar a criação de endpoints para a comunicação entre o frontend e o backend.
- **openai**: O pacote openai é uma biblioteca oficial da OpenAI que oferece suporte para interagir com a API da plataforma, permitindo que você envie solicitações para o modelo de linguagem GPT-3.5 e receba as respostas geradas.

## Estrutura

- [server.js](./src/server.js): Ponto de entrada do servidor.
  - [app.js](./src/app.js): Cria a instância do servidor Express.
    - [routes.js](./src/routes/routes.js): Define as rotas do servidor.
      - [prompt-controller.js](./src/controllers/prompt-controller.js):  Controlador para lidar com a rota "/send-text".
        - [input-prompt.js](./src/models/input-prompt.js):  modelo de dados para o prompt de entrada usado na API da OpenAI.
        - [openai.js](./src/config/openai.js): Configuração da API da OpenAI.
