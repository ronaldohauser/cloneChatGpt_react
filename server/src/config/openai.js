const { Configuration, OpenAIApi } = require("openai");

/**
 * Classe para configurar e acessar a API da OpenAI.
 */
module.exports = class openai {

    /**
     * Método estático para configurar a API da OpenAI.
     * @returns {OpenAIApi} Uma instância da classe OpenAIApi configurada com a chave de API da OpenAI.
     */
    static configuration() {
        // Cria uma instância da classe Configuration com a chave de API da OpenAI obtida do arquivo .env
        const configuration = new Configuration({
            apiKey: process.env.OPEN_AI_KEY,
        });

        // Retorna uma instância da classe OpenAIApi com a configuração previamente criada
        return new OpenAIApi(configuration);
    }

    /**
     * Método estático para definir os parâmetros de completions do modelo de linguagem.
     * @param {Object} options - Opções para a API de completions da OpenAI.
     * @param {string} options.prompt - O prompt (texto inicial) para a geração de texto.
     * @returns {Object} Objeto com os parâmetros para a API de completions da OpenAI.
     */
    static textCompletion({ prompt }) {
        // Retorna um objeto com os parâmetros para a API de completions da OpenAI
        return {
            model: "text-davinci-003",
            prompt: `${prompt}`,
            temperature: 1.75,
            max_tokens: 3500,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
        }
    }
}
