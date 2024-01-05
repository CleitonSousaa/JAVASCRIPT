// Dadas duas strings, encontre o número de caracteres comuns entre elas.

function Solucao(s1, s2) {
    for (var i = 0; i < s1.length; i++) {
        s2 = s2.replace(s1[i], "!");
    }
    return s2.replace(/[^!]/g, "").length;  
}
