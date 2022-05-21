const assert = require('assert');
const MinHeap = require('../../../ADT/yongki/Heap/MinHeap');

MinHeap.prototype.comparator = function (a, b) {
  return a?.soldiers !== b?.soldiers
    ? a?.soldiers - b?.soldiers
    : a?.curIdx - b?.curIdx;
}

MinHeap.prototype._bubbleUp = function (idx) {

  while (this.getParent(idx)?.soldiers > this.heap[idx]?.soldiers) {
    const parentIdx = this.getParentIdx(idx);

    this.swap(idx, parentIdx);
    idx = parentIdx;
  }
}

MinHeap.prototype._bubbleDown = function (idx) {

  while (
    this.getLeftChild(idx)?.soldiers <= this.heap[idx]?.soldiers
    || this.getRightChild(idx)?.soldiers <= this.heap[idx]?.soldiers
  ) {
    let smallerIdx = idx;

    if (this.comparator(this.getLeftChild(idx), this.heap[smallerIdx]) < 0)
      smallerIdx = this.getLeftChildIdx(idx);

    if (this.comparator(this.getRightChild(idx), this.heap[smallerIdx]) < 0)
      smallerIdx = this.getRightChildIdx(idx);

    if (idx === smallerIdx)
      break;

    this.swap(idx, smallerIdx);
    idx = smallerIdx;
  }
}

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  const soldiersList = mat.map(row => {
    return row.filter(each => each).length;
  })

  const heap = new MinHeap();
  const result = [];

  for (const [curIdx, soldiers] of soldiersList.entries())
    heap.insert({ curIdx, soldiers });

  for (let i = 0; i < k; i++) {
    const { curIdx, _ } = heap.extract();
    result.push(curIdx);
  }

  return result;
};

(function main() {
  assert.deepEqual(
    kWeakestRows(
      [
        [1, 0, 0, 0],
        [1, 1, 1, 1],
        [1, 0, 0, 0],
        [1, 0, 0, 0]
      ],
      2
    ),
    [0, 2]
  );

  assert.deepEqual(
    kWeakestRows(
      [[1, 1, 0], [1, 1, 0], [1, 1, 1], [1, 1, 1], [0, 0, 0], [1, 1, 1], [1, 0, 0]],
      6,
    ),
    [4, 6, 0, 1, 2, 3]
  );
})();