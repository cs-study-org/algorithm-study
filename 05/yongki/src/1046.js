const util = require('util');

const MaxHeap = require('./adt/MaxHeap');


/**
 * @param {number[]} stones
 * @return {number}
 * 
 * time:  O(n log n)
 *        → for:          O(n)
 *        → for:          O(n)
 *        →   findIndex:  O(log n)
 * 
 * space: O(n)
 */
var lastStoneWeight = function (stones) {
  const maxHeap = new MaxHeap();

  for (const stone of stones)
    maxHeap.insert(stone);

  for (let i = 0; i < maxHeap.heap.length; i++) {
    console.log(util.inspect(maxHeap.heap, { showHidden: true, depth: null }));

    const root = maxHeap.getRoot();

    const lessNode = maxHeap.findIndex(root - 1);

    if (lessNode === undefined)
    continue;
    
    console.log(lessNode, root - 1);
    maxHeap.extract();
  }

  return maxHeap.heap.length;
};

(function main() {
  const input = [2,7,4,1,8,1];

  const output = lastStoneWeight(input);
  console.log(output);
})();