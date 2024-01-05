// Depois de se tornarem famosos, os CodeBots decidiram se mudar juntos para um novo prédio. Cada um dos quartos tem um custo diferente, e alguns deles são gratuitos, mas corre um boato de que todos os quartos gratuitos são mal-assombrados! Como os CodeBots são bastante supersticiosos, eles se recusam a ficar em qualquer um dos quartos gratuitos, ou em qualquer um dos quartos abaixo de qualquer um dos quartos gratuitos. Dada a matriz, uma matriz retangular de inteiros, onde cada valor representa o custo do quarto, sua tarefa é retornar a soma total de todos os quartos que são adequados para os CodeBots (ou seja: somar todos os valores que não aparecem abaixo um 0).

function Solucao(matrix) {
    var total = 0;
    for (var i = 0; i < matrix[0].length; i++) {           
        for (var j = 0; j < matrix.length; j++) {
            if (matrix[j][i] === 0) {
                break;
            }
            total += matrix[j][i];
        }
        
    }
    
    return total;
}
