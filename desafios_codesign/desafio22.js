// Você recebe uma série de números inteiros que representam coordenadas de obstáculos situados em linha reta. Suponha que você esteja saltando de um ponto com coordenada 0 para a direita. Você só pode fazer saltos do mesmo comprimento representados por algum número inteiro. Encontre o comprimento mínimo do salto suficiente para evitar todos os obstáculos. 

function Solucao(inputArray) {
    for(var n=1;;n++)
        if(inputArray.every(x=>x%n))
            return n
}
