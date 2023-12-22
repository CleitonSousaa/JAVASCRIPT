function Solucao(inputArray) {
    var maiorvalor = 0
    
    for (let a = 0; a < inputArray.length - 1; a++) {
        if (Math.abs(inputArray[a] - inputArray[a + 1]) > maiorvalor) {
            maiorvalor = Math.abs(inputArray[a] - inputArray[a + 1]);
        }
    }
    return maiorvalor;
}

//testes
if(Solucao([2, 4, 1, 0]) === 3)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([1, 1, 1, 1]) === 0)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([-1, 4, 10, 3, -2]) === 7)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([10, 11, 13]) === 2)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([-2, -2, -2, -2, -2]) === 0)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([-1, 1, -3, -4]) === 4)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([-14, 15, -15]) === 30)
    console.log('Passou')
else
    console.log('Falhou')
