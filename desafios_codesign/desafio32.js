// Dada uma matriz ordenada de inteiros a, sua tarefa é determinar qual elemento de a está mais próximo de todos os outros valores de a. Em outras palavras, encontre o elemento x em a, que minimiza a seguinte soma:
// abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.comprimento - 1] - x) (onde abs denota o valor absoluto)
// Se houver várias respostas possíveis, produza a menor delas. 

function Solucao(a) {
    const idx = Math.floor((a.length - 1) / 2);
  
    for (let i = 0; i < a.length; i++) {
        if (i === idx) {
            return a[i];
        }
    }
}
