const { swap } = require('../utils');

function selectionSort(input) {
  const result = [...input];

  for (let i = 0; i < result.length - 1; i++) {
    let least = i;

    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[least])
        least = j;
    }
    if (i !== least)
      swap(i, least, result);
  }

  return result;
}

module.exports = selectionSort;