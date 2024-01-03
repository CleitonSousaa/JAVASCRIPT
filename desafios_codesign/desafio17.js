function Solucao(inputArray) {
    var movimentos = 0;
    
    for (var i = 1; i < inputArray.length; i++) {
        if (inputArray[i] <= inputArray[i - 1]) {
            diff = inputArray[i - 1] - inputArray[i] + 1;
            inputArray[i] += diff;
            movimentos += diff;
        }
    }
    
    return movimentos;
}

module.exports = {Solucao};

