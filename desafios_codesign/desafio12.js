// Algumas pessoas estão enfileiradas em um parque. Existem árvores entre eles que não podem ser movidas. Sua tarefa é reorganizar as pessoas de acordo com suas alturas em ordem não decrescente, sem mover as árvores. As pessoas podem ser muito altas!  

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
