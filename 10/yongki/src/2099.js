const assert = require('assert');
const MaxHeap = require('../../../ADT/yongki/Heap/MaxHeap');

MaxHeap.prototype._bubbleUp = function (idx) {

  while (this.getParent(idx)?.num < this.heap[idx].num) {
    const parentIdx = this.getParentIdx(idx);

    this.swap(idx, parentIdx);
    idx = parentIdx;
  }
}

MaxHeap.prototype._bubbleDown = function (idx) {

  while (
    this.getLeftChild(idx)?.num > this.heap[idx]?.num
    || this.getRightChild(idx)?.num > this.heap[idx]?.num
  ) {
    let biggerIdx = this.getLeftChildIdx(idx);

    if (this.getRightChild(idx)?.num > this.heap[biggerIdx]?.num)
      biggerIdx = this.getRightChildIdx(idx)

    this.swap(idx, biggerIdx);
    idx = biggerIdx;
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 
 * time:    O(n log n)
 *          → heap setting  O(n log n)
 *          → filter        O(n)
 * space:   O(n)
 */
var maxSubsequence = function (nums, k) {
  const heap = new MaxHeap();
  const result = [];

  for (const [idx, num] of nums.entries())
    heap.insert({ idx, num });

  for (let i = 0; i < k; i++) {
    const { idx, num } = heap.extract();

    result[idx] = num;
  }
  return result.filter(each => each);
};

(function main() {
  assert.deepEqual(
    maxSubsequence([2, 1, 3, 3], 2),
    [3, 3]
  );

  assert.deepEqual(
    maxSubsequence([-1, -2, 3, 4], 3),
    [-1, 3, 4]
  );

  assert.deepEqual(
    maxSubsequence([50, -75], 2),
    [50, -75]
  );
})();