function Solucao(n) {
    var n1 = Array.from(String(n), Number)
    var verificacao = []
    for(let a = 0; a < n1.length; a++){
        if(n1[a] % 2 === 0){
            console.log('par')
        }else{
            verificacao.push(n1[a])
        }
    }
    if(verificacao.length > 0){
        return false
    }else{
        return true
    }
}



if(Solucao(248622) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(642386) === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(248842) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(1) === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(8) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(2462487) === false)
    console.log('Passou')
else
    console.log('Falhou')
if(Solucao(468402800) === true)
    console.log('Passou')
else
    console.log('Falhou')
if(Solucao(2468428) === true)
    console.log('Passou')
else
    console.log('Falhou')
if(Solucao(5468428) === false)
    console.log('Passou')
else
    console.log('Falhou')
if(Solucao(7468428) === false)
    console.log('Passou')
else
    console.log('Falhou')