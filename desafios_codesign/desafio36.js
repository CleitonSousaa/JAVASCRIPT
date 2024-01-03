function Solucao(s) {
    var stringProcessada = removeCaracteresRepetidos(s)
    return stringProcessada.length
}

function removeCaracteresRepetidos(str) {
  let charMap = {};
  let result = '';

  for (let char of str) {
    if (!charMap[char]) {
      charMap[char] = true;
      result += char;
    }
  }

  return result;
}

module.exports = {Solucao};