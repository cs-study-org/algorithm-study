const ListNode = require('../LinkedList/ListNode');


var SinglyLinkedList = function () {
  this.head = null;
  this.size = 0;
}

SinglyLinkedList.prototype.lastIndex = function () {
  return this.size > 0 ? this.size - 1 : 0;
}

/** 
 * @param {number} value
 * @return {boolean}
 * 
 * time:      O(1)
 * space:     O(1)
 */
SinglyLinkedList.prototype.insertFront = function (value) {
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
SinglyLinkedList.prototype.insertLast = function (value) {
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
 * @param {number} value
 * @return {void}
 * 
 * time:      O(n)
 * space:     O(1)
 */
SinglyLinkedList.prototype.delete = function (value) {
  if (this.isEmpty())
    return;

  let prev = null;
  let cur = this.head;

  for (let i = 0; i < this.size; i++) {
    if (prev && cur.value === value)
      prev.next = cur.next;
    else
      prev = cur;

    cur = cur.next;
  }

  this.size -= 1;
}

/** 
 * @param {number} value
 * @return {Array[number, number]}
 * 
 * time:      O(n)
 * space:     O(1)
 */
SinglyLinkedList.prototype.find = function (value) {
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
 * @param {number} index
 * @param {number} value
 * @return {boolean}
 * 
 * time:      O(n)
 * space:     O(1)
 */
SinglyLinkedList.prototype.update = function (index, value) {
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
SinglyLinkedList.prototype.isEmpty = function () {
  return !this.head;
}

module.exports = SinglyLinkedList;