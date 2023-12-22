//Dada a string, verifique se é um palíndromo.

function Solucao(inputArray, elemToReplace, substitutionElem) {
    const newArray = []
    for(let a = 0; a < inputArray.length; a++){
        if(inputArray[a] === elemToReplace){
            newArray.push(substitutionElem)
        }else{
            newArray.push(inputArray[a])
        }
    }
    return newArray
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

