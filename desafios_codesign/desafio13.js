// Escreva uma função que inverte caracteres entre parênteses (possivelmente aninhados) na string de entrada. As strings de entrada sempre serão bem formadas com ()s correspondentes 

function Solucao(inputString) {
    while (inputString.includes('(')) {
        inputString = inputString.replace(/\(([^()]*)\)/, (_, str) => [...str].reverse().join(''));
    }
    return inputString;
    
}
