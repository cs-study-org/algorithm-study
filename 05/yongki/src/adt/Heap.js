/**
 * N:              index
 * me:             N
 * Parent:        (N - 1) / 2
 * Left Child:    (N * 2) + 1
 * Right Child:   (N * 2) + 2
 */

var Heap = function () {
  this.heap = [];
}

Heap.prototype.swap = function (a, b) {
  let temp = this.heap[a];
  this.heap[a] = this.heap[b];
  this.heap[b] = temp;
}

Heap.prototype.getParentIdx = function (idx) {
  return Math.floor((idx - 1) / 2);
}

Heap.prototype.getParent = function (idx) {
  return this.heap[this.getParentIdx(idx)];
}

Heap.prototype.getLeftChildIdx = function (idx) {
  return (idx * 2) + 1;
}

Heap.prototype.getLeftChild = function (idx) {
  return this.heap[this.getLeftChildIdx(idx)];
}

Heap.prototype.getRightChildIdx = function (idx) {
  return (idx * 2) + 2;
}

Heap.prototype.getRightChild = function (idx) {
  return this.heap[this.getRightChildIdx(idx)];
}

Heap.prototype.getRoot = function () {
  return this.heap[0];
}

/**
 * @param {number} value 
 * @returns {void}
 * 
 * time:      O(log n)
 * space:     O(1)
 */
Heap.prototype.insert = function (value) {
  this.heap[this.heap.length] = value;

  this._bubbleUp(this.heap.length - 1);
}

/**
 * @returns {number}
 * 
 * time:      O(log n)
              → pop:        O(1)
              → bubbleDown: O(log n)

 * space:     O(1)
 */
Heap.prototype.extract = function () {
  const root = this.getRoot()

  this.heap[0] = this.heap[this.heap.length - 1];
  this.heap.pop();

  this._bubbleDown(0);
  return root;
}

Heap.prototype._binarySearch = function (value) {
  let idx = 0;

  while (
    this.getLeftChild(idx) !== undefined
    && this.getLeftChild(idx) >= value
    || this.getRightChild(idx) >= value
  ) {
    if (this.getLeftChild(idx) === value)
      return this.getLeftChildIdx(idx);

    if (this.getRightChild(idx) === value)
      return this.getRightChildIdx(idx);

    let biggerIdx = this.getLeftChildIdx(idx);

    if (
      this.getRightChild(idx) !== undefined
      && this.getRightChild(idx) > this.heap[biggerIdx]
    )
      biggerIdx = this.getRightChildIdx(idx);
        
    idx = biggerIdx;
  }

  return;
}

/**
 * @param {number} value
 * @returns {number}
 * 
 * time:      O(log n)              
 * space:     O(1)
 */
Heap.prototype.findIndex = function (value) {
  if (this.getRoot() === value)
    return 0;

  return this._binarySearch(value);
}

/**
 * @returns {number}
 * 
 * time:      O(1)
 * space:     O(1)
 */
Heap.prototype.size = function () {
  return this.heap.length;
}

module.exports = Heap;