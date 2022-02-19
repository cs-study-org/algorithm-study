const Heap = require('./Heap');

/*
+++ Drive ADT

obj.insert(2);
obj.insert(7);
obj.insert(26);
obj.insert(25);
obj.insert(19);
obj.insert(17);
obj.insert(1);
obj.insert(90);
obj.insert(3);
obj.insert(36);

console.log(util.inspect(obj, {showHidden: true, depth: null}))
MinHeap { heap: [ 1, 3, 2, 7, 19, 26, 17, 90, 25, 36, [length]: 10 ] }


obj.extract();

console.log(util.inspect(obj, {showHidden: true, depth: null}))
MinHeap { heap: [ 2, 3, 17, 7, 19, 26, 36, 90, 25, [length]: 9 ] }
*/
var MinHeap = function() {
  Heap.apply(this, arguments);
};

MinHeap.prototype = Object.create(Heap.prototype);
MinHeap.prototype.constructor = MinHeap;


MinHeap.prototype._bubbleUp = function(){
  let idx = this.heap.length - 1;

  while(
    this.getParent(idx) !== undefined
    && this.getParent(idx) > this.heap[idx])
  {    
    const parentIdx = this.getParentIdx(idx);

    this.swap(idx, parentIdx);
    idx = parentIdx;    
  }
}

MinHeap.prototype._bubbleDown = function(){
  let idx = 0;

  while(
    this.getLeftChild(idx) !== undefined
    && this.getLeftChild(idx) < this.heap[idx]
    || this.getRightChild(idx) < this.heap[idx]
  ){
    let smallerIdx = this.getLeftChildIdx(idx);

    if(
      this.getRightChild(idx) !== undefined
      && this.getRightChild(idx) < this.heap[smallerIdx]
    )
      smallerIdx = this.getRightChildIdx(idx)
      
    this.swap(idx, smallerIdx);
    idx = smallerIdx;
  }
}

/**
 * @param {number} value 
 * @returns 
 * 
 * time:      O(log n)
 * space:     O(1)
 */
MinHeap.prototype.insert = function(value){
  this.heap[this.heap.length] = value;

  this._bubbleUp();
}

/**
 * @returns 
 * 
 * time:      O(log n)
              → pop:        O(1)
              → bubbleDown: O(log n)

 * space:     O(1)
 */
MinHeap.prototype.extract = function(){
  const root = this.getRoot()

  this.heap[0] = this.heap[this.heap.length - 1];
  this.heap.pop();

  this._bubbleDown();
  return root;
}

module.exports = MinHeap;