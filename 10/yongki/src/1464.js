const assert = require('assert');

const MaxHeap = require('../../../ADT/yongki/Heap/MaxHeap');

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const heap = new MaxHeap();

  for (let i = 0; i < nums.length; i++)
    for (let j = i + 1; j < nums.length; j++) {
      const product = (nums[i] - 1) * (nums[j] - 1);

      heap.insert(product)
    }

  return heap.extract();
};

(function main() {
  assert.equal(
    maxProduct([3, 4, 5, 2]),
    12
  );

  assert.equal(
    maxProduct([1, 5, 4, 5]),
    16
  );
})();