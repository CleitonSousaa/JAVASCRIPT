
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

//testes
var entradas = [
    [[true,false,false], [false,true,false], [false,false,false]],
    [[false,false,false], [false,false,false]],
    [[true,false,false,true], [false,false,true,false], [true,true,false,true]],
    [[true,true,true], [true,true,true], [true,true,true]],
    [[false,true,true,false], [true,true,false,true], [false,false,true,false]],
    [[true,false], [true,false], [false,true], [false,false], [false,false]]
    ]
    
var saidas = [
    [[1,2,1], [2,1,1], [1,1,1]],
    [[0,0,0], [0,0,0]],
    [[0,2,2,1], [3,4,3,3], [1,2,3,1]],
    [[3,5,3], [5,8,5], [3,5,3]],
    [[3,3,3,2], [2,4,5,2], [2,3,2,2]],
    [[1,2], [2,3], [2,1], [1,1], [0,0]]
    ]

