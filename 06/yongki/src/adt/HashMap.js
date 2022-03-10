const MySinglyLinkedList = require('./SinglyLinkedList');
const HashTable = require('./HashTable');


var MyHashMap = function () {
  HashTable.apply(this, arguments);
  this.maxSize = 100000;
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

  if (!bucket) {
    const linkedList = new MySinglyLinkedList();

    linkedList.insertFront(value);
    this.table[this._getHash(key)] = linkedList;
  }
  else if (bucket instanceof MySinglyLinkedList) {
    const slot = bucket.find(value);

    if (!slot)
      bucket.insertLast(value);
    else {
      const [idx, _] = slot;
      bucket.update(idx, value);
    }
  }

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

  let cur = bucket.head;

  while (cur.next)
    cur = cur.next

  return cur.value;
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