const { swap } = require('../utils');

function selectionSort(input) {  
  const N = input.length;

  let compareCount = 0;
  let swapCount = 0;

  for (let i = 0; i < N - 1; i++) {
    let least = i;

    for (let j = i + 1; j < N; j++) {
      compareCount += 1;

      if (input[j] < input[least])
        least = j;
    }
    if (i !== least){
      swap(i, least, input);
      swapCount += 1;
    }    
  }
  
  console.log("Compare:",compareCount, "Swap:", swapCount);
  return input;
}

module.exports = selectionSort;