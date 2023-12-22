function Solucao(deposit, rate, threshold) {
    var porcentagem = rate / 100
    var contador = 0
    
    while(deposit < threshold){
        deposit =  deposit * porcentagem + deposit
        contador += 1
    }
    return contador
}



//testes
if(Solucao(100, 20, 170) === 3)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(100, 1, 101) === 1)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(1, 100, 64) === 6)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(20, 20, 50) === 6)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(50, 25, 100) === 4)
    console.log('Passou')
else
    console.log('Falhou')
