//Várias pessoas estão enfileiradas e precisam ser divididas em duas equipes. A primeira pessoa vai para a equipe 1, a segunda vai para a equipe 2, a terceira vai para a equipe 1 novamente, a quarta para a equipe 2 e assim por diante. Você recebe uma série de números inteiros positivos - os pesos das pessoas. Retorna uma matriz de dois inteiros, onde o primeiro elemento é o peso total da equipe 1 e o segundo elemento é o peso total da equipe 2 após a conclusão da divisão.

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

//testes
var entradas = [
    [50, 60, 60, 45, 70],
    [100, 50],
    [80],
    [100, 50, 50, 100],
    [100, 51, 50, 100]]
var saidas = [
    [180, 105],
    [100, 50],
    [80, 0],
    [150, 150],
    [150, 151]]