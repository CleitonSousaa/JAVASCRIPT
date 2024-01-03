const { Solucao } = require('../desafio21.js');

//testes
if(Solucao("172.16.254.1") === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("172.316.254.1") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(".254.255.0") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("1.1.1.1a") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("1") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("0.254.255.0") === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("1.23.256.255.") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("1.23.256..") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("0..1.0") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("64.233.161.00") === false)
    console.log('Passou')
else
    console.log('Falhou')





if(Solucao("64.00.161.131") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("01.233.161.131") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("35..36.9.9.0") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("1.1.1.1.1") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("1.256.1.1") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("a0.1.1.1") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("0.1.1.256") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("129380129831213981.255.255.255") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("255.255.255.255abcdekjhf") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("7283728") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("0..1.0.0") === false)
    console.log('Passou')
else
    console.log('Falhou')

