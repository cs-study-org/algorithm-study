const util = require('util');

const ListNode = require('./ListNode');

/**
 * @param {number} k
 */
var MyCircularDeque = function(k) {    
  this.head = new ListNode();
  this.tail = new ListNode();  

  this.head.prev = this.tail;
  this.head.next = this.tail;

  this.tail.prev = this.head;
  this.tail.next = this.head;

  this.size = 0;
  this.maxSize = k;
};

MyCircularDeque.prototype.displayDeque = function(pointer){  
  let head = pointer ? pointer : this.head;
  let tail = pointer ? pointer : this.tail;
  
  process.stdout.write(`[HEAD] size: ${this.size}   `);
  process.stdout.write(`elements: `);
  
  for(let i = 0; i <= this.size; i++){
    process.stdout.write(`${head.value} → `);    
    head = head.next;
  }  
  process.stdout.write('\n');

  process.stdout.write(`[TAIL] size: ${this.size}   `);
  process.stdout.write(`elements: `);
  
  for(let i = 0; i < this.size; i++){
    process.stdout.write(`${tail.value} → `);        
    tail = tail.prev;
  }  
  process.stdout.write('\n');
}

/** 
 * @param {number} value
 * @return {number}
 * 
 * time:      O(n)
 * space:     O(1)
 */
MyCircularDeque.prototype.getIndex = function(value){
  if(this.isEmpty())
    return false;  

  let cur = this.head;
  let loopCnt = 0;
  
  while(cur){        
    if(cur.value === value)
      return loopCnt;

    cur = cur.next;
    loopCnt += 1;
  }
    
  return false;
}

/** 
 * @param {number} value
 * @return {boolean}
 * 
 * time:      O(1)
 * space:     O(1)
 */
MyCircularDeque.prototype.insertFront = function(value) {
  if(this.isFull())
    return false;
  
  const newNode = new ListNode(value);
  const nextNode = this.head.next;
  
  this.head.next = newNode;
  
  newNode.prev = this.head;
  newNode.next = nextNode;

  nextNode.prev = newNode;    

  this.size += 1;  
  return true;
}

/** 
 * @param {number} value
 * @return {boolean}
 * 
 * time:      O(1)
 * space:     O(1)
 */
MyCircularDeque.prototype.insertLast = function(value) {
  if(this.isFull())
    return false;
    
  const newNode = new ListNode(value);  
  const nextNode = this.tail.prev.next;

  this.tail.prev.next = newNode;
  
  newNode.prev = this.tail.prev;
  newNode.next = nextNode;
  
  nextNode.prev = newNode;

  this.size += 1;  
  return true;
};

/**
 * @return {number} value
 * 
 * time:      O(1)
 * space:     O(1)
 */
MyCircularDeque.prototype.deleteFront = function() {
  if(this.isEmpty())
    return;
  
  const result = this.head.value;
  const nexNode = this.head.next.next;

  this.head.next = nexNode;
  nexNode.prev = this.head;
  
  this.size -= 1;  
  return result;
};

/**
 * @return {number} value
 * 
 * time:      O(1)
 * space:     O(1)
 */
MyCircularDeque.prototype.deleteLast = function() {
  if(this.isEmpty())
    return;
  
  const result = this.head.value;
  const nextNode = this.tail;

  this.tail.next = nextNode;
  nextNode.prev = this.tail;
  
  this.size -= 1;      
  return result;
};

/**
 * @return {number}
 * 
 * time:      O(1)
 * space:     O(1)
 */
MyCircularDeque.prototype.getFront = function() {
  if(this.isEmpty())  
    return -1;
  
  return this.head.value;
};

/**
 * @return {number}
 * 
 * time:      O(1)
 * space:     O(1)
 */
MyCircularDeque.prototype.getRear = function() {
  if(this.isEmpty()) 
    return -1;
  
  return this.tail.value;
};

/**
 * @return {boolean}
 * 
 * time:      O(1)
 * space:     O(1)
 */
MyCircularDeque.prototype.isEmpty = function() {
  return !this.head.value && !this.tail.value;
};

/**
 * @return {boolean}
 * 
 * time:      O(1)
 * space:     O(1)
 */
MyCircularDeque.prototype.isFull = function() {
  return this.size === this.maxSize;
};

module.exports = MyCircularDeque;