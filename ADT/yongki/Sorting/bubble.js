const { swap } = require("../utils");

function bubbleSort(input) {
  const N = input.lenght;

  for (let i = N - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (input[j] > input[j + 1])
        swap(j, j + 1, input);
    }
  }

  return input;
}

module.exports = bubbleSort;