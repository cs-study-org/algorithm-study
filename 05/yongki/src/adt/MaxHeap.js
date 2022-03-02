const util = require('util');

const Heap = require('./Heap');


var MaxHeap = function () {
  Heap.apply(this, arguments);
}

MaxHeap.prototype = Object.create(Heap.prototype);
MaxHeap.prototype.constructor = MaxHeap;


MaxHeap.prototype._bubbleUp = function (idx) {  

  while (
    this.getParent(idx) !== undefined
    && this.getParent(idx) < this.heap[idx]) {
    const parentIdx = this.getParentIdx(idx);

    this.swap(idx, parentIdx);
    idx = parentIdx;
  }
}

MaxHeap.prototype._bubbleDown = function (idx) {  

  while (
    this.getLeftChild(idx) !== undefined
    && this.getLeftChild(idx) > this.heap[idx]
    || this.getRightChild(idx) > this.heap[idx]
  ) {
    let biggerIdx = this.getLeftChildIdx(idx);

    if (
      this.getRightChild(idx) !== undefined
      && this.getRightChild(idx) > this.heap[biggerIdx]
    )
      biggerIdx = this.getRightChildIdx(idx)

    this.swap(idx, biggerIdx);
    idx = biggerIdx;
  }
}

/**
 * @param {number} value
 * @returns {boolean}
 * 
 * time:      O(log n)
              → findIndex:    O(log n)      
              → swap          O(1)
              → shift         O(1)
              → bubbleUp:     O(log n)      
              
 * space:     O(1)
 */
MaxHeap.prototype.delete = function (value) {
  const idx = this.findIndex(value);  

  if (idx === undefined)
    return false;

  console.log('before swap: ', util.inspect(this.heap, {showHidden: true, depth: null}))
  
  this.swap(0, idx);
  this.heap.shift();
  
  console.log('after swap: ', util.inspect(this.heap, {showHidden: true, depth: null}))  
  
  this._bubbleUp(idx - 1);
  console.log('after heapify: ', util.inspect(this.heap, {showHidden: true, depth: null}))  

  return true;
}

/**
 * 
 * @param {number} idx
 * @param {number} value
 * @returns {void}
 * 
 * time:      O(log n)
 * space:     O(1)
 */
MaxHeap.prototype.updateKey = function (idx, value) {
  const oldValue = this.heap[idx - 1];

  this.heap[idx - 1] = value;
  oldValue > value ? this._bubbleDown() : this._bubbleUp();
}

module.exports = MaxHeap; 
