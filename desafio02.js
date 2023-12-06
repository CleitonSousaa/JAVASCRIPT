//Dado um ano, retorne o século em que ele se encontra. O primeiro século abrange do ano 1 até o ano 100 inclusive, o segundo - do ano 101 até o ano 200 inclusive, etc.

function Solucao(year) {
    let ano = year / 100
    if(year % 100 > 0)
        return Math.floor(ano) + 1
    else
        return Math.floor(ano)   
}

//testes
if(Solucao(1905) === 20)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(1700) === 17)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(1988) === 20)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(2000) === 20)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(2001) === 21)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(200) === 2)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(374) === 4)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(45) === 1)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(8) === 1)
    console.log('Passou')
else
    console.log('Falhou')
