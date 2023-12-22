function Solucao(a) {
    var team01 = 0
    var team02 = 0
    var novo_array = []
    for(let i = 0; i < a.length; i++){
        if(i % 2 == 0){
            team01+=a[i]
        }else{
            team02+=a[i]
        }
    }
    novo_array.push(team01, team02)
    return novo_array
}

module.exports = {Solucao};

