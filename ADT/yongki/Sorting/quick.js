const { swap, isSorted } = require("../utils");

let compareCount = 0;
let swapCount = 0;

function getPartition(list, low, high) {
  const pivot = list[high];
  let partition = low;

  for (let i = low; i < high; i++) {
    compareCount += 1;

    if (list[i] < pivot) {
      swap(i, partition, list);
      partition += 1;

      swapCount += 1;
    }
  }

  swap(high, partition, list);
  swapCount += 1;
  return partition;
}

function quickSortInPlace(
  input,
  left = 0,
  right = input.length - 1,
  depth = 0
) {
  if (left >= right)    
    return;    

  const partition = getPartition(input, left, right);
  quickSortInPlace(input, left, partition - 1, depth + 1);
  quickSortInPlace(input, partition + 1, right, depth + 1);    

  if(isSorted([...input]) && !depth){    
    console.log("Compare:",compareCount, "Swap:", swapCount);
  }

  return input;
}

function quickSortNotInPlace(input) {
  const N = input.length;

  if (N <= 1)
    return input;

  const pivot = [input[0]];
  const leftList = [];
  const rightList = [];

  for (let i = 1; i < N; i++) {
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