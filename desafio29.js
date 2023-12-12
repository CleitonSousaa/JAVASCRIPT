function Solucao(cell1, cell2) {
    return (cell1.charCodeAt(0)+Number(cell1[1])+cell2.charCodeAt(0)+Number(cell2[1]))%2==0
}

if(Solucao("A1", "C3") === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("A1", "H3") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("A1", "A2") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("A1", "B2") === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("B3", "H8") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("C3", "B5") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("G5", "E7") === true)
    console.log('Passou')
else
    console.log('Falhou')
if(Solucao("C8", "H8") === false)
    console.log('Passou')
else
    console.log('Falhou')
if(Solucao("D2", "D2") === true)
    console.log('Passou')
else
    console.log('Falhou')
