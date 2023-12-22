function Solucao(inputArray) {
    const maiorComprimento = Math.max(...inputArray.map(str => str.length));
    const ma = inputArray.filter(str => str.length === maiorComprimento)
    
    return ma
}

module.exports = {Solucao};

