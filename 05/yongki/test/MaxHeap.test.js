const assert = require('assert');
const MaxHeap = require('../../../ADT/yongki/Heap/MaxHeap');


describe('MaxHeap', _ => {
  describe('nums heap', () => {
    const nums = [2, 7, 26, 25, 19, 17, 1, 90, 3, 36];
    const heap = new MaxHeap();

    it('insert nums', () => {
      for (const num of nums)
        heap.insert(num);
    })

    it('display all set up heap', () => {
      assert.deepEqual(heap.heap, [90, 36, 17, 25, 26, 7, 1, 2, 3, 19]);
    })

    it('get root num', () => {
      assert.equal(heap.getRoot(), 90);
    })

    it('extract num', () => {
      assert.equal(heap.extract(), 90);
    })

    it('display after extract heap', () => {
      assert.deepEqual(heap.heap, [36, 26, 17, 25, 19, 7, 1, 2, 3]);
    })

    it('delete num', () => {
      assert.equal(heap.delete(2), true);
    })

    it('display after delete heap', () => {
      assert.deepEqual(heap.heap, [36, 26, 17, 25, 19, 7, 1, 3]);
    })    

    it('delete num', () => {
      assert.equal(heap.delete(19), true);
    })

    it('display after delete heap', () => {
      assert.deepEqual(heap.heap, [36, 26, 17, 25, 3, 7, 1]);
    })    

    it('update num', () => {
      assert.equal(heap.updateKey(3, 30), true);
    })

    it('display after update heap', () => {
      assert.deepEqual(heap.heap, [36, 30, 17, 26, 3, 7, 1]);
    })    
  })
})
