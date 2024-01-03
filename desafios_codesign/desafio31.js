function Solucao(deposit, rate, threshold) {
    var porcentagem = rate / 100
    var contador = 0
    
    while(deposit < threshold){
        deposit =  deposit * porcentagem + deposit
        contador += 1
    }
    return contador
}

module.exports = {Solucao};




