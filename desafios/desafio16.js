function Solucao(a, b) {
    const ad = a.filter((v,i)=>v!=b[i])
    const bd = b.filter((v,i)=>v!=a[i])
    return ad.length == 0 || (ad.length == 2 && ad.join('') == bd.reverse().join(''))
}

//testes
if(Solucao([1, 2, 3], [1, 2, 3]) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([1, 2, 3], [2, 1, 3]) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([1, 2, 2], [2, 1, 1]) === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([1, 2, 1, 2], [2, 2, 1, 1]) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([1, 2, 1, 2, 2, 1], [2, 2, 1, 1, 2, 1]) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([1, 1, 4], [1, 2, 3]) === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([1, 2, 3], [1, 10, 2]) === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([2, 3, 1], [1, 3, 2]) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([2, 3, 9], [10, 3, 2]) === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([832, 998, 148, 570, 533, 561, 894, 147, 455, 279], [832, 570, 148, 998, 533, 561, 455, 147, 894, 279]) === false)
    console.log('Passou')
else
    console.log('Falhou')

