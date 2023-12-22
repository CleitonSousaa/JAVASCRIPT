function Solucao(param1, param2) {
    return param1 + param2
}

//testes
if(Solucao(1,2) === 3)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(0,1000) === 1000)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(2,-39) === -37)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(99,100) === 199)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(-100,100) === 0)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(-1000,-1000) === -2000)
    console.log('Passou')
else
    console.log('Falhou')
