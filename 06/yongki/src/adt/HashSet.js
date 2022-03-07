const MySinglyLinkedList = require('./SinglyLinkedList');
const HashTable = require('./HashTable');


var MyHashSet = function () {
  HashTable.apply(this, arguments);
};

MyHashSet.prototype = Object.create(HashTable.prototype);
MyHashSet.prototype.constructor = MyHashSet;

MyHashSet.prototype._getHash = function (num) {
  return num % this.getHashableSize();
}

/** 
 * @param {number} key
 * @return {void}
 * 
 * time:    O(n)
 * space:   O(1)
 */
MyHashSet.prototype.remove = function (key) {
  const value = this._getBucket(key);  

  if (value instanceof MySinglyLinkedList) {
    const idx = value.findIndex(key);
    value.deleteAtIndex(idx);    
  }

  return;
};

module.exports = MyHashSet;
