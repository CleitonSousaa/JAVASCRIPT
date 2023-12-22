function Solucao(year) {
    let ano = year / 100
    if(year % 100 > 0)
        return Math.floor(ano) + 1
    else
        return Math.floor(ano)   
}

module.exports = {Solucao};
