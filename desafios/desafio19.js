function Solucao(yourLeft, yourRight, friendsLeft, friendsRight) {
    if(yourLeft == friendsLeft && yourRight == friendsRight || yourLeft == friendsRight && yourRight == friendsLeft){
        return true
    }else{
        return false
    }
}

//testes
if(Solucao(10, 15, 15, 10) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(15, 10, 15, 10) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(15, 10, 15, 9) === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(10, 5, 5, 10) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(10, 15, 5, 20) === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(10, 20, 10, 20) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(5, 20, 20, 5) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(20, 15, 5, 20) === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(5, 10, 5, 10) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(1, 10, 10, 0) === false)
    console.log('Passou')
else
    console.log('Falhou')


    if(Solucao(5, 5, 10, 10) === false)
    console.log('Passou')
else
    console.log('Falhou')

    if(Solucao(10, 5, 10, 6) === false)
    console.log('Passou')
else
    console.log('Falhou')

    if(Solucao(1, 1, 1, 1) === true)
    console.log('Passou')
else
    console.log('Falhou')

    if(Solucao(0, 10, 10 , 0) === true)
    console.log('Passou')
else
    console.log('Falhou')
