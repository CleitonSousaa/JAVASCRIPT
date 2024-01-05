// Abaixo definiremos um polígono n-interessante. Sua tarefa é encontrar a área de um polígono para um determinado n. Um polígono de interesse 1 é apenas um quadrado com um lado de comprimento 1. Um polígono de interesse n é obtido pegando o polígono de interesse n - 1 e anexando polígonos de interesse 1 à sua borda, lado a lado. Você pode ver os polígonos interessantes de 1, 2, 3 e 4 na imagem abaixo. 

function Solucao(n) {
    return n*n + (n-1)*(n-1);
}
