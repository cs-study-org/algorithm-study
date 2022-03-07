const MySinglyLinkedList = require('./SinglyLinkedList');


var HashTable = function (size) {
  this.table = {};
  this.maxSize = size % 2 === 1 ? size : size + 1;
}

HashTable.prototype.size = function () {
  return Object.keys(this.table).length;
}

HashTable.prototype._getBucket = function (key) {
  return this.table[this._getHash(key)];
}

HashTable.prototype._getHash = function (str) {
  let hash = 0;

  for (let i = 0; i < str.length; i++)
    hash = 31 * hash + str.charCodeAt(i);

  return hash % this.maxSize;
}

HashTable.prototype._convertLinkedList = function (key) {
  const linkedList = new MySinglyLinkedList();

  const prev = this._getBucket(key);
  linkedList.insertFirst(prev);

  this.table[this._getHash(key)] = linkedList;
}

/** 
 * @param {number} key
 * @return {void}
 * 
 * time:    O(n)
 * space:   O(1)
 */
HashTable.prototype.add = function (key) {
  if (this.contains(key))
    return;

  if (
    typeof this._getBucket(key) === 'number'
    && typeof this._getBucket(key) === 'string'
  )
    this._convertLinkedList(key);

  if (this._getBucket(key) instanceof MySinglyLinkedList)
    return this._getBucket(key).insertLast(key);

  return this.table[this._getHash(key)] = key;
};

/** 
 * @param {number} key
 * @return {boolean}
 * 
 * time:    O(n)
 * space:   O(1)
 */
HashTable.prototype.contains = function (key) {
  const value = this._getBucket(key);

  if (
    typeof value === 'number'
    || typeof value === 'string'
    && value === key
  )
    return this.table[this._getHash(key)];

  if (value instanceof MySinglyLinkedList)
    return value.find(key);

  return false;
};

module.exports = HashTable;