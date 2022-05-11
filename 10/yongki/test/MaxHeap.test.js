const assert = require('assert');
const MaxHeap = require('../../../ADT/yongki/Heap/MaxHeap');


describe('MaxHeap', _ => {
  describe('level 1 order', () => {
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

    // it('update num', () => {
    //   assert.equal(heap.updateKey(3, 30), true);
    // })

    // it('display after update heap', () => {
    //   assert.deepEqual(heap.heap, [36, 30, 17, 26, 3, 7, 1]);
    // })    
  })

  describe('level 1 not order', () => {
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

    // it('update num', () => {
    //   assert.equal(heap.updateKey(1, 10), true);
    // })

    // it('display after update heap', () => {
    //   assert.deepEqual(heap.heap, [10, 7, 2, 1]);
    // })    
  })
})
