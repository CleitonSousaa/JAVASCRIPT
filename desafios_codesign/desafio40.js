// Given a string, output its longest prefix which contains only digits. 

function Solucao(inputString) {
    let resultado = '';

    for (let i = 0; i < inputString.length; i++) {
        const caractere = inputString[i];
        if (caractere >= '0' && caractere <= '9') {
            resultado += caractere;
        }else {
            break;
        }
    }
    return resultado;
}
