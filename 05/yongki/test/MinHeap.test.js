const assert = require('assert');
const MinHeap = require('../src/adt/MinHeap');


describe('MinHeap', _ => {
  describe('nums heap', () => {
    const nums = [2, 7, 26, 25, 19, 17, 1, 90, 3, 36];
    const heap = new MinHeap();

    it('insert nums', () => {
      for (const num of nums)
        heap.insert(num);
    })

    it('display all set up heap', () => {
      assert.deepEqual(heap.heap, [1, 3, 2, 7, 19, 26, 17, 90, 25, 36]);
    })

    it('get root num', () => {
      assert.equal(heap.getRoot(), 1);
    })

    it('extract num', () => {
      assert.equal(heap.extract(), 1);
    })

    it('display after extract heap', () => {
      assert.deepEqual(heap.heap, [2, 3, 17, 7, 19, 26, 36, 90, 25]);
    })

    it('delete num', () => {
      assert.equal(heap.delete(7), true);
    })

    it('display after delete heap', () => {
      assert.deepEqual(heap.heap, [2, 3, 17, 25, 19, 26, 36, 90]);
    })

    it('update num', () => {
      assert.equal(heap.updateKey(6, 5), true);
    })

    it('display after update heap', () => {
      assert.deepEqual(heap.heap, [2, 3, 5, 25, 19, 26, 17, 90]);
    })
  })
})
