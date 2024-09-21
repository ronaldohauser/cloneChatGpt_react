/**
 * Classe que representa o modelo de dados para o prompt de entrada usado na API da OpenAI.
 */
class InputPrompt {
    /**
     * Construtor da classe InputPrompt.
     * @param {Object} options - Opções para a criação do objeto InputPrompt.
     * @param {string} options.prompt - O prompt (texto inicial) para a geração de texto.
     */
    constructor({ prompt }) {
        // Atribui o valor do prompt ao atributo "prompt" do objeto criado.
        this.prompt = prompt;
    }
}

// Exporta a classe InputPrompt para que possa ser utilizada em outros módulos.
module.exports = InputPrompt;
