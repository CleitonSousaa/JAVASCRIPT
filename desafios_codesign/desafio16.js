// Duas matrizes são chamadas semelhantes se uma puder ser obtida de outra trocando no máximo um par de elementos em uma das matrizes. Dadas duas matrizes a e b, verifique se elas são semelhantes.

function Solucao(a, b) {
    const ad = a.filter((v,i)=>v!=b[i])
    const bd = b.filter((v,i)=>v!=a[i])
    return ad.length == 0 || (ad.length == 2 && ad.join('') == bd.reverse().join(''))
}
