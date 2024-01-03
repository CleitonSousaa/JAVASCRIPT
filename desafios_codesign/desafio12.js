function Solucao(a) {
    const n = a.filter(num => num !== -1).sort((a,b) => a-b);
    let index = 0;
    for( let i = 0; i < a.length; i++){
        if(a[i] !== -1){
            a[i] = n[index];
            index++;
        }
    }
    return a
}

module.exports = {Solucao};

