// Encontre o dígito mais à esquerda que ocorre em uma determinada string.

function Solucao(inputString) {
    var l = inputString.split('')
    for(let a = 0; a < inputString.length; a++){
        if(l[a] == " "){
            a++
        }
        if(!isNaN(l[a])){
            return l[a]
        }
    }
}
