const util = require('util');

const MaxHeap = require('./adt/MaxHeap');


/**
 * @param {number[]} stones
 * @return {number}
 * 
 * time:  O(n log n)
 *        → for:          O(n)
 *          → insert:     O(log n)
 * 
 *        → while:        O(n - 1)
 *          → extract:    O(log n)
 * 
 * space: O(n)
 */
var lastStoneWeight = function (stones) {
  const maxHeap = new MaxHeap();

  for (const stone of stones)
    maxHeap.insert(stone);

  while (maxHeap.heap.length > 1) {    
    const root = maxHeap.extract();
    const lessNode = maxHeap.extract();

    const weight = root - lessNode;    

    if (weight)
      maxHeap.insert(weight);
  }

  return maxHeap.extract() || 0;
};

(function main() {
  const input = [2, 7, 4, 1, 8, 1];

  const output = lastStoneWeight(input);
  console.log(output);
})();