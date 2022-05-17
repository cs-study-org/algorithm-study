const assert = require('assert');
const util = require('util');

const MinHeap = require('../../../ADT/yongki/Heap/MinHeap');

MinHeap.prototype._bubbleUp = function (idx) {

  while (
    this.getParent(idx)?.soldiers > this.heap[idx]?.soldiers) {
    const parentIdx = this.getParentIdx(idx);

    this.swap(idx, parentIdx);
    idx = parentIdx;
  }
}

MinHeap.prototype._bubbleDown = function (idx) {

  while (
    this.getLeftChild(idx)?.soldiers < this.heap[idx]?.soldiers
    ||
    this.getRightChild(idx)?.soldiers < this.heap[idx]?.soldiers

  ) {
    let smallerIdx = this.getLeftChildIdx(idx);

    if (
      this.getRightChild(idx)?.soldiers === this.heap[smallerIdx]?.soldiers
    ) {
      smallerIdx = this.getRightChild(idx).curIdx > this.getLeftChild(idx).curIdx
        ? this.getLeftChildIdx(idx)
        : this.getRightChildIdx(idx);

    } else if (
      this.getRightChild(idx)?.soldiers < this.heap[smallerIdx]?.soldiers
    )
      smallerIdx = this.getRightChildIdx(idx)

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

  console.log(util.inspect(heap.heap, { showHidden: false, depth: null }))

  for (let i = 0; i < k; i++) {
    const { curIdx, _ } = heap.extract();
    result.push(curIdx);
  }

  return result;
};

(function main() {
  // assert.deepEqual(
  //   kWeakestRows(
  //     [
  //       [1, 1, 0, 0, 0],
  //       [1, 1, 1, 1, 0],
  //       [1, 0, 0, 0, 0],
  //       [1, 1, 0, 0, 0],
  //       [1, 1, 1, 1, 1]
  //     ],
  //     3
  //   ),
  //   [2, 0, 3]
  // );

  // assert.deepEqual(
  //   kWeakestRows(
  //     [
  //       [1, 0, 0, 0],
  //       [1, 1, 1, 1],
  //       [1, 0, 0, 0],
  //       [1, 0, 0, 0]
  //     ],
  //     2
  //   ),
  //   [0, 2]
  // );

  assert.deepEqual(
    kWeakestRows(
      [[1, 0], [0, 0], [1, 0]],
      2
    ),
    [1, 0]
  );
})();