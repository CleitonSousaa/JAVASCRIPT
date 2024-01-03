const { Solucao } = require('../desafio13.js');

//testes
if(Solucao("(bar)") === "rab")
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("foo(bar)baz") === "foorabbaz")
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("foo(bar)baz(blim)") === "foorabbazmilb")
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("foo(bar(baz))blim") === "foobazrabblim")
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("") === "")
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("()") === "")
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("(abc)d(efg)") === "cbadgfe")
    console.log('Passou')
else
    console.log('Falhou')
