const assert = require('assert');
const util = require('util');

const MyHashMap = require('./adt/HashMap');


MyHashMap.prototype._getHash = function (str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++)
    hash = hash + str.charCodeAt(i) * i;

  return hash;
}

function clusterBygenre(hashMap) {
  return Object.keys(hashMap.table).map(key => {
    const result = [];
    let cur = hashMap.table[key].head;

    while (cur) {
      result.push(cur.value)
      cur = cur.next;
    }
    return result;
  });
}

/** 
 * @param {Array[string]} genres
 * @param {Array[number]} plays
 * @return {Array[number]}
 * 
 * a as genres | plays
 * b as nested array (clusterBygenre)
 * c as concat array (sortedPlays)
 * 
 * time:    O(ac + b)
 *          for               → O(a)
 *          clusterBygenre    → O(a)
 *          map               → O(b)
 *            sort              → O(a log a)
 *          sort              → O(b)
 * 
 *          map               → O(c)
 *            indexOf           → O(a)
 * 
 * space:   O(a)
 */
function solution(genres, plays) {
  const hashMap = new MyHashMap();  

  for (let i = 0; i < genres.length; i++)
    hashMap.put(genres[i], plays[i]);    

  const sortedClusterBygenre = clusterBygenre(hashMap)
    .map(cluster => cluster.sort((a, b) => b - a))
    .sort((a, b) => Math.max(...b) - Math.max(...a))
    .map(cluster => cluster.slice(0, 2));  

  const sortedPlays = [].concat(...sortedClusterBygenre);  

  return sortedPlays.map(play => plays.indexOf(play));
}

(function main() {
  assert.deepEqual(solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]),
    [4, 1, 3, 0]
  );
})();