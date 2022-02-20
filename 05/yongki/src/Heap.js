/**
 * N:              index
 * me:             N
 * Parent:        (N - 1) / 2
 * Left Child:    (N * 2) + 1
 * Right Child:   (N * 2) + 2
 */

var Heap = function() {  
  this.heap = [];  
}

Heap.prototype.swap = function(a, b){
  let temp = this.heap[a];
  this.heap[a] = this.heap[b];
  this.heap[b] = temp;
}

Heap.prototype.getParentIdx = function(idx){
  return Math.floor((idx - 1) / 2);  
}

Heap.prototype.getParent = function(idx){
  return this.heap[this.getParentIdx(idx)];
}

Heap.prototype.getLeftChildIdx = function(idx){
  return (idx * 2) + 1;
}

Heap.prototype.getLeftChild = function(idx){
  return this.heap[this.getLeftChildIdx(idx)];
}

Heap.prototype.getRightChildIdx = function(idx){
  return (idx * 2) + 2;
}

Heap.prototype.getRightChild = function(idx){
  return this.heap[this.getRightChildIdx(idx)];
}

Heap.prototype.getRoot = function(){
  return this.heap[0];
}

/**
 * @param {number} value 
 * @returns 
 * 
 * time:      O(log n)
 * space:     O(1)
 */
Heap.prototype.insert = function(value){
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
Heap.prototype.extract = function(){
  const root = this.getRoot()

  this.heap[0] = this.heap[this.heap.length - 1];
  this.heap.pop();

  this._bubbleDown();
  return root;
}

Heap.prototype._findbyBS = function(value, start, end){
  for(let i = start; i <= end; i++){
    const middle = Math.floor((start + end) / 2);    

    if(this.heap[middle] > value)
      return this._findbyBS(value, start, middle - 1);
    else if(this.heap[middle] < value)
      return this._findbyBS(value, middle + 1, end);
    
    return i;
  }
}

/**
 * @param {number} value
 * @returns {number}
 * 
 * time:      O(log n)              
 * space:     O(1)
 */
Heap.prototype.findIndex = function(value){
  return this._findbyBS(value, 0, this.heap.length - 1);
}

module.exports = Heap;