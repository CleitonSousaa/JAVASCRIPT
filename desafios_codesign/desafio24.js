// No popular jogo Campo Minado você tem um tabuleiro com algumas minas e as células que não contêm uma mina possuem um número que indica o número total de minas nas células vizinhas. Começando com alguns arranjos de minas, queremos criar uma configuração de jogo Campo Minado. 

function Solucao(matrix) {
    var dirs = [ 
    { r: -1, c: -1 },
    { r: -1, c:  0 },
    { r: -1, c:  1 },
    { r:  0, c:  1 },
    { r:  0, c: -1 },
    { r:  1, c: -1 },
    { r:  1, c:  0 },
    { r:  1, c:  1 }];
    return matrix.map((a,r) => a.map((_,c) => dirs.reduce((p,v) => p+=(matrix[r+v.r]||[])[c+v.c]|0, 0)))
}
