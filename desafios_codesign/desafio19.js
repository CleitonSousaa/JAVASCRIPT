// Chame dois braços de igualmente fortes se os pesos mais pesados que cada um deles consegue levantar forem iguais. Chame duas pessoas de igualmente fortes se seus braços mais fortes forem igualmente fortes (o braço mais forte pode ser o direito e o esquerdo), assim como seus braços mais fracos. Dadas as capacidades de levantamento dos braços de você e do seu amigo, descubra se vocês dois são igualmente fortes.

function Solucao(yourLeft, yourRight, friendsLeft, friendsRight) {
    if(yourLeft == friendsLeft && yourRight == friendsRight || yourLeft == friendsRight && yourRight == friendsLeft){
        return true
    }else{
        return false
    }
}
