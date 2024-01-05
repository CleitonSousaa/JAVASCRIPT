// Dado um ano, retorne o século em que ele se encontra. O primeiro século abrange do ano 1 até o ano 100 inclusive, o segundo - do ano 101 até o ano 200 inclusive, etc. 

function Solucao(year) {
    let ano = year / 100
    if(year % 100 > 0)
        return Math.floor(ano) + 1
    else
        return Math.floor(ano)   
}
