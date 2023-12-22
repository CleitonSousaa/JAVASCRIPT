function Solucao(n, firstNumber) {
    return (n/2+firstNumber)%n
}


if(Solucao(10, 2) === 7)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(10, 7) === 2)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(4, 1) === 3)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(6, 3) === 0)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(18, 6) === 15)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(12, 10) === 4)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(18, 5) === 14)
    console.log('Passou')
else
    console.log('Falhou')