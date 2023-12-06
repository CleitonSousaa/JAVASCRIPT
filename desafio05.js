//Abaixo definiremos um polígono n-interessante. Sua tarefa é encontrar a área de um polígono para um determinado n. Um polígono de interesse 1 é apenas um quadrado com um lado de comprimento 1. Um polígono de interesse n é obtido pegando o polígono de interesse n - 1 e anexando polígonos de interesse 1 à sua borda, lado a lado. Você pode ver os polígonos interessantes de 1, 2, 3 e 4 na imagem abaixo.

function Solucao(n) {
    return n*n + (n-1)*(n-1);
}

//testes
if(Solucao(2) === 5)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(3) === 13)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(1) === 1)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(5) === 41)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(7000) === 97986001)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(8000) === 127984001)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(9999) === 199940005)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(9998) === 199900013)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(8999) === 161946005)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(100) === 19801)
    console.log('Passou')
else
    console.log('Falhou')

