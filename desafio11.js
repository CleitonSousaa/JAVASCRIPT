//Os números dos bilhetes geralmente consistem em um número par de dígitos. Um número de bilhete é considerado da sorte se a soma da primeira metade dos dígitos for igual à soma da segunda metade. Dado um número de bilhete n, determine se deu sorte ou não.

function Solucao(n) {
    var s = n.toString();
    var sum1 = 0;
    var sum2 = 0;
    for(var i = 0; i < s.length/2; i++){
        sum1 += parseInt(s[i]);
        sum2 += parseInt(s[s.length-i-1]);        
    }    
    return sum1 == sum2;
}

//testes
if(Solucao(1230) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(239017) === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(134008) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(10) === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(11) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(1010) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(261534) === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(100000) === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(999999) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(123321) === true)
    console.log('Passou')
else
    console.log('Falhou')

