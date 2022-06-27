function swap(a, b, list) {
  let temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}

function isSorted(arr) {
  return arr.every((v, i, a) => !i || a[i - 1] <= v);
}


module.exports = {
  swap,
  isSorted
}