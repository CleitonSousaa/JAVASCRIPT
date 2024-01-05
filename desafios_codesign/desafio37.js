// Dada uma matriz de inteiros, encontre a soma máxima possível de alguns de seus k elementos consecutivos. 

function Solucao(inputArray, k) {
    let s = 0;
    let m = 0;
    for (let i = 0; i < k; i++) {
        s += inputArray[i];
        m += inputArray[i];
    }
    
    for (let i = k; i < inputArray.length; i++) {
        s = s + inputArray[i] - inputArray[i - k];
        if (s > m) 
            m = s;
    }
    return m;
}
