const assert = require('assert');
const MinHeap = require('../../../ADT/yongki/Heap/MinHeap');


describe('MinHeap', _ => {
  describe('level 1 order', () => {
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

    // it('update num', () => {
    //   assert.equal(heap.updateKey(1, 10), true);
    // })

    // it('display after update heap', () => {
    //   assert.deepEqual(heap.heap, [1, 8, 4, 10]);
    // })
  })

  describe('level 1 not order', () => {    
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

    // it('update num', () => {
    //   assert.equal(heap.updateKey(1, 10), true);
    // })

    // it('display after update heap', () => {
    //   assert.deepEqual(heap.heap, [1, 8, 2, 10]);
    // })
  })
})
