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

module.exports = {Solucao};

