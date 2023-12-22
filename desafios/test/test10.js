const { Solucao } = require('../desafio10.js');

//testes
if(Solucao("aabcc","adcaa") === 3)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("zzzz", "zzzzzzz") === 4)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("abca", "xyzbac") === 3)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("a", "b") === 0)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("a", "aaa") === 1)
    console.log('Passou')
else
    console.log('Falhou')