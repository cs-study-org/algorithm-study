const { swap } = require('../utils');

function selectionSort(input) {  

  for (let i = 0; i < input.length - 1; i++) {
    let least = i;

    for (let j = i + 1; j < input.length; j++) {
      if (input[j] < input[least])
        least = j;
    }
    if (i !== least)
      swap(i, least, input);
  }

  return input;
}

module.exports = selectionSort;