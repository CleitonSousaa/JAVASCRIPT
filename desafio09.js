function Solucao(inputArray) {
    const maiorComprimento = Math.max(...inputArray.map(str => str.length));
    const ma = inputArray.filter(str => str.length === maiorComprimento)
    
    return ma
}

//testes
var entradas = [
    ["aba", "aa", "ad", "vcd", "aba"],
    ["aa"],
    ["abc", "eeee", "abcd", "dcd"],
    ["a", "abc", "cbd", "zzzzzz", "a", "abcdef", "asasa", "aaaaaa"],
    ["enyky", "benyky", "yely", "varennyky"],
    ["abacaba", "abacab", "abac", "xxxxxx"],
    ["young", "yooooooung", "hot", "or", "not", "come", "on", "fire", "water", "watermelon"],
    ["onsfnib", "aokbcwthc", "jrfcw"],
    ["lbgwyqkry"],
    ["i"]]
var saidas = [
    ["aba", "vcd", "aba"],
    ["aa"],
    ["eeee", "abcd"],
    ["zzzzzz", "abcdef", "aaaaaa"],
    ["varennyky"],
    ["abacaba"],
    ["yooooooung", "watermelon"],
    ["onsfnib", "aokbcwthc", "jrfcw"],
    ["lbgwyqkry"],
    ["i"]]