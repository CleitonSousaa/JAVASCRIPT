function Solucao(matrix) {
    var total = 0;
    for (var i = 0; i < matrix[0].length; i++) {           
        for (var j = 0; j < matrix.length; j++) {
            if (matrix[j][i] === 0) {
                break;
            }
            total += matrix[j][i];
        }
        
    }
    
    return total;
}

module.exports = {Solucao};

