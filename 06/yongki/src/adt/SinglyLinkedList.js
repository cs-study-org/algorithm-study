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
 * @return {Array[number, number]}
 * 
 * time:      O(n)
 * space:     O(1)
 */
MySinglyLinkedList.prototype.find = function (value) {
  if (this.isEmpty())
    return;

  let cur = this.head;

  for (let i = 0; i < this.size; i++) {
    if (cur.value === value)
      return [i, cur.value];

    if (!cur.next)
      return undefined;

    cur = cur.next;
  }

  return undefined;
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
  if (this.isEmpty() || index > this.lastIndex())
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
 * @param {number} index
 * @param {number} value
 * @return {boolean}
 * 
 * time:      O(n)
 * space:     O(1)
 */
MySinglyLinkedList.prototype.update = function (index, value) {
  if (index > this.lastIndex())
    return false;

  let cur = this.head;

  for (i = 0; i <= index; i++) {
    if (i === index) {
      cur.value = value;
      return true;
    }

    if (!cur.next)
      return false;

    cur = cur.next;
  }

  return false;
}

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