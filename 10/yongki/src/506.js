const assert = require('assert');
const util = require('util');

const MaxHeap = require('../../../ADT/yongki/Heap/MaxHeap');

MaxHeap.prototype._bubbleUp = function (idx) {

  while (
    this.getParent(idx)
    && this.getParent(idx).score
    && this.getParent(idx).score < this.heap[idx].score) {
    const parentIdx = this.getParentIdx(idx);

    this.swap(idx, parentIdx);
    idx = parentIdx;
  }
}

MaxHeap.prototype._bubbleDown = function (idx) {

  while (
    this.getLeftChild(idx)
    && this.getLeftChild(idx).score
    && this.getLeftChild(idx).score > this.heap[idx].score
    || (
      this.getRightChild(idx)
      && this.getRightChild(idx).score
      && this.getRightChild(idx).score > this.heap[idx].score
    )
  ) {
    let biggerIdx = this.getLeftChildIdx(idx);

    if (
      this.getRightChild(idx)
      && this.getRightChild(idx).score
      && this.getRightChild(idx).score > this.heap[biggerIdx].score
    )
      biggerIdx = this.getRightChildIdx(idx)

    this.swap(idx, biggerIdx);
    idx = biggerIdx;
  }
}

/**
 * @param {number[]} scores
 * @return {string[]}
 * 
 * time:    O(n)
 *          → heap setting    O(n)
 *          → for             O(n)
 *            → indexOf       O(n)
 * space:   O(n²)
 */
var findRelativeRanks = function (scores) {
  const rankCode = {
    0: 'Gold Medal',
    1: 'Silver Medal',
    2: 'Bronze Medal'
  }

  const heap = new MaxHeap();
  const result = [...scores];

  for (const [curIdx, score] of scores.entries())
    heap.insert({ curIdx, score });

  console.log(util.inspect(heap.heap, { showHidden: false, depth: null }))

  for (let rank = 0; rank < scores.length; rank++) {
    const { curIdx, _ } = heap.extract();

    result[curIdx] = rankCode[rank] ? rankCode[rank] : String(rank + 1);
  }

  return result;
};

(function main() {
  assert.deepEqual(
    findRelativeRanks([5, 4, 3, 2, 1]),
    ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
  );

  assert.deepEqual(
    findRelativeRanks([10, 3, 8, 9, 4]),
    ["Gold Medal", "5", "Bronze Medal", "Silver Medal", "4"]
  );
})();