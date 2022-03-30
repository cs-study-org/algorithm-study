const Heap = require('./Heap');


var MinHeap = function () {
  Heap.apply(this, arguments);
};

MinHeap.prototype = Object.create(Heap.prototype);
MinHeap.prototype.constructor = MinHeap;


MinHeap.prototype._bubbleUp = function (idx) {

  while (
    this.getParent(idx) !== undefined
    && this.getParent(idx) > this.heap[idx]) {
    const parentIdx = this.getParentIdx(idx);

    this.swap(idx, parentIdx);
    idx = parentIdx;
  }
}

MinHeap.prototype._bubbleDown = function (idx) {

  while (
    this.getLeftChild(idx) !== undefined
    && this.getLeftChild(idx) < this.heap[idx]
    || this.getRightChild(idx) < this.heap[idx]
  ) {
    let smallerIdx = this.getLeftChildIdx(idx);

    if (
      this.getRightChild(idx) !== undefined
      && this.getRightChild(idx) < this.heap[smallerIdx]
    )
      smallerIdx = this.getRightChildIdx(idx)

    this.swap(idx, smallerIdx);
    idx = smallerIdx;
  }
}

MinHeap.prototype._binarySearch = function (value) {
  let idx = 0;

  while (
    this.getLeftChild(idx) !== undefined
    && this.getLeftChild(idx) <= value
    || this.getRightChild(idx) <= value
  ) {
    if (this.getLeftChild(idx) === value)
      return this.getLeftChildIdx(idx);

    if (this.getRightChild(idx) === value)
      return this.getRightChildIdx(idx);

    let smallerIdx = this.getLeftChildIdx(idx);

    if (
      this.getRightChild(idx) !== undefined
      && this.getRightChild(idx) < this.heap[smallerIdx]
    )
      smallerIdx = this.getRightChildIdx(idx);

    idx = smallerIdx;
  }

  return;
}

/**
 * @param {number} value
 * @returns {boolean}
 * 
 * time:      O(log n)
              → findIndex:    O(log n)      
              → swap          O(1)              

 * space:     O(1)
 */
MinHeap.prototype.delete = function (value) {
  const idx = this.findIndex(value);  

  if (idx === undefined)
    return false;

  this.swap(this.size() - 1, idx);
  this.heap.splice(this.size() - 1);

  return true;
}

/**
 * 
 * @param {number} idx
 * @param {number} value
 * @returns {boolean}
 * 
 * time:      O(log n)
 * space:     O(1)
 */
MinHeap.prototype.updateKey = function (idx, value) {
  if (idx === undefined)
    return false;

  const oldValue = this.heap[idx];
  this.heap[idx] = value;

  oldValue < value ? this._bubbleDown(idx) : this._bubbleUp(idx);

  return true;
}

module.exports = MinHeap;