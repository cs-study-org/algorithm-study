const SinglyLinkedList = require('../LinkedList/SinglyLinkedList');
const HashTable = require('./HashTable');


var HashMap = function () {
  HashTable.apply(this, arguments);
  this.maxSize = 100000;
};

HashMap.prototype = Object.create(HashTable.prototype);
HashMap.prototype.constructor = HashMap;

HashMap.prototype._getHash = function (num) {
  return num % this.maxSize;
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 *  
 * time:    O(1)
 * space:   O(1)
 */
HashMap.prototype.put = function (key, value) {
  const bucket = this.getBucket(key);

  if (!bucket) {
    const linkedList = new SinglyLinkedList();

    linkedList.insertFront(value);
    this.table[this._getHash(key)] = linkedList;
  }
  else if (bucket instanceof SinglyLinkedList) {
    const slot = bucket.find(value);

    if (!slot)
      bucket.insertLast(value);
    else {
      const [idx, _] = slot;
      bucket.update(idx, value);
    }
  }

  return null;
};

/** 
 * @param {number} key
 * @return {number}
 * 
 * time:    O(1)
 * space:   O(1)
 */
HashMap.prototype.get = function (key) {
  const bucket = this.getBucket(key);

  if (!bucket)
    return -1;

  let cur = bucket.head;

  while (cur.next)
    cur = cur.next

  return cur.value;
};

/** 
 * @param {number} key
 * @return {void}
 * 
 * time:    O(1)
 * space:   O(1)
 */
HashMap.prototype.remove = function (key) {
  const bucket = this.getBucket(key);

  if (!bucket)
    return null;

  delete this.table[this._getHash(key)];
  return null;
};

module.exports = HashMap; 