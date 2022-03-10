const assert = require('assert');
const util = require('util');

const MyHashMap = require('./adt/HashMap');


MyHashMap.prototype._getHash = function (str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++)
    hash = hash + str.charCodeAt(i) * i;

  return hash;
}

/** 
 * @param {Array[string]} clothes
 * @return {number}  
 * 
 * a as clothes
 * b as hashMap buckets
 * 
 * time:    O(a + b)
 * space:   O(a + b)
 */
function solution(clothes) {
  const hashMap = new MyHashMap();
  let result = clothes.length;

  for (const cloth of clothes) {
    const [name, type] = cloth;
    hashMap.put(type, name);
  }

  // console.log(util.inspect(hashMap, { showHidden: false, depth: null }));

  const slotSizes = Object.keys(hashMap.table).map(key => {
    return hashMap.table[key].size;
  })

  return slotSizes.length > 1
    ? result + slotSizes.reduce((acc, value) => acc * value, 1)
    : result;
}

(function main() {
  assert.equal(solution(
    [
      ["yellowhat", "headgear"],
      ["bluesunglasses", "eyewear"],
      ["green_turban", "headgear"]
    ]),
    5
  );
  assert.equal(solution(
    [
      ["crowmask", "face"],
      ["bluesunglasses", "face"],
      ["smoky_makeup", "face"]
    ]),
    3
  );
})();