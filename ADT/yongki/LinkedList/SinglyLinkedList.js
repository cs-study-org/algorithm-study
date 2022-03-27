const ListNode = require('../../../ADT/yongki/LinkedList/ListNode');


var SinglyLinkedList = function () {
  this.head = null;
  this.size = 0;
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
 * @return {boolean}
 * 
 * time:      O(1)
 * space:     O(1)
 */
SinglyLinkedList.prototype.isEmpty = function () {
  return !this.head;
}

module.exports = SinglyLinkedList;