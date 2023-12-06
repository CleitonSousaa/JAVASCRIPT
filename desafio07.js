//Dada uma sequência de inteiros como um array, determine se é possível obter uma sequência estritamente crescente removendo no máximo um elemento do array. Nota: a sequência a0, a1, ..., an é considerada estritamente crescente se a0 < a1 < ... < an. A sequência contendo apenas um elemento também é considerada estritamente crescente.

function Solucao(sequence) {
    var inicio = 0
    for(var i = 1; i < sequence.length ; i++){
        if(sequence[i] <= sequence[i-1]){
            inicio ++
        }
        if(inicio > 1){
            return false    
        } 
        if(sequence[i]<=sequence[i-2]&&sequence[i+1]<=sequence[i-1]){ 
            return false
        }
    }
    return true  
}

//testes
if(Solucao([1, 3, 2, 1]) === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([1, 3, 2]) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([1, 2, 1, 2]) === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([3, 6, 5, 8, 10, 20, 15]) === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([1, 1, 2, 3, 4, 4]) === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([1, 4, 10, 4, 2]) === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([10, 1, 2, 3, 4, 5]) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([1, 1, 1, 2, 3]) === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([0, -2, 5, 6]) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([1, 2, 3, 4, 5, 3, 5, 6]) === false)
    console.log('Passou')
else
    console.log('Falhou')


if(Solucao([40, 50, 60, 10, 20, 30]) === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([1, 1]) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([1, 2, 5, 3, 5]) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([1, 2, 5, 5, 5]) === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([10, 1, 2, 3, 4, 5, 6, 1]) === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([1, 2, 3, 4, 3, 6]) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([1, 2, 3, 4, 99, 5, 6]) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([123, -17, -5, 1, 2, 3, 12, 43, 45]) === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao([3, 5, 67, 98, 3]) === true)
    console.log('Passou')
else
    console.log('Falhou')


