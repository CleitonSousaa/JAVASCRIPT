function Solucao(a) {
    for (let i = 0; i < a.length; i++) {
        let restante = encontrarProximo(a[i], a);
        if (restante.length === 0) 
            return true;
        }
        return false;
}


function encontrarProximo(current, a) {
    if (a.length === 0) 
        return a;
    for (let i = 0; i < a.length; i++) {
            if (caracterePorCaractere(current, a[i])) {
                let restante = encontrarProximo(a[i], a.slice(0, i).concat(a.slice(i+1)));
                if (restante.length === 0) return restante;
            }
    }
    return a;
}


function caracterePorCaractere(s1, s2) {
    let mismatches = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) mismatches++;
        if (mismatches > 1) break;
    }
    return mismatches === 1;
}

//testes
if(Solucao(["aba", "bbb", "bab"]) === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(["ab", "bb", "aa"]) === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(["q", "q"]) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(["zzzzab", "zzzzbb", "zzzzaa"]) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(["ab", "ad", "ef", "eg"]) === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(["abc", "bef", "bcc", "bec", "bbc", "bdc"]) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(["abc", "abx", "axx", "abc"]) === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(["abc", "abx", "axx", "abx", "abc"]) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(["f", "g", "a", "h"]) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(["ff", "gf", "af", "ar", "hf"]) === true)
    console.log('Passou')
else
    console.log('Falhou')
if(Solucao(["a", "b", "c"]) === true)
    console.log('Passou')
else
    console.log('Falhou')
