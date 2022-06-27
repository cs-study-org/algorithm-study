const assert = require('assert')
const sort = require('./index');


describe('random test', () => {
  const nums = Object.freeze([5, 3, 8, 1, 2, 7]);

  it('bubble sort', () => {
    assert.deepEqual(
      sort.bubble([...nums]),
      [1, 2, 3, 5, 7, 8]
    );
  })

  it('insertion sort', () => {
    assert.deepEqual(
      sort.insertion([...nums]),
      [1, 2, 3, 5, 7, 8]
    );
  })

  // it('merge sort', () => {
  //   assert.deepEqual(
  //     sort.mergeSort([...nums]),
  //     [1, 2, 3, 5, 7, 8]
  //   );
  // })

  // it('merge sort with linked list', () => {
  //   assert.deepEqual(
  //     sort.mergeSortLinkedList([...nums]),
  //     [1, 2, 3, 5, 7, 8]
  //   );
  // })

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

  // it('quick sort not in-place', () => {
  //   assert.deepEqual(
  //     sort.quickSortNotInPlace([...nums]),
  //     [1, 2, 3, 5, 7, 8]
  //   );
  // })

  // it('heap sort', () => {
  //   assert.deepEqual(
  //     sort.heap([...nums]),
  //     [1, 2, 3, 5, 7, 8]
  //   );
  // })
})

describe('sorted test', () => {
  const nums = [1, 2, 3, 7, 8];
  nums.push(5);
  // +++ result is [1, 2, 3, 7, 8, 5]

  it('bubble sort', () => {
    assert.deepEqual(
      sort.bubble([...nums]),
      [1, 2, 3, 5, 7, 8]
    );
  })

  it('insertion sort', () => {
    assert.deepEqual(
      sort.insertion([...nums]),
      [1, 2, 3, 5, 7, 8]
    );
  })

  // it('merge sort', () => {
  //   assert.deepEqual(
  //     sort.mergeSort([...nums]),
  //     [1, 2, 3, 5, 7, 8]
  //   );
  // })

  // it('merge sort with linked list', () => {
  //   assert.deepEqual(
  //     sort.mergeSortLinkedList([...nums]),
  //     [1, 2, 3, 5, 7, 8]
  //   );
  // })

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

  // it('quick sort not in-place', () => {
  //   assert.deepEqual(
  //     sort.quickSortNotInPlace([...nums]),
  //     [1, 2, 3, 5, 7, 8]
  //   );
  // })

  // it('heap sort', () => {
  //   assert.deepEqual(
  //     sort.heap([...nums]),
  //     [1, 2, 3, 5, 7, 8]
  //   );
  // })
})

describe('reversed test', () => {
  const nums = Object.freeze([8, 7, 5, 3, 2, 1]);

  it('bubble sort', () => {
    assert.deepEqual(
      sort.bubble([...nums]),
      [1, 2, 3, 5, 7, 8]
    );
  })

  it('insertion sort', () => {
    assert.deepEqual(
      sort.insertion([...nums]),
      [1, 2, 3, 5, 7, 8]
    );
  })

  // it('merge sort', () => {
  //   assert.deepEqual(
  //     sort.mergeSort([...nums]),
  //     [1, 2, 3, 5, 7, 8]
  //   );
  // })

  // it('merge sort with linked list', () => {
  //   assert.deepEqual(
  //     sort.mergeSortLinkedList([...nums]),
  //     [1, 2, 3, 5, 7, 8]
  //   );
  // })

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

  // it('quick sort not in-place', () => {
  //   assert.deepEqual(
  //     sort.quickSortNotInPlace([...nums]),
  //     [1, 2, 3, 5, 7, 8]
  //   );
  // })

  // it('heap sort', () => {
  //   assert.deepEqual(
  //     sort.heap([...nums]),
  //     [1, 2, 3, 5, 7, 8]
  //   );
  // })
})