const MySinglyLinkedList = require('./SinglyLinkedList');
const HashTable = require('./HashTable');


var MyHashMap = function () {
  HashTable.apply(this, arguments);
  this.maxSize = 100;
};

MyHashMap.prototype = Object.create(HashTable.prototype);
MyHashMap.prototype.constructor = MyHashMap;

MyHashMap.prototype._getHash = function (num) {
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
MyHashMap.prototype.put = function (key, value) {
  const bucket = this.getBucket(key);

  if (this.contains(key)) {
    const [idx, _] = bucket.find(key);
    bucket.update(idx, value);
  }
  else if (!bucket) {
    const linkedList = new MySinglyLinkedList();

    linkedList.insertFront(value);
    this.table[this._getHash(key)] = linkedList;
  }
  else if (bucket instanceof MySinglyLinkedList) // +++ Will be deprecated
    bucket.insertLast(value);

  return null;
};

/** 
 * @param {number} key
 * @return {number}
 * 
 * time:    O(1)
 * space:   O(1)
 */
MyHashMap.prototype.get = function (key) {
  const bucket = this.getBucket(key);

  if (!bucket)
    return -1;

  return bucket.head.value;
};

/** 
 * @param {number} key
 * @return {void}
 * 
 * time:    O(1)
 * space:   O(1)
 */
MyHashMap.prototype.remove = function (key) {
  const bucket = this.getBucket(key);

  if (!bucket)
    return null;

  delete this.table[this._getHash(key)];
  return null;
};

module.exports = MyHashMap;