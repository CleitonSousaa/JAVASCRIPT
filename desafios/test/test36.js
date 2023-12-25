const { Solucao } = require('../desafio36.js');

//testes
if(Solucao("cabca") === 3)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("aba") === 2)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("ccccccccccc") === 1)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("bcaba") === 3)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("codesignal") === 10)
    console.log('Passou')
else
    console.log('Falhou')
