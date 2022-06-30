const MinHeap = require('../Heap/MinHeap');

function heapSort(input) {
  const heap = new MinHeap();
  const result = [];

  for (const num of input)
    heap.insert(num);

  for (const _ of input)
    result.push(heap.extract());

  return result;
}

module.exports = heapSort;