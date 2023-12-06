//Depois de se tornarem famosos, os CodeBots decidiram se mudar juntos para um novo prédio. Cada um dos quartos tem um custo diferente, e alguns deles são gratuitos, mas corre um boato de que todos os quartos gratuitos são mal-assombrados! Como os CodeBots são bastante supersticiosos, eles se recusam a ficar em qualquer um dos quartos gratuitos, ou em qualquer um dos quartos abaixo de qualquer um dos quartos gratuitos. Dada a matriz, uma matriz retangular de inteiros, onde cada valor representa o custo do quarto, sua tarefa é retornar a soma total de todos os quartos que são adequados para os CodeBots (ou seja: somar todos os valores que não aparecem abaixo um 0).

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

//testes
if(Solucao([[0,1,1,2], [0,5,0,0], [2,0,3,3]]) === 9)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([[1,1,1,0], [0,5,0,1], [2,1,3,10]]) === 9)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([[1,1,1], [2,2,2], [3,3,3]]) === 18)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([[0]]) === 0)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([[1,0,3], [0,2,1], [1,2,0]]) === 5)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([[1], [5], [0], [2]]) === 6)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([[1,2,3,4,5]]) === 15)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([[2], [5], [10]]) === 17)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([[4,0,1], [10,7,0], [0,0,0], [9,1,2]]) === 15)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([[1]]) === 1)
    console.log('Passou')
else
    console.log('Falhou')

