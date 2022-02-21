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

MaxHeap { heap: [ 90, 36, 17, 25, 26, 7, 1, 2, 3, 19, [length]: 10 ] }


obj.extract();
console.log(util.inspect(obj, {showHidden: true, depth: null}))

MaxHeap { heap: [ 36, 26, 17, 25, 19, 7, 1, 2, 3, [length]: 9 ] }
*/
var MaxHeap = function() {
  Heap.apply(this, arguments);
}

MaxHeap.prototype = Object.create(Heap.prototype);
MaxHeap.prototype.constructor = MaxHeap;


MaxHeap.prototype._bubbleUp = function(){
  let idx = this.heap.length - 1;

  while(
    this.getParent(idx) !== undefined
    && this.getParent(idx) < this.heap[idx])
  {    
    const parentIdx = this.getParentIdx(idx);

    this.swap(idx, parentIdx);
    idx = parentIdx;    
  }
}

MaxHeap.prototype._bubbleDown = function(){
  let idx = 0;

  while(
    this.getLeftChild(idx) !== undefined
    && this.getLeftChild(idx) > this.heap[idx]
    || this.getRightChild(idx) > this.heap[idx]
  ){
    let biggerIdx = this.getLeftChildIdx(idx);

    if(
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
MaxHeap.prototype.delete = function(value){
  const idx = this.findIndex(value);
  
  if(idx === undefined)
    return false;
  
  this.swap(0, idx);  
  this.heap.shift();

  this._bubbleDown();

  return true;
}

module.exports = MaxHeap;
