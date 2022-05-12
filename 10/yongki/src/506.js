const assert = require('assert');

const MaxHeap = require('../../../ADT/yongki/Heap/MaxHeap');

/**
 * @param {number[]} scores
 * @return {string[]}
 * 
 * time:    O(n²)
 *          → heap setting    O(n)
 *          → for             O(n)
 *            → indexOf       O(n)
 * space:   O(n)
 */
var findRelativeRanks = function (scores) {
  const rankCode = {
    0: 'Gold Medal',
    1: 'Silver Medal',
    2: 'Bronze Medal'
  }

  const heap = new MaxHeap();
  const result = [...scores];

  for (const score of scores)
    heap.insert(score);  

  for (let rank = 0; rank < scores.length; rank++) {
    const score = heap.extract();
    const idx = scores.indexOf(score);

    result[idx] = rankCode[rank] ? rankCode[rank] : String(rank + 1);
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