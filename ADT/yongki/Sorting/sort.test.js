const assert = require('assert')
const sort = require('./index');


describe('sort test', () => {
  const nums = Object.freeze([5, 3, 8, 1, 2, 7]);

  it('insertion sort', () => {
    assert.deepEqual(
      sort.insertion([...nums]),
      [1, 2, 3, 5, 7, 8]
    );
  })

  it('bubble sort', () => {
    assert.deepEqual(
      sort.bubble([...nums]),
      [1, 2, 3, 5, 7, 8]
    );
  })

  it('merge sort not in-place', () => {
    assert.deepEqual(
      sort.mergeSort([...nums]),
      [1, 2, 3, 5, 7, 8]
    );
  })

  it('merge sort inplace', () => {
    assert.deepEqual(
      sort.mergeSortInplace([...nums]),
      [1, 2, 3, 5, 7, 8]
    );
  })
  

  it('selection sort', () => {
    assert.deepEqual(
      sort.selection([...nums]),
      [1, 2, 3, 5, 7, 8]
    );
  })

  it('quick sort in-place', () => {
    assert.deepEqual(
      sort.quickSortInPlace([...nums]),
      [1, 2, 3, 5, 7, 8]
    );
  })

  it('quick sort not in-place', () => {
    assert.deepEqual(
      sort.quickSortNotInPlace([...nums]),
      [1, 2, 3, 5, 7, 8]
    );
  })  

  it('heap sort', () => {
    assert.deepEqual(
      sort.heap([...nums]),
      [1, 2, 3, 5, 7, 8]
    );
  })
})