const assert = require('assert');
const util = require('util');


const HASH_SIZE = 100;
const HASH_VAL = 19;

var MyHashTable = function () {
  this.table = {};
}

MyHashTable.prototype._getHashCode = function (str) {
  let key = 0;

  for (let i = 0; i < str.length; i++)
    key = (key * HASH_VAL) + str.charCodeAt(i);

  return key % HASH_SIZE;
}

MyHashTable.prototype.add = function (key) {
  if (this.contains(key))
    return;

  return this.table[this._getHashCode(key)] = key;
}

MyHashTable.prototype.contains = function (key) {
  return this.table[this._getHashCode(key)];
}

/** 
 * @param {Array[string]} participant
 * @param {Array[string]} completion
 * @return {string}
 * 
 * a as participant
 * b as completion
 * 
 * time:    O(ab)
 * space:   O(ab)
 */
function solution(participant, completion) {
  const participantTable = new MyHashTable();
  const completionTable = new MyHashTable();

  for (const each of participant) {
    if (!participantTable.add(each))
      return each;
  }

  for (const each of completion)
    completionTable.add(each);

  for (const each of participant) {
    if (!completionTable.contains(each))
      return each;
  }
}

(function main() {
  assert.equal(solution(
    ["leo", "kiki", "eden"],
    ["eden", "kiki"]),
    "leo"
  );
  assert.equal(solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]),
    "vinko"
  );
  assert.equal(solution(
    ["mislav", "stanko", "mislav", "ana"], 
    ["stanko", "ana", "mislav"]),
    "mislav"
  );
})();