//Dada a string, verifique se é um palíndromo.

function Solucao(inputString) {
    let str_reverse = inputString.split('').reverse()
    let str_revese_usavel = str_reverse.join('')
    
    if(inputString === str_revese_usavel)
        return true
    else
        return false
}

//testes
if(Solucao("aabaa") === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("abac") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("a") === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("az") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("abacaba") === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("z") === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("aaabaaaa") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("zzzazzazz") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("hlbeeykoqqqqokyeeblh") === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("hlbeeykoqqqokyeeblh") === true)
    console.log('Passou')
else
    console.log('Falhou')

