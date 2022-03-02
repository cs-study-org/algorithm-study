var MyHashSet = function () {
  this.hashSet = {};
};

MyHashSet.prototype.size = function () {
  return Object.keys(this.hashSet).length || 0;
}

MyHashSet.prototype.getHashCode = function (num) {
  console.log(this.size());
  return num % this.size() || 0;
}

/** 
 * @param {number} key
 * @return {void}
 * 
 * time:    O(1)
 * space:   O(1)
 */
MyHashSet.prototype.add = function (key) {
  console.log('HASH CODE:', this.getHashCode(key));
  return this.hashSet[this.getHashCode(key)] = key;
};

/** 
 * @param {number} key
 * @return {void}
 * 
 * time:    O(1)
 * space:   O(1)
 */
MyHashSet.prototype.remove = function (key) {
  if (!this.contains(key))
    return;

  return delete this.hashSet[this.getHashCode(key)];
};

/** 
 * @param {number} key
 * @return {boolean}
 * 
 * time:    O(1)
 * space:   O(1)
 */
MyHashSet.prototype.contains = function (key) {
  return this.hashSet[this.getHashCode(key)];
};

module.exports = MyHashSet;
