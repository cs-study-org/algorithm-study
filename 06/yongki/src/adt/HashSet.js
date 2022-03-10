const MySinglyLinkedList = require('./SinglyLinkedList');
const HashTable = require('./HashTable');


var MyHashSet = function () {
  HashTable.apply(this, arguments);
  this.maxSize = 100000;
};

MyHashSet.prototype = Object.create(HashTable.prototype);
MyHashSet.prototype.constructor = MyHashSet;

MyHashSet.prototype._getHash = function (num) {
  return num % this.maxSize;
}

/** 
 * @param {number} key
 * @return {void}
 * 
 * time:    O(1)
 * space:   O(1)
 */
MyHashSet.prototype.add = function (key) {
  const bucket = this.getBucket(key);

  if (this.contains(key))
    return null;

  if (!bucket) {
    const linkedList = new MySinglyLinkedList();

    linkedList.insertFront(key);
    this.table[this._getHash(key)] = linkedList;
  }
  else if (bucket instanceof MySinglyLinkedList)
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
MyHashSet.prototype.remove = function (key) {
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

module.exports = MyHashSet;
