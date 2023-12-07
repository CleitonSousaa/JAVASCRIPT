//Escreva uma função que inverte caracteres entre parênteses (possivelmente aninhados) na string de entrada. As strings de entrada sempre serão bem formadas com ()s correspondentes

function Solucao(inputString) {
    while (inputString.includes('(')) {
        inputString = inputString.replace(/\(([^()]*)\)/, (_, str) => [...str].reverse().join(''));
    }
    return inputString;
    
}

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
