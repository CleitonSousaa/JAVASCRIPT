function Solucao(inputString) {
    let str_reverse = inputString.split('').reverse()
    let str_revese_usavel = str_reverse.join('')
    
    if(inputString === str_revese_usavel)
        return true
    else
        return false
}

module.exports = {Solucao};

