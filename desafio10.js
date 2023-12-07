//Dadas duas strings, encontre o número de caracteres comuns entre elas.

function Solucao(s1, s2) {
    for (var i = 0; i < s1.length; i++) {
        s2 = s2.replace(s1[i], "!");
    }
    return s2.replace(/[^!]/g, "").length;  
}

//testes
if(Solucao("aabcc","adcaa") === 3)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("zzzz", "zzzzzzz") === 4)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("abca", "xyzbac") === 3)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("a", "b") === 0)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("a", "aaa") === 1)
    console.log('Passou')
else
    console.log('Falhou')

