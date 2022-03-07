const ListNode = require('./ListNode');


var MySinglyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

MySinglyLinkedList.prototype.displayLinkedList = function (pointer) {
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

MySinglyLinkedList.prototype.lastIndex = function () {
  return this.size > 0 ? this.size - 1 : 0;
}

/** 
 * @param {number} value
 * @return {boolean}
 * 
 * time:      O(n)
 * space:     O(1)
 */
MySinglyLinkedList.prototype.find = function (value) {
  if (this.isEmpty())
    return;

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
MySinglyLinkedList.prototype.findIndex = function (value) {
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
MySinglyLinkedList.prototype.insertFront = function (value) {
  const node = new ListNode(value);

  if (this.isEmpty())
    this.head = node;
  else {
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
 * time:      O(n)
 * space:     O(1)
 */
MySinglyLinkedList.prototype.insertLast = function (value) {
  const node = new ListNode(value);

  if (this.isEmpty())
    this.head = node;
  else {
    let cur = this.head;

    while (cur.next)
      cur = cur.next;

    cur.next = node;
  }

  this.size += 1;
  return true;
};

/** 
 * @param {number} index
 * @return {void}
 * 
 * time:      O(n)
 * space:     O(1)
 */
MySinglyLinkedList.prototype.deleteAtIndex = function (index) {
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
 * @return {boolean}
 * 
 * time:      O(1)
 * space:     O(1)
 */
MySinglyLinkedList.prototype.isEmpty = function () {
  return !this.head;
};

module.exports = MySinglyLinkedList;