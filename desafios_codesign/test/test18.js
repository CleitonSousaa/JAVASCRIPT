const { Solucao } = require('../desafio18.js');

//testes
if(Solucao("aabaa") === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("abbcabb") === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("zyyzzzzz") === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("z") === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("zaa") === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("abca") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("abcad") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("abdhuierf") === false)
    console.log('Passou')
else
    console.log('Falhou')