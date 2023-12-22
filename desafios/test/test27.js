const { Solucao } = require('../desafio27.js');

if(Solucao("var_1__Int") === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("qq-q") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("2w2") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(" variable") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("va[riable0") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("variable0") === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("a") === true)
    console.log('Passou')
else
    console.log('Falhou')
if(Solucao("_Aas_23") === true)
    console.log('Passou')
else
    console.log('Falhou')
if(Solucao("a a_2") === false)
    console.log('Passou')
else
    console.log('Falhou')
    if(Solucao("0ss") === false)
    console.log('Passou')
else
    console.log('Falhou')