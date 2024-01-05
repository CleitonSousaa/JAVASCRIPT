// Dado um array de inteiros, encontre o par de elementos adjacentes que possui o maior produto e retorne esse produto.

function Solucao(inputArray) {
    if (inputArray.length < 2) {
        return null; 
    }

    let maiorProduto = inputArray[0] * inputArray[1];

    for (let i = 1; i < inputArray.length - 1; i++) {
        const produto = inputArray[i] * inputArray[i + 1];
        if (produto > maiorProduto) {
        maiorProduto = produto;
        }
    }

    return maiorProduto;
}
