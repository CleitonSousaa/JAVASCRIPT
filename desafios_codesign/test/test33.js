const { Solucao } = require('../desafio33.js');

//testes
if(Solucao(["aba", "bbb", "bab"]) === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(["ab", "bb", "aa"]) === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(["q", "q"]) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(["zzzzab", "zzzzbb", "zzzzaa"]) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(["ab", "ad", "ef", "eg"]) === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(["abc", "bef", "bcc", "bec", "bbc", "bdc"]) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(["abc", "abx", "axx", "abc"]) === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(["abc", "abx", "axx", "abx", "abc"]) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(["f", "g", "a", "h"]) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(["ff", "gf", "af", "ar", "hf"]) === true)
    console.log('Passou')
else
    console.log('Falhou')
if(Solucao(["a", "b", "c"]) === true)
    console.log('Passou')
else
    console.log('Falhou')