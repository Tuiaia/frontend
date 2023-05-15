const apiKey = 'J2XCAJ3FZB9VJ54M'

/**
 * Busca o melhor símbolo que corresponda ao termo de entrada.
 *
 * @param {string} input - O termo de busca para o qual recuperar o melhor símbolo correspondente.
 *
 * @return {Promise<Object>} - Retorna uma Promise que resolve para um objeto que contém o melhor símbolo correspondente para o termo de busca.
 *
 * @throws {Error} - Lança um erro se a API atingir o limite de uso por minuto ou se houver algum problema ao buscar os dados.
 */
async function getBestMatchSymbol(input) {
    try {
        let url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${input}&apikey=${apiKey}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });

        const json = await response.json();

        if (json.detail) {
            throw new Error(json.detail);
        } else {
            if (json.hasOwnProperty('bestMatches')) {
                return json['bestMatches'][0];
            } else {
                throw new Error('Limite de uso por minuto da API atingido');
            }
        }
    } catch (error) {
        console.error(error);
        throw new Error('Erro ao buscar o código de identificação');
    }
}