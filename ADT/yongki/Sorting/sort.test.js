const assert = require('assert')
const sort = require('./index');

const RESULT = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
  25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
  49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72,
  73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84,
  85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
  97, 98, 99, 100
];

describe('random test', () => {
  let sequenceList = Array(10 * 10).fill().map((_, idx) => idx + 1);
  const nums = [];

  while (sequenceList.length > 0) {
    const random = sequenceList.splice(
      Math.floor(Math.random() * sequenceList.length), 1
    )[0];

    nums.push(random);
  }

  it('bubble sort', () => {
    assert.deepEqual(
      sort.bubble([...nums]),
      RESULT
    );
  })

  it('insertion sort', () => {
    assert.deepEqual(
      sort.insertion([...nums]),
      RESULT
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
      RESULT
    );
  })

  it('quick sort in-place', () => {
    assert.deepEqual(
      sort.quickSortInPlace([...nums]),
      RESULT
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
  const nums = Array(10 * 10).fill().map((_, idx) => idx + 1);
  nums.splice(79, 1);
  nums.push(80);

  it('bubble sort', () => {
    assert.deepEqual(
      sort.bubble([...nums]),
      RESULT
    );
  })

  it('insertion sort', () => {
    assert.deepEqual(
      sort.insertion([...nums]),
      RESULT
    );
  })

  it('selection sort', () => {
    assert.deepEqual(
      sort.selection([...nums]),
      RESULT
    );
  })

  it('quick sort in-place', () => {
    assert.deepEqual(
      sort.quickSortInPlace([...nums]),
      RESULT
    );
  })
})

describe('reversed test', () => {
  const nums = [
    100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89,
    88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77,
    76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65,
    64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53,
    52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41,
    40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29,
    28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17,
    16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5,
    4, 3, 2, 1
  ]

  console.log(nums);

  it('bubble sort', () => {
    assert.deepEqual(
      sort.bubble([...nums]),
      RESULT
    );
  })

  it('insertion sort', () => {
    assert.deepEqual(
      sort.insertion([...nums]),
      RESULT
    );
  })

  it('selection sort', () => {
    assert.deepEqual(
      sort.selection([...nums]),
      RESULT
    );
  })

  it('quick sort in-place', () => {
    assert.deepEqual(
      sort.quickSortInPlace([...nums]),
      RESULT
    );
  })
})