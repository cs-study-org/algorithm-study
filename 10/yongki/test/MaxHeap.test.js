const assert = require('assert');
const MaxHeap = require('../../../ADT/yongki/Heap/MaxHeap');


describe('MaxHeap', _ => {
  describe('left node < right node', () => {
    const nums = [2, 7, 4, 1, 8, 1];
    const heap = new MaxHeap();

    it('insert nums', () => {
      for (const num of nums)
        heap.insert(num);
    })

    it('display all set up heap', () => {
      assert.deepEqual(heap.heap, [8, 7, 4, 1, 2, 1]);
    })

    it('get root num', () => {
      assert.equal(heap.getRoot(), 8);
    })

    it('extract num', () => {
      assert.equal(heap.extract(), 8);
    })

    it('display after extract heap', () => {
      assert.deepEqual(heap.heap, [7, 2, 4, 1, 1]);
    })

    it('delete num', () => {
      assert.equal(heap.delete(1), true);
    })

    it('display after delete heap', () => {
      assert.deepEqual(heap.heap, [7, 2, 4, 1]);
    })
  })

  describe('left node > right node', () => {
    const nums = [8, 4, 7, 1, 2, 1];
    const heap = new MaxHeap();

    it('insert nums', () => {
      for (const num of nums)
        heap.insert(num);
    })

    it('display all set up heap', () => {
      assert.deepEqual(heap.heap, [8, 4, 7, 1, 2, 1]);
    })

    it('get root num', () => {
      assert.equal(heap.getRoot(), 8);
    })

    it('extract num', () => {
      assert.equal(heap.extract(), 8);
    })

    it('display after extract heap', () => {
      assert.deepEqual(heap.heap, [7, 4, 1, 1, 2]);
    })

    it('delete num', () => {
      assert.equal(heap.delete(4), true);
    })

    it('display after delete heap', () => {
      assert.deepEqual(heap.heap, [7, 2, 1, 1]);
    })
  })

  describe('delete heapify and update', () => {
    const nums = [21, 17, 11, 15, 6, 5, 8, 1, 9];
    const heap = new MaxHeap();

    for (const num of nums)
      heap.insert(num);

    it('delete num', () => {
      assert.equal(heap.delete(5), true);
    })

    it('display after delete heap', () => {
      assert.deepEqual(heap.heap, [21, 17, 11, 15, 6, 9, 8, 1])
    })

    it('update num', () => {
      assert.equal(heap.updateKey(1, 3), true);
    })

    it('display after update heap', () => {
      assert.deepEqual(heap.heap, [21, 15, 11, 3, 6, 9, 8, 1]);
    })
  })
})
