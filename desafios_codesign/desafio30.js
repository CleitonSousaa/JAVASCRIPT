// Considere números inteiros de 0 a n - 1 escritos ao longo do círculo de tal forma que a distância entre quaisquer dois números vizinhos seja igual (observe que 0 e n - 1 também são vizinhos). Dados n e firstNumber, encontre o número que está escrito na posição radialmente oposta a firstNumber.

function Solucao(n, firstNumber) {
    return (n/2+firstNumber)%n
}
