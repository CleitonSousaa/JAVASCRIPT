function Solucao(inputString) {
    var alfabeto = "abcdefghijklmnopqrstuvwxyz"
    var arrayAlfabeto = alfabeto.split('')
    var arrayInputString = inputString.split('')
    var novoArrayInputString = []
    
    
    for(var a = 0; a < arrayInputString.length; a++){
        for(var b = 0; b < arrayAlfabeto.length; b++){   
            if(arrayInputString[a] === arrayAlfabeto[b]){
                novoArrayInputString.push(arrayAlfabeto[b + 1])
                if(arrayInputString[a] === arrayAlfabeto[arrayAlfabeto.length - 1]){
                    novoArrayInputString.push(arrayAlfabeto[0])  
                }
            }
        }
    }
    var arrayFinal = novoArrayInputString.join('')
    return arrayFinal
}


if(Solucao("crazy") === "dsbaz")
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("z") === "a")
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("aaaabbbccd") === "bbbbcccdde")
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("fuzzy") === "gvaaz")
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("codesignal") === "dpeftjhobm")
    console.log('Passou')
else
    console.log('Falhou')
