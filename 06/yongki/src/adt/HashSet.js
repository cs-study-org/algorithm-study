const HashTable = require('./HashTable');


var MyHashSet = function () {
  HashTable.apply(this, arguments);
};

MyHashSet.prototype = Object.create(HashTable.prototype);
MyHashSet.prototype.constructor = MyHashSet;

MyHashSet.prototype.size = function () {
  return Object.keys(this.table).length || 0;
}

MyHashSet.prototype._getHashCode = function (num) {
  return num % this.size() || 0;
}


/** 
 * @param {number} key
 * @return {void}
 * 
 * time:    O(n)
 * space:   O(1)
 */
MyHashSet.prototype.remove = function (key) {
  const value = this._getValue(key);

  if (
    typeof this._getValue(key) === 'number'
    && value === key
  )
    return delete this.table[this._getHashCode(key)];

  if (value instanceof MyDoublyLinkedList) {
    const idx = value.findIndex(key);
    return value.deleteAtIndex(idx);
  }

  return;
};

module.exports = MyHashSet;
