const util = require('util');

const MinHeap = require('./adt/MinHeap');


/**
 * @param {number} k
 * @param {number[]} nums
 *  
 * time:    O(n log n)
 * space:   O(n)
 */
var KthLargest = function (k, nums) {
  this.heap = new MinHeap();

  for (const num of nums)
    this.heap.insert(num);

  if (this.heap.size() > k)
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
  if (!this.heap.getRoot())
    this.heap.insert(val);

  if (this.heap.getRoot() < val) {
    this.heap.extract();
    this.heap.insert(val);
  }

  return this.heap.getRoot();
};

(function main() {
  const obj = new KthLargest(1, [-2]);
  console.log(util.inspect(obj.heap, { showHidden: true, depth: null }))

  let output = 0;

  output = obj.add(-3);
  console.log(output);

  output = obj.add(0);
  console.log(output);

  output = obj.add(2);
  console.log(output);

  output = obj.add(-1);
  console.log(output);

  output = obj.add(4);  // +++ Fail!
  console.log(output);
})();