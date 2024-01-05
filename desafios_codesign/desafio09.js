// Dado um array de strings, retorne outro array contendo todas as suas strings mais longas.

function Solucao(inputArray) {
    const maiorComprimento = Math.max(...inputArray.map(str => str.length));
    const ma = inputArray.filter(str => str.length === maiorComprimento)
    
    return ma
}
