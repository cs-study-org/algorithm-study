function quickSortStable(input) {
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

  return quickSortStable(leftList).concat(pivot, quickSortStable(rightList));
}

module.exports = quickSortStable; ``