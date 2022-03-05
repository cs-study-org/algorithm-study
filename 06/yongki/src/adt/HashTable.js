const util = require('util');

const MyDoublyLinkedList = require('./DoublyLinkedList');


var HashTable = function (size) {
  this.table = {};
  this.maxSize = size;
}

HashTable.prototype._getBucket = function (key) {
  return this.table[this._getHashCode(key)];
}

HashTable.prototype._getHashCode = function (str) {
  let key = 0;

  for (let i = 0; i < str.length; i++)
    key = str.charCodeAt(i);

  return (key % this.maxSize);
}

HashTable.prototype._convertLinkedList = function (key) {
  const doublyLinkedList = new MyDoublyLinkedList();

  const prev = this._getBucket(key);
  doublyLinkedList.insertFront(prev);

  this.table[this._getHashCode(key)] = doublyLinkedList;
}

/** 
 * @param {number} key
 * @return {void}
 * 
 * time:    O(n)
 * space:   O(1)
 */
HashTable.prototype.add = function (key) {
  if (this.contains())
    return;

  if (typeof this._getBucket(key) === ('number' || 'string'))
    this._convertLinkedList(key);

  if (this._getBucket(key) instanceof MyDoublyLinkedList) {
    return this._getBucket(key).insertLast(key);
  }

  return this.table[this._getHashCode(key)] = key;
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
    typeof this._getBucket(key) === ('number' || 'string')
    && value === key
  )
    return this.table[this._getHashCode(key)];

  if (value instanceof MyDoublyLinkedList) {
    return value.find(key);
  }

  return false;
};

module.exports = HashTable;