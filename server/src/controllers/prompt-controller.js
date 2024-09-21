const inputPrompt = require("../models/input-prompt");
const openai = require("../config/openai");

/**
 * Controlador para lidar com a rota "/send-text".
 */
module.exports = {
    /**
     * Função assíncrona para enviar o texto para a API da OpenAI.
     * @param {Object} req - Objeto de solicitação HTTP enviado pelo cliente.
     * @param {Object} res - Objeto de resposta HTTP para enviar a resposta ao cliente.
     * @returns {Object} Resposta JSON para o cliente.
     */
    async sendText(req, res) {
        // Obtém a configuração da API da OpenAI usando o método configuration() da classe OpenAI
        const openaiAPI = openai.configuration();

        // Cria uma instância do modelo de entrada a partir do corpo da requisição (req.body)
        const inputModel = new inputPrompt(req.body);

        try {
            // Envia a requisição para a API de completions da OpenAI usando o método createCompletion
            // O método textCompletion() é usado para definir os parâmetros do completions
            const response = await openaiAPI.createCompletion(
                openai.textCompletion(inputModel)
            );

            // Retorna a resposta da API da OpenAI para o cliente em formato JSON
            return res.status(200).json({
                success: true,
                data: response.data.choices[0].text
            });

        } catch (error) {
            // Em caso de erro, retorna uma resposta de erro para o cliente em formato JSON
            return res.status(400).json({
                sucess: false,
                error: error.response
                    ? error.response.data
                    : 'There was an inssue on the server'
            });
        }
    }
}
