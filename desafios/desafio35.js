function Solucao(inputString) {
    var l = inputString.split('')
    for(let a = 0; a < inputString.length; a++){
        if(l[a] == " "){
            a++
        }
        if(!isNaN(l[a])){
            return l[a]
        }
    }
}

//testes
if(Solucao("var_1__Int") === 1)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("q2q-q") === 2)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("0ss") === 0)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("_Aas_23") === 2)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("a a_933") === 9)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("ok0") === 0)
    console.log('Passou')
else
    console.log('Falhou')

