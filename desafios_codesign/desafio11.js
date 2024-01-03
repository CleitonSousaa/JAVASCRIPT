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

module.exports = {Solucao};


