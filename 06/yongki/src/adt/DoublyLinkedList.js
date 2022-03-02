const ListNode = require('./ListNode');


var MyDoublyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

MyDoublyLinkedList.prototype.displayDeque = function (pointer) {
  let head = pointer ? pointer : this.head;
  let tail = pointer ? pointer : this.tail;

  process.stdout.write(`[HEAD] size: ${this.size}   `);
  process.stdout.write(`elements: `);

  for (let i = 0; i <= this.size; i++) {
    process.stdout.write(`${head.value} → `);
    head = head.next;
  }
  process.stdout.write('\n');

  process.stdout.write(`[TAIL] size: ${this.size}   `);
  process.stdout.write(`elements: `);

  for (let i = 0; i <= this.size; i++) {
    process.stdout.write(`${tail.value} → `);
    tail = tail.prev;
  }
  process.stdout.write('\n');
}

/** 
 * @param {number} value
 * @return {number}
 * 
 * time:      O(1)
 * space:     O(1)
 */
MyDoublyLinkedList.prototype.findIndex = function (value) {
  if (this.isEmpty())
    return;

  let prev = null;
  let cur = this.head;
  
  let loopCnt = 0;
  while (cur) {
    if (prev && cur.value === value)
      return loopCnt;
    else
      prev = cur;

    cur = cur.next;
    loopCnt += 1;
  }

  return;
}

/** 
 * @param {number} value
 * @return {boolean}
 * 
 * time:      O(1)
 * space:     O(1)
 */
MyDoublyLinkedList.prototype.insertFront = function (value) {
  const node = new ListNode(value);

  if (this.isEmpty()) {
    this.head = node;
    this.tail = node;
  } else {
    node.next = this.head;    
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
MyDoublyLinkedList.prototype.insertLast = function (value) {
  const node = new ListNode(value);  

  if (this.isEmpty()) {
    this.head = node;
    this.tail = node;
  } else {
    node.prev = this.tail;    
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
MyDoublyLinkedList.prototype.deleteFront = function () {
  if (this.isEmpty())
    return;

  const result = this.head.value;

  if (this.size === 1) {
    this.head = null;
    this.tail = null;
  } else {
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
MyDoublyLinkedList.prototype.deleteLast = function () {
  if (this.isEmpty())
    return;

  const result = this.head.value;

  if (this.size === 1) {
    this.head = null;
    this.tail = null;
  } else {
    this.tail = this.tail.next;
    this.tail.next = this.head;
  }

  this.size -= 1;
  return result;
};

/** 
 * @param {number} index
 * @return {void}
 * 
 * time:      O(n)
 * space:     O(1)
 */
MyDoublyLinkedList.prototype.deleteAtIndex = function(index) {        
  // +++ Exception
  if(!index){
    this.size -= 1;
    return this.head = this.head.next;    
  }
    
  if(index > this.lastIndex())
    return;
  
  // +++ Start
  let prev = null;
  let cur = this.head;
  
  let loopCnt = 0;
  while(cur){    
    if(prev && loopCnt === index)
      prev.next = cur.next;      
    else
      prev = cur;
  
    loopCnt += 1;
    cur = cur.next;
  }      
  
  this.size -= 1;  
};

/**
 * @return {number}
 * 
 * time:      O(1)
 * space:     O(1)
 */
MyDoublyLinkedList.prototype.getFront = function () {
  if (this.isEmpty())
    return -1;

  return this.head.value;
};

/**
 * @return {number}
 * 
 * time:      O(1)
 * space:     O(1)
 */
MyDoublyLinkedList.prototype.getRear = function () {
  if (this.isEmpty())
    return -1;

  return this.tail.value;
};

/**
 * @return {boolean}
 * 
 * time:      O(1)
 * space:     O(1)
 */
MyDoublyLinkedList.prototype.isEmpty = function () {
  return !this.head && !this.tail;
};

module.exports = MyDoublyLinkedList;