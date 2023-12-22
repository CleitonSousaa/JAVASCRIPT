function Solucao(arr, k) {
    const result = [];

  for (let i = 0; i < arr.length; i++) {
    if ((i + 1) % k !== 0) {
      result.push(arr[i]);
    }
  }

  return result;
}

module.exports = {Solucao};

