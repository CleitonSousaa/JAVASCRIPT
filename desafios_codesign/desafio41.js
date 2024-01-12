//Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

// Given an integer, find its digit degree.

function Solucao(n) {
    let c = 0;

    for (; n.toString().length > 1; c++) {
        let digitos = n.toString().split("");
        let soma = 0;

        for (let i = 0; i < digitos.length; i++) {
            soma += Number(digitos[i]);
        }

        n = soma;
    }

    return c;
}