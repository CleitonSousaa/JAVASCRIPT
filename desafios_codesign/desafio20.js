// Dado um array de inteiros, encontre a diferença absoluta máxima entre quaisquer dois de seus elementos adjacentes.  

function Solucao(inputArray) {
    var maiorvalor = 0
    
    for (let a = 0; a < inputArray.length - 1; a++) {
        if (Math.abs(inputArray[a] - inputArray[a + 1]) > maiorvalor) {
            maiorvalor = Math.abs(inputArray[a] - inputArray[a + 1]);
        }
    }
    return maiorvalor;
}
