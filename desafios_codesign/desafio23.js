// Ontem à noite você festejou um pouco demais. Agora há uma foto sua em preto e branco que está prestes a se tornar viral! Você não pode permitir que isso arruíne sua reputação, então você deseja aplicar o algoritmo de desfoque de caixa à foto para ocultar seu conteúdo. Os pixels na imagem de entrada são representados como números inteiros. O algoritmo distorce a imagem de entrada da seguinte maneira: Cada pixel x na imagem de saída tem um valor igual ao valor médio dos valores dos pixels do quadrado 3 × 3 que tem seu centro em x, incluindo o próprio x. Todos os pixels na borda de x são então removidos. Retorne a imagem desfocada como um número inteiro, com as frações arredondadas para baixo.

function Solucao(image) {
    var B = image.slice(1,-1).map(e=>e.slice(1,-1))
    
    return B.map((row,i) =>
        row.map((elem,j) => {
            var sum = 0
            for(var x=0;x<3;++x)
                for(var y=0;y<3;++y)
                    sum += image[i+x][j+y]
            return sum/9|0
        })
    )
}
