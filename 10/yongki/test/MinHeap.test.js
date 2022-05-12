const assert = require('assert');
const MinHeap = require('../../../ADT/yongki/Heap/MinHeap');


describe('MinHeap', _ => {
  describe('left node < right node', () => {
    const nums = [2, 7, 4, 1, 8, 1];
    const heap = new MinHeap();

    it('insert nums', () => {
      for (const num of nums)
        heap.insert(num);
    })

    it('display all set up heap', () => {
      assert.deepEqual(heap.heap, [1, 2, 1, 7, 8, 4]);
    })

    it('get root num', () => {
      assert.equal(heap.getRoot(), 1);
    })

    it('extract num', () => {
      assert.equal(heap.extract(), 1);
    })

    it('display after extract heap', () => {
      assert.deepEqual(heap.heap, [1, 2, 4, 7, 8]);
    })

    it('delete num', () => {
      assert.equal(heap.delete(2), true);
    })

    it('display after delete heap', () => {
      assert.deepEqual(heap.heap, [1, 7, 4, 8]);
    })
  })

  describe('left node > right node', () => {
    const nums = [1, 1, 2, 7, 8, 4];
    const heap = new MinHeap();

    it('insert nums', () => {
      for (const num of nums)
        heap.insert(num);
    })

    it('display all set up heap', () => {
      assert.deepEqual(heap.heap, [1, 1, 2, 7, 8, 4]);
    })

    it('get root num', () => {
      assert.equal(heap.getRoot(), 1);
    })

    it('extract num', () => {
      assert.equal(heap.extract(), 1);
    })

    it('display after extract heap', () => {
      assert.deepEqual(heap.heap, [1, 4, 2, 7, 8]);
    })

    it('delete num', () => {
      assert.equal(heap.delete(4), true);
    })

    it('display after delete heap', () => {
      assert.deepEqual(heap.heap, [1, 7, 2, 8]);
    })
  })

  describe('delete heapify and update', () => {
    const nums = [1, 5, 6, 9, 11, 8, 15, 17, 21];
    const heap = new MinHeap();

    for (const num of nums)
      heap.insert(num);

    it('delete num', () => {
      assert.equal(heap.delete(5), true);
    })

    it('display after delete heap', () => {
      assert.deepEqual(heap.heap, [1, 9, 6, 17, 11, 8, 15, 21])
    })

    it('update num', () => {
      assert.equal(heap.updateKey(2, 33), true);
    })

    it('display after update heap', () => {
      assert.deepEqual(heap.heap, [1, 9, 8, 17, 11, 33, 15, 21]);
    })
  })
})
