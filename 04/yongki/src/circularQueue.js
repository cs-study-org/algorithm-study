class ListNode {
  constructor(value) {
      this.value = value;
      this.next = null;     
  }
}

var MyCircularQueue = function() {
  this.head = null;
  this.size = 0;
};

// +++ Debug
MyCircularQueue.prototype.lastIndex = function(){
  return this.size > 0 ? this.size - 1 : 0;
}

MyCircularQueue.prototype.displayQueue = function(pointer){  
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
 * @return {boolean}
 * time:    O(n)
 * space:   O(1)
 */
MyCircularQueue.prototype.enQueue = function(value) {
  const node = new ListNode(value);    

  if(this.isEmpty())
    this.head = node;    
  else{
    let cur = this.head;  
    
    for(let i = 0; i < this.lastIndex(); i++)
      cur = cur.next;

    cur.next = node; 
  }
  node.next = this.head;
  
  this.size += 1;
  return true;
};

/**
 * @return {boolean}
 * time:    O(1)
 * space:   O(1)
 */
MyCircularQueue.prototype.deQueue = function() {
  if(this.isEmpty())
    return false;

  if(this.size === 1){
    this.size = 0;
    return this.head = null;
  }

  let prev = this.head;
  let cur = this.head.next;
  
  prev.next = cur && cur.next ? cur.next : null;  
  
  this.size -= 1;  
  return true;    
};

/**
 * @return {number}
 * time:    O(1)
 * space:   O(1)
 */
MyCircularQueue.prototype.Front = function() {
  if(this.isEmpty())
    return -1;
  
  return this.head.value;
};

/**
 * @return {number}
 * time:    O(1)
 * space:   O(1)
 */
MyCircularQueue.prototype.Rear = function() {
  if(this.isEmpty())
    return -1;
  
  let cur = this.head;
  
  for(let i = 0; i < this.lastIndex(); i++)      
    cur = cur.next;

  return cur.value;    
};

/**
 * @return {boolean}
 * time:    O(1)
 * space:   O(1)
 */
MyCircularQueue.prototype.isEmpty = function() {
  return !this.head
};

/**
 * isFull은 필요하지 않아 삭제하였습니다.
 */

module.exports = MyCircularQueue;
