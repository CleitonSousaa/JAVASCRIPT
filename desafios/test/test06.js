const { Solucao } = require('../desafio06.js');

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