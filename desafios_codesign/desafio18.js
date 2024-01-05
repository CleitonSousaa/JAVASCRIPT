// Dada uma string, descubra se seus caracteres podem ser reorganizados para formar um palíndromo.

function Solucao(inputString) {
    var stringWithoutSpaces = inputString.split(' ').join('');

  var sortedString = stringWithoutSpaces.split('').sort().join('');
  var oddCount = 0;
  for (var i = 0; i < sortedString.length; i++) {
    var currentChar = sortedString[i];
    var charCount = 1;

    while (i + 1 < sortedString.length && sortedString[i + 1] === currentChar) {
      i++;
      charCount++;
    }

    if (charCount % 2 !== 0) {
      oddCount++;
    }

    if (oddCount > 1) {
      return false;
    }
  }

  return true;
}
