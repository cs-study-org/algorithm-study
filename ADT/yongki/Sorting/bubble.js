const { swap } = require("../utils");

function bubbleSort(input) {
  const N = input.length;

  let compareCount = 0;
  let swapCount = 0;

  for (let i = N - 1; i > 0; i--) {    
    for (let j = 0; j < i; j++) {
      compareCount += 1;

      if (input[j] > input[j + 1]){
        swap(j, j + 1, input);
        swapCount += 1;
      }
    }
  }

  console.log("Compare:",compareCount, "Swap:", swapCount);
  return input;
}

module.exports = bubbleSort;