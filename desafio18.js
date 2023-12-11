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

//testes
if(Solucao("aabaa") === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("abbcabb") === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("zyyzzzzz") === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("z") === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("zaa") === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("abca") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("abcad") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("abdhuierf") === false)
    console.log('Passou')
else
    console.log('Falhou')

