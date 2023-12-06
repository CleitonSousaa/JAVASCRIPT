//Ratiorg ganhou estátuas de tamanhos diferentes como presente da CodeMaster em seu aniversário, cada estátua tendo um tamanho inteiro não negativo. Como ele gosta de tornar as coisas perfeitas, ele quer organizá-las da menor para a maior, de modo que cada estátua seja exatamente 1 maior que a anterior. Ele pode precisar de algumas estátuas adicionais para conseguir isso. Ajude-o a descobrir o número mínimo de estátuas adicionais necessárias.

function Solucao(statues) {
    return Math.max.apply(null, statues) - Math.min.apply(null, statues) - statues.length + 1;
}

//testes
if(Solucao([6, 2, 3, 8]) === 3)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([0, 3]) === 2)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([5, 4, 6]) === 0)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([6, 3]) === 2)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([1]) === 0)
    console.log('Passou')
else
    console.log('Falhou')

