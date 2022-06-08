const { swap } = require("../utils");

function getPartition(list, low, high) {
  const pivot = list[high];
  let partition = low;

  for (let i = low; i < high; i++) {
    if (list[i] < pivot) {
      swap(i, partition, list);
      partition += 1;
    }
  }

  swap(high, partition, list);
  return partition;
}

function quickSortRecursive(
  input,
  left = 0,
  right = input.length - 1,
  depth = 1
) {
  if (left >= right)
    return;

  const partition = getPartition(input, left, right);
  quickSortRecursive(input, left, partition - 1, depth + 1);
  quickSortRecursive(input, partition + 1, right, depth + 1);

  return input;
}

function quickSortIterative(input) {
  if (input.length <= 1)
    return input;

  const pivot = [input[0]];
  const leftList = [];
  const rightList = [];

  for (let i = 1; i < input.length; i++) {
    const target = input[i];

    if (target < pivot)
      leftList.push(target);
    else if (target > pivot)
      rightList.push(target);
    else
      pivot.push(target);
  }

  return quickSortIterative(leftList).concat(
    pivot,
    quickSortIterative(rightList)
  );
}

module.exports = {
  quickSortRecursive,
  quickSortIterative
};