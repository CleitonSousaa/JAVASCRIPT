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

