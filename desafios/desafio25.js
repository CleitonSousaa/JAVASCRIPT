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

module.exports = {Solucao};

