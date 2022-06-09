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

function quickSortInPlace(
  input,
  left = 0,
  right = input.length - 1,
) {
  if (left >= right)
    return;

  const partition = getPartition(input, left, right);
  quickSortInPlace(input, left, partition - 1);
  quickSortInPlace(input, partition + 1, right);

  return input;
}

function quickSortNotInPlace(input) {
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

  return quickSortNotInPlace(leftList).concat(
    pivot,
    quickSortNotInPlace(rightList)
  );
}

module.exports = {
  quickSortInPlace,
  quickSortNotInPlace,
};