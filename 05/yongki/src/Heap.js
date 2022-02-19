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

module.exports = Heap;