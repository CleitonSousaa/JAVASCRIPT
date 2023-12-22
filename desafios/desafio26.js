function Solucao(n) {
    var n1 = Array.from(String(n), Number)
    var verificacao = []
    for(let a = 0; a < n1.length; a++){
        if(n1[a] % 2 === 0){
            console.log('par')
        }else{
            verificacao.push(n1[a])
        }
    }
    if(verificacao.length > 0){
        return false
    }else{
        return true
    }
}

module.exports = {Solucao};



