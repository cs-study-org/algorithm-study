const ListNode = require('./ListNode');


var MyDoublyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

MyDoublyLinkedList.prototype.displayLinkedList = function (pointer) {
  let head = pointer ? pointer : this.head;
  let tail = pointer ? pointer : this.tail;

  process.stdout.write(`[HEAD] size: ${this.size}   `);
  process.stdout.write(`elements: `);

  for (let i = 0; i < this.size; i++) {
    process.stdout.write(`${head.value} → `);
    head = head.next;
  }
  process.stdout.write('\n');

  process.stdout.write(`[TAIL] size: ${this.size}   `);
  process.stdout.write(`elements: `);

  for (let i = 0; i < this.size; i++) {
    process.stdout.write(`${tail.value} → `);
    tail = tail.prev;
  }
  process.stdout.write('\n');
}

MyDoublyLinkedList.prototype.lastIndex = function () {
  return this.size > 0 ? this.size - 1 : 0;
}

/** 
 * @param {number} value
 * @return {boolean}
 * 
 * time:      O(n)
 * space:     O(1)
 */
MyDoublyLinkedList.prototype.find = function (value) {
  if (this.isEmpty())
    return;

  if ((this.getFront() || this.getFront()) === value)
    return true;

  let cur = this.head;

  while (cur.next) {
    if (cur.value === value)
      return true;

    cur = cur.next;
  }

  return false;
}

/** 
 * @param {number} value
 * @return {number}
 * 
 * time:      O(n)
 * space:     O(1)
 */
MyDoublyLinkedList.prototype.findIndex = function (value) {
  if (this.isEmpty())
    return;

  let cur = this.head;

  let loopCnt = 0;
  while (cur.next) {
    if (cur.value === value)
      return loopCnt;

    cur = cur.next;
    loopCnt += 1;
  }

  return cur ? loopCnt : undefined;
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
MyDoublyLinkedList.prototype.insertLast = function (value) {
  const node = new ListNode(value);

  if (this.isEmpty()) {
    this.head = node;
    this.tail = node;
  } else {
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
MyDoublyLinkedList.prototype.deleteFront = function () {
  if (this.isEmpty())
    return;

  const result = this.head.value;
  let newHead = this.head.next;

  if (this.size === 1) {
    this.head = null;
    this.tail = null;
  } else {
    newHead.prev = null;
    this.head = newHead;
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

  const result = this.tail.value;
  let newTail = this.tail.prev;

  if (this.size === 1) {
    this.head = null;
    this.tail = null;
  } else {
    newTail.next = null;
    this.tail = newTail;
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
MyDoublyLinkedList.prototype.deleteAtIndex = function (index) {
  if (!index) {
    this.deleteFront();
    return;
  }

  if (index === this.lastIndex()) {
    this.deleteLast();
    return;
  }

  if (index > this.lastIndex())
    return;

  let prev = null;
  let cur = this.head;

  for (let i = 0; i <= index; i++) {
    if (prev && i === index)
      prev.next = cur.next;
    else
      prev = cur;

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