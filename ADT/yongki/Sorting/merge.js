function mergeSort(input) {
  if (input.length === 1)
    return input;

  const mid = Math.floor((input.length) / 2);

  const leftList = input.slice(0, mid);
  const rightList = input.slice(mid);

  return merge(mergeSort(leftList), mergeSort(rightList));
}

function merge(leftList, rightList) {
  const result = [];

  while (leftList.length && rightList.length) {
    if (leftList[0] <= rightList[0])
      result.push(leftList.shift());
    else
      result.push(rightList.shift());
  }

  return [...result, ...leftList, ...rightList];
}

module.exports = mergeSort;