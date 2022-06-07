function insertionSort(input) {
  for (let i = 1; i < input.length; i++) {
    const cur = input[i];
    let left = i - 1;

    while (left >= 0 && input[left] > cur) {
      input[left + 1] = input[left];
      left -= 1;
    }

    input[left + 1] = cur;
  }

  return input;
}

module.exports = insertionSort;