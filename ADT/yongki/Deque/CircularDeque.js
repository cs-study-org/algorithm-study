const ListNode = require('../LinkedList/ListNode');

ListNode.prototype.prev = null;

/**
 * @param {number} k
 */
var CircularDeque = function (k) {
  this.head = new ListNode();
  this.tail = new ListNode();

  this.head.prev = this.tail;
  this.head.next = this.tail;

  this.tail.prev = this.head;
  this.tail.next = this.head;

  this.size = 0;
  this.maxSize = k;
};

CircularDeque.prototype.displayDeque = function (pointer) {
  let head = pointer ? pointer : this.head;
  let tail = pointer ? pointer : this.tail;

  process.stdout.write(`[HEAD] size: ${this.size}   `);
  process.stdout.write(`elements: `);

  for (let i = 0; i <= this.size + 1; i++) {
    process.stdout.write(`${head.value} → `);
    head = head.next;
  }
  process.stdout.write('\n');

  process.stdout.write(`[TAIL] size: ${this.size}   `);
  process.stdout.write(`elements: `);

  for (let i = 0; i <= this.size + 1; i++) {
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
CircularDeque.prototype.getIndex = function (value) {
  if (this.isEmpty())
    return false;

  let cur = this.head;
  let loopCnt = -1;

  while (cur) {
    if (cur.value === value)
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
CircularDeque.prototype.insertFront = function (value) {
  if (this.isFull())
    return false;

  const newNode = new ListNode(value);
  const prevNode = this.head;
  const nextNode = this.head.next;

  prevNode.next = newNode;

  newNode.prev = prevNode;
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
CircularDeque.prototype.insertLast = function (value) {
  if (this.isFull())
    return false;

  const newNode = new ListNode(value);
  const prevNode = this.tail.prev;
  const nextNode = this.tail.prev.next;

  prevNode.next = newNode;

  newNode.prev = prevNode;
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
CircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty())
    return;

  const result = this.head.next.value;

  const prevNode = this.head;
  const nextNode = this.head.next.next;

  prevNode.next = nextNode;
  nextNode.prev = prevNode;

  this.size -= 1;
  return result;
};

/**
 * @return {number} value
 * 
 * time:      O(1)
 * space:     O(1)
 */
CircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty())
    return;

  const result = this.tail.prev.value;

  const prevNode = this.tail.prev.prev;
  const nextNode = this.tail.prev.prev.next.next;

  prevNode.next = nextNode;
  nextNode.prev = prevNode;

  this.size -= 1;
  return result;
};

/**
 * @return {number}
 * 
 * time:      O(1)
 * space:     O(1)
 */
CircularDeque.prototype.getFront = function () {
  if (this.isEmpty())
    return -1;

  return this.head.next.value;
};

/**
 * @return {number}
 * 
 * time:      O(1)
 * space:     O(1)
 */
CircularDeque.prototype.getRear = function () {
  if (this.isEmpty())
    return -1;

  return this.tail.prev.value;
};

/**
 * @return {boolean}
 * 
 * time:      O(1)
 * space:     O(1)
 */
CircularDeque.prototype.isEmpty = function () {
  return this.head && !this.head.next.value
    || this.tail && !this.tail.prev.value;
};

/**
 * @return {boolean}
 * 
 * time:      O(1)
 * space:     O(1)
 */
CircularDeque.prototype.isFull = function () {
  return this.size === this.maxSize;
};

module.exports = CircularDeque;