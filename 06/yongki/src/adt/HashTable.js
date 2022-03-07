const MySinglyLinkedList = require('./SinglyLinkedList');


var HashTable = function (size) {
  this.table = {};
  this.maxSize = size % 2 === 1 ? size : size + 1;
}

HashTable.prototype.getHashableSize = function () {
  return this.size() % 2 === 1 ? this.size() : this.size() + 1;
}

HashTable.prototype.size = function () {
  return Object.keys(this.table).length;
}

HashTable.prototype.getBucket = function (key) {
  return this.table[this._getHash(key)];
}

HashTable.prototype._getHash = function (str) {
  let hash = 0;

  for (let i = 0; i < str.length; i++)
    hash = 31 * hash + str.charCodeAt(i);

  return hash % this.maxSize;
}

/** 
 * @param {number} key
 * @return {void}
 * 
 * time:    O(n)
 * space:   O(1)
 */
HashTable.prototype.add = function (key) {
  const bucket = this.getBucket(key);
  
  if (!bucket) {
    const linkedList = new MySinglyLinkedList();

    linkedList.insertFront(key);
    this.table[this._getHash(key)] = linkedList;

    return;
  }

  if (bucket instanceof MySinglyLinkedList)
    return this.getBucket(key).insertLast(key);
};

/** 
 * @param {number} key
 * @return {boolean}
 * 
 * time:    O(n)
 * space:   O(1)
 */
HashTable.prototype.contains = function (key) {
  const value = this.getBucket(key);

  if (
    value instanceof MySinglyLinkedList
    && value.find(key)
  )
    return true;

  return false;
};

module.exports = HashTable;