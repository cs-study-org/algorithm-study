const MyDoublyLinkedList = require('./DoublyLinkedList');


var MyHashSet = function () {
  this.hashSet = {};
};

MyHashSet.prototype.size = function () {
  return Object.keys(this.hashSet).length || 0;
}

MyHashSet.prototype._getValue = function (key) {
  return this.hashSet[this._getHashCode(key)];
}

MyHashSet.prototype._convertLinkedList = function (key) {
  const doublyLinkedList = new MyDoublyLinkedList();

  const prev = this._getValue(key);
  doublyLinkedList.insertFront(prev);

  this.hashSet[this._getHashCode(key)] = doublyLinkedList;
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
MyHashSet.prototype.add = function (key) {
  if(this.contains())
    return;

  if (typeof this._getValue(key) === 'number')
    this._convertLinkedList(key);

  if (this._getValue(key) instanceof MyDoublyLinkedList) {
    return this._getValue(key).insertLast(key);
  }

  return this.hashSet[this._getHashCode(key)] = key;
};

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
    return delete this.hashSet[this._getHashCode(key)];

  if (value instanceof MyDoublyLinkedList) {
    const idx = value.findIndex(key);    
    return value.deleteAtIndex(idx);
  }  

  return;
};

/** 
 * @param {number} key
 * @return {boolean}
 * 
 * time:    O(n)
 * space:   O(1)
 */
MyHashSet.prototype.contains = function (key) {
  const value = this._getValue(key);

  if (
    typeof this._getValue(key) === 'number'
    && value === key
  )
    return this.hashSet[this._getHashCode(key)];

  if (value instanceof MyDoublyLinkedList){    
    return value.find(key);  
  }

  return false;
};

module.exports = MyHashSet;
