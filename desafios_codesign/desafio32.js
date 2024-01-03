function Solucao(a) {
    const idx = Math.floor((a.length - 1) / 2);
  
    for (let i = 0; i < a.length; i++) {
        if (i === idx) {
            return a[i];
        }
    }
}

module.exports = {Solucao};




