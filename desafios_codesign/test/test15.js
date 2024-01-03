const { Solucao } = require('../desafio15.js');

//testes
var entradas = [
    ["abc", "ded"],
    ["a"],
    ["aa", "**", "zz"],
    ["abcde", "fghij", "klmno", "pqrst", "uvwxy"],
    ["wzy**"]
    ]
var saidas = [
    ["*****", "*abc*", "*ded*", "*****"],
    ["***", "*a*", "***"],
    ["****", "*aa*", "****", "*zz*", "****"],
    ["*******", "*abcde*", "*fghij*", "*klmno*","*pqrst*", "*uvwxy*", "*******"],
    ["*******", "*wzy***", "*******"]]