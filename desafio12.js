//Algumas pessoas estão enfileiradas em um parque. Existem árvores entre eles que não podem ser movidas. Sua tarefa é reorganizar as pessoas de acordo com suas alturas em ordem não decrescente, sem mover as árvores. As pessoas podem ser muito altas!

function Solucao(a) {
    const n = a.filter(num => num !== -1).sort((a,b) => a-b);
    let index = 0;
    for( let i = 0; i < a.length; i++){
        if(a[i] !== -1){
            a[i] = n[index];
            index++;
        }
    }
    return a
}

//testes
var entradas = [
    [-1, 150, 190, 170, -1, -1, 160, 180],
    [-1, -1, -1, -1, -1],
    [4, 2, 9, 11, 2, 16],
    [2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1],
    [23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]]
var saidas = [
    [-1, 150, 160, 170, -1, -1, 180, 190],
    [-1],
    [2, 2, 4, 9, 11, 16],
    [1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2],
    [1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77]]