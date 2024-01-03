function Solucao(inputString) {
    var inputModificado = inputString.split('.')
    let contadorVerificacao = 0
    for(let a = 0; a < inputModificado.length; a++){
        if(inputModificado[a] === ''){
            return false
            a++
        }
        if(inputModificado[a].length > inputModificado[a] && inputModificado[a].length > 1){
            return false
            a++
        }
        if(inputModificado[a] <= 255 &&  inputModificado[a] >= 0 && inputModificado.length === 4){
            contadorVerificacao++
        } else{
            return false
        }
    }
    if(contadorVerificacao === 4){
            return true
    }     
}

module.exports = {Solucao};

