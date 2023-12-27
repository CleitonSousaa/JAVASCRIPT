function Solucao(upSpeed, downSpeed, desiredHeight) {
    let contador = 0;
    let quantidade = 0;
    while(quantidade < desiredHeight){
        contador++
        quantidade += upSpeed
        if(quantidade >= desiredHeight){
            return contador
        }
        quantidade -= downSpeed
    }
}

module.exports = {Solucao};