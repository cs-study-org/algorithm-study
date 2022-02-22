const ListNode = require('./ListNode');

/**
 * @param {number} k
 */
var MyCircularDeque = function(k) {
  this.head = null;
  this.tail = null;
  this.size = 0;
  this.maxSize = k;
};

MyCircularDeque.prototype.lastIndex = function(){
  return this.size > 0 ? this.size - 1 : 0;
}

MyCircularDeque.prototype.displayDeque = function(pointer){  
  let cur = pointer ? pointer : this.head;
  
  process.stdout.write(`size: ${this.size}   `);
  process.stdout.write(`elements: `);

  for(let i  = 0; i < this.size; i++){
    process.stdout.write(`${cur.value} → `);    
    cur = cur.next;
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

  let loopCnt = 0;
  
  while(this.head){        
    if(this.head.value === value)
      return loopCnt;

    this.head = this.head.next;
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
  
  const node = new ListNode(value);
  
  if(this.isEmpty()){
    this.head = node;
    this.tail = node;
  }else{
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }    
  
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
    
  const node = new ListNode(value);
  
  if(this.isEmpty()){
    this.head = node;
    this.tail = node;
  }else{
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }
  
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

  if(this.size === 1){
    this.head = null;
    this.tail = null;
  }else{
    this.head = this.head.next;
    this.head.prev = this.tail;
  }
  
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

  if(this.size === 1){
    this.head = null;
    this.tail = null;
  }else{
    this.tail = this.tail.next;
    this.tail.next = this.head;
  }  
  
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
  return !this.head;
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