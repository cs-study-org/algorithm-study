const MySinglyLinkedList = require('./SinglyLinkedList');
const HashTable = require('./HashTable');


var MyHashSet = function () {
  HashTable.apply(this, arguments);
  this.maxSize = 100;   // +++ Need reason
};

MyHashSet.prototype = Object.create(HashTable.prototype);
MyHashSet.prototype.constructor = MyHashSet;

MyHashSet.prototype._getHash = function (num) {
  return num % this.maxSize;
}

/** 
 * @param {number} key
 * @return {boolean}
 * 
 * time:    O(n)
 * space:   O(1)
 */
MyHashSet.prototype.add = function (key) {
  const bucket = this.getBucket(key);

  if (this.contains(key))
    return false;

  if (!bucket) {
    const linkedList = new MySinglyLinkedList();

    linkedList.insertFront(key);
    this.table[this._getHash(key)] = linkedList;    
  }
  else if (bucket instanceof MySinglyLinkedList)
    this.getBucket(key).insertLast(key);

  return true;
};

/** 
 * @param {number} key
 * @return {boolean}
 * 
 * time:    O(n)
 * space:   O(1)
 */
MyHashSet.prototype.remove = function (key) {
  const value = this.getBucket(key);

  if (!value)
    return false;

  const idx = value.findIndex(key);
  value.deleteAtIndex(idx);

  return true;
};

module.exports = MyHashSet;
