const Heap = require('./Heap');

var MinHeap = function () {
  Heap.apply(this, arguments);
};

MinHeap.prototype = Object.create(Heap.prototype);
MinHeap.prototype.constructor = MinHeap;


MinHeap.prototype._bubbleUp = function (idx) {

  while (
    this.getParent(idx)
    && this.getParent(idx) > this.heap[idx]) {
    const parentIdx = this.getParentIdx(idx);

    this.swap(idx, parentIdx);
    idx = parentIdx;
  }
}

MinHeap.prototype._bubbleDown = function (idx) {

  while (
    this.getLeftChild(idx)
    && this.getLeftChild(idx) < this.heap[idx]
    || this.getRightChild(idx) < this.heap[idx]
  ) {
    let smallerIdx = this.getLeftChildIdx(idx);

    if (
      this.getRightChild(idx)
      && this.getRightChild(idx) < this.heap[smallerIdx]
    )
      smallerIdx = this.getRightChildIdx(idx)

    this.swap(idx, smallerIdx);
    idx = smallerIdx;
  }
}

/**
 * @param {number} value
 * @returns {boolean}
 * 
 * time:      O(n)
 * space:     O(1)
 */
MinHeap.prototype.delete = function (value) {
  const idx = this.findIndex(value);

  if (idx === undefined)
    return false;

  this.swap(this.size() - 1, idx);
  this.heap.splice(this.size() - 1);

  const oldValue = this.heap[idx];
  oldValue > value ? this._bubbleDown(idx) : this._bubbleUp(idx);

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

  oldValue > value ? this._bubbleDown(idx) : this._bubbleUp(idx);

  return true;
}

module.exports = MinHeap;