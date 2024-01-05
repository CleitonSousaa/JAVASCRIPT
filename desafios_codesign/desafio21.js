// Um endereço IP é um rótulo numérico atribuído a cada dispositivo (por exemplo, computador, impressora) participante de uma rede de computadores que usa o protocolo da Internet para comunicação. Existem duas versões do protocolo da Internet e, portanto, duas versões de endereços. Um deles é o endereço IPv4. Dada uma string, descubra se ela satisfaz as regras de nomenclatura de endereços IPv4. 

function Solucao(inputString) {
    var inputModificado = inputString.split('.')
    let contadorVerificacao = 0
    for(let a = 0; a < inputModificado.length; a++){
        if(inputModificado[a] === ''){
            return false
            a++
        }
        if(inputModificado[a].length > inputModificado[a] && inputModificado[a].length > 1){
            return false
            a++
        }
        if(inputModificado[a] <= 255 &&  inputModificado[a] >= 0 && inputModificado.length === 4){
            contadorVerificacao++
        } else{
            return false
        }
    }
    if(contadorVerificacao === 4){
            return true
    }     
}
