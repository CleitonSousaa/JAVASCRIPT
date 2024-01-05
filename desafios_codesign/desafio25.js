// Dado um array de inteiros, substitua todas as ocorrências de elemToReplace por replacementElem.

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
