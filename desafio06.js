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

