const SinglyLinkedList = require('../LinkedList/SinglyLinkedList');
const HashTable = require('./HashTable');


var HashSet = function () {
  HashTable.apply(this, arguments);
  this.maxSize = 100000;
};

HashSet.prototype = Object.create(HashTable.prototype);
HashSet.prototype.constructor = HashSet;

HashSet.prototype._getHash = function (num) {
  return num % this.maxSize;
}

/** 
 * @param {number} key
 * @return {void}
 * 
 * time:    O(1)
 * space:   O(1)
 */
HashSet.prototype.add = function (key) {
  const bucket = this.getBucket(key);

  if (this.contains(key))
    return null;

  if (!bucket) {
    const linkedList = new SinglyLinkedList();

    linkedList.insertFront(key);
    this.table[this._getHash(key)] = linkedList;
  }
  else if (bucket instanceof SinglyLinkedList)
    bucket.insertLast(key);

  return null;
};

/** 
 * @param {number} key
 * @return {void}
 * 
 * time:    O(1)
 * space:   O(1)
 */
HashSet.prototype.remove = function (key) {
  const bucket = this.getBucket(key);

  if (!bucket)
    return null;

  const slot = bucket.find(key);

  if (slot){
    const [idx, _] = slot;
    bucket.deleteAtIndex(idx);
  }

  if (!bucket.size)
    delete this.table[this._getHash(key)];

  return null;
};

module.exports = HashSet;