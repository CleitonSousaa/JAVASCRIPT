// Dadas duas células no tabuleiro de xadrez padrão, determine se elas têm a mesma cor ou não.

function Solucao(cell1, cell2) {
    return (cell1.charCodeAt(0)+Number(cell1[1])+cell2.charCodeAt(0)+Number(cell2[1]))%2==0
}
