// Você recebe uma matriz de números inteiros. Em cada movimento você pode aumentar exatamente um de seus elementos em um. Encontre o número mínimo de movimentos necessários para obter uma sequência estritamente crescente da entrada.

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
