function swap(a, b, list) {
  let temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}

module.exports = {
  swap
}