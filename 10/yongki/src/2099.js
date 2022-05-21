const assert = require('assert');
const util = require('util');
const MaxHeap = require('../../../ADT/yongki/Heap/MaxHeap');

MaxHeap.prototype._bubbleUp = function (idx) {

  while (this.getParent(idx)?.num < this.heap[idx]?.num) {
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
 *          → for           O(n)
 * space:   O(n)
 */
var maxSubsequence = function (nums, k) {
  const heap = new MaxHeap();
  const set = new Set();
  const result = [];

  for (const [idx, num] of nums.entries())
    heap.insert({ idx, num });      

  while(k--){
    const { idx, _ } = heap.extract();
    set.add(idx);
  }    

  let countIdx = 0;
  for (const [idx, num] of nums.entries()) {

    if (set.has(idx)){
      result[countIdx] = num;
      countIdx += 1;
    }
  }
  return result;
};

(function main() {
  // assert.deepEqual(
  //   maxSubsequence([2, 1, 3, 3], 2),
  //   [3, 3]
  // );

  assert.deepEqual(
    maxSubsequence(
      [11, -40, 2, -7, -37, 6, 11, -13, -32, -29, 5, -12, 9, -25, 27, -10, -24, 7, 40, -26, 29, 29, -5, 20, -7, 12, 0, 9, 25, 24, -3, -1, 20, -1, 5, -40, 29, -14, 1, -13, -27, -39, -16, -12, 20, -20, -8, 31, 5, 33, -29, -10, -2, 31, 7, 10, 37, 20, 4, -10, -35, -31, -4, -32, -20, 5, 25, 22, -7, 15, 39, -35, 11, 27, 13, 10, 32, -37, -1, 19, 17, 17, 34, 9, 29, 36, -30, -32, -10, -35, -8, 39, 25, 34],
      68
    ),
    [11, 2, -7, 6, 11, 5, -12, 9, 27, -10, 7, 40, 29, 29, -5, 20, -7, 12, 0, 9, 25, 24, -3, -1, 20, -1, 5, 29, 1, 20, -8, 31, 5, 33, -10, -2, 31, 7, 10, 37, 20, 4, -10, -4, 5, 25, 22, -7, 15, 39, 11, 27, 13, 10, 32, -1, 19, 17, 17, 34, 9, 29, 36, -10, -8, 39, 25, 34]
  );
})();