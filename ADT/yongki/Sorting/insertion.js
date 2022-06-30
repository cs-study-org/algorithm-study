function insertionSort(input) {
  let compareCount = 0;
  let swapCount = 0;

  for (let i = 1; i < input.length; i++) {
    const cur = input[i];
    let left = i - 1;

    while (left >= 0 && input[left] > cur) {
      compareCount += 1;
      swapCount += 1;

      input[left + 1] = input[left];
      left -= 1;
    }

    input[left + 1] = cur;
    compareCount += 1;
  }

  console.log("Compare:", compareCount, "Swap:", swapCount);
  return input;
}

module.exports = insertionSort;