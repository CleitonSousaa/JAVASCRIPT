// Cuidar de uma planta pode ser um trabalho árduo, mas como você cuida dela regularmente, você tem uma planta que cresce de forma consistente. A cada dia, sua altura aumenta em um valor fixo representado pelo número inteiro upSpeed. Mas devido à falta de luz solar, a altura da planta diminui a cada noite, em uma quantidade representada por downSpeed.
// Como você cultivou a planta a partir de uma semente, ela começou inicialmente na altura 0. Dado um número inteiro desejadoHeight, sua tarefa é descobrir quantos dias levará para a planta atingir essa altura.  

function Solucao(upSpeed, downSpeed, desiredHeight) {
    let contador = 0;
    let quantidade = 0;
    while(quantidade < desiredHeight){
        contador++
        quantidade += upSpeed
        if(quantidade >= desiredHeight){
            return contador
        }
        quantidade -= downSpeed
    }
}
