function Solucao(inputArray) {
    if (inputArray.length < 2) {
        return null; 
    }

    let maiorProduto = inputArray[0] * inputArray[1];

    for (let i = 1; i < inputArray.length - 1; i++) {
        const produto = inputArray[i] * inputArray[i + 1];
        if (produto > maiorProduto) {
        maiorProduto = produto;
        }
    }

    return maiorProduto;
}



//testes
if(Solucao([3, 6, -2, -5, 7, 3]) === 21)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([-1, -2]) === 2)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([5, 1, 2, 3, 1, 4]) === 6)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([1, 2, 3, 0]) === 6)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([9, 5, 10, 2, 24, -1, -48]) === 50)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([5, 6, -4, 2, 3, 2, -23]) === 30)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([4, 1, 2, 3, 1, 5]) === 6)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([-23, 4, -3, 8, -12]) === -12)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([1, 0, 1, 0, 1000]) === 0)
    console.log('Passou')
else
    console.log('Falhou')
