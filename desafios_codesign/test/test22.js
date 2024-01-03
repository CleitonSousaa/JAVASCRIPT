const { Solucao } = require('../desafio22.js');


//testes
if(Solucao([5, 3, 6, 7, 9]) === 4)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([2, 3]) === 4)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([1, 4, 10, 6, 2]) === 7)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([1000, 999]) === 6)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([19, 32, 11, 23]) === 3)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([5, 8, 9, 13, 14]) === 6)
    console.log('Passou')
else
    console.log('Falhou')