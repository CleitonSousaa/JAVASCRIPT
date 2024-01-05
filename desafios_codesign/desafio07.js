// Dada uma sequência de inteiros como um array, determine se é possível obter uma sequência estritamente crescente removendo no máximo um elemento do array. Nota: a sequência a0, a1, ..., an é considerada estritamente crescente se a0 < a1 < ... < an. A sequência contendo apenas um elemento também é considerada estritamente crescente.

function Solucao(sequence) {
    var inicio = 0
    for(var i = 1; i < sequence.length ; i++){
        if(sequence[i] <= sequence[i-1]){
            inicio ++
        }
        if(inicio > 1){
            return false    
        } 
        if(sequence[i]<=sequence[i-2]&&sequence[i+1]<=sequence[i-1]){ 
            return false
        }
    }
    return true  
}
