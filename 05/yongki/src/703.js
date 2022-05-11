const util = require('util');
const assert = require('assert')

const MinHeap = require('../../../ADT/yongki/Heap/MinHeap');


/**
 * @param {number} k
 * @param {number[]} nums
 * 
 * time:    O(n log n)
            for:        O(n)
              insert:   O(log n)
            while:      O(less than n)
              extract:  O(log n)
      
 * space:   O(n)
 */
var KthLargest = function (k, nums) {
  this.k = k;
  this.heap = new MinHeap();

  for (const num of nums)
    this.heap.insert(num);

  while (this.heap.size() > this.k)
    this.heap.extract();
};

/** 
 * @param {number} val
 * @return {number}
 * 
 * time:    O(log n)
 * space:   O(1)
 */
KthLargest.prototype.add = function (val) {
  if (this.heap.size() < this.k)
    this.heap.insert(val);

  else if (this.heap.getRoot() < val) {
    this.heap.extract();
    this.heap.insert(val);
  }

  return this.heap.getRoot();
};

(function main() {
  const obj = new KthLargest(3, [5, -1]);
  console.log(util.inspect(obj.heap, { showHidden: true, depth: null }))

  assert.equal(obj.add(2), -1);
  assert.equal(obj.add(1), 1);
  assert.equal(obj.add(-1), 1);
  assert.equal(obj.add(3), 2);
  assert.equal(obj.add(4), 3);

  console.log(util.inspect(obj.heap, { showHidden: true, depth: null }))
})();