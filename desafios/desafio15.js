function Solucao(picture) {
    var novo = []
    for(let i = 0; i < picture.length; i++){
        var a = picture[i].split('')
        a.splice(0, -1, "*");
        a.push("*");
        let minhaString = a.join('')
        let tamanho = a.length
        var ast = ''
        for(let j = 0; j < tamanho; j++){
            ast += '*'
        }
        if(i == 0){
            novo.push(ast)
        }
        novo.push(minhaString)
    }
    var novonovo = []
    for(let i = 0; i < novo.length; i++){
        novonovo.push(novo[i])
    }
    novonovo.push(novo[0])
    return novonovo
}

//testes
var entradas = [
    ["abc", "ded"],
    ["a"],
    ["aa", "**", "zz"],
    ["abcde", "fghij", "klmno", "pqrst", "uvwxy"],
    ["wzy**"]
    ]
var saidas = [
    ["*****", "*abc*", "*ded*", "*****"],
    ["***", "*a*", "***"],
    ["****", "*aa*", "****", "*zz*", "****"],
    ["*******", "*abcde*", "*fghij*", "*klmno*","*pqrst*", "*uvwxy*", "*******"],
    ["*******", "*wzy***", "*******"]]