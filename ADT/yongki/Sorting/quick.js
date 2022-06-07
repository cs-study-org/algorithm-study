const { swap } = require("../utils");

function quickSort(
  input,
  low = 0,
  high = input.length - 1
) {
  if(low >= high)
    return;
    
  const partition = divide(input, low, high);

  quickSort(input, low, partition - 1);
  quickSort(input, partition, high);
  
  return input;
}

function divide(list, low, high) {
  const pivot = list[low];

  while (low <= high) {
    while (list[low] < pivot)
      low += 1;

    while (list[high] > pivot)
      high -= 1;

    if (low < high) {
      swap(low, high, list);
      low += 1;
      high -= 1;
    }
  }
  return low;
}

module.exports = quickSort;