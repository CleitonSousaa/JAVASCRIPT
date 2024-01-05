// Você depositou uma quantia específica de dinheiro em sua conta bancária. A cada ano, seu saldo aumenta na mesma taxa de crescimento. Supondo que você não faça nenhum depósito adicional, descubra quanto tempo levaria para seu saldo ultrapassar um limite específico.

function Solucao(deposit, rate, threshold) {
    var porcentagem = rate / 100
    var contador = 0
    
    while(deposit < threshold){
        deposit =  deposit * porcentagem + deposit
        contador += 1
    }
    return contador
}
