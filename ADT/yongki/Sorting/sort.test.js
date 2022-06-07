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

  it('selection sort', () => {
    assert.deepEqual(
      sort.selection([...nums]),
      [1, 2, 3, 5, 7, 8]
    );
  })

  it('quick sort', () => {
    assert.deepEqual(
      sort.quick([...nums]),
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