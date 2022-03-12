const assert = require('assert');
const util = require('util');

const MyHashMap = require('./adt/HashMap');


MyHashMap.prototype._getHash = function (str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++)
    hash = hash + str.charCodeAt(i) * i;

  return hash;
}

function clusterPlayByGenre(hashMap, genres) {
  const cluster = [];

  genres.forEach(genre => {
    const result = [];

    const hash = hashMap._getHash(genre);
    let cur = hashMap.table[hash].head;

    while (cur) {
      result.push(cur.value.play)
      cur = cur.next;
    }

    cluster.push({ 'name': genre, 'plays': result });
  })

  return cluster;
}

function sortPlayByCount(a, b) {
  return Math.max(...b.plays) - Math.max(...a.plays);
}

function sortPlayByCountAtGenre(a, b) {
  return b - a;
}

function slicePlayTop2AtGenre(plays) {
  return plays.slice(0, 2)
}

function findOrdinaryIdxAtPlay(hashMap, genre, play) {
  const hash = hashMap._getHash(genre);

  let cur = hashMap.table[hash].head;

  while (cur) {
    if (cur.value.play === play)
      return cur.value.ordinaryIdx;

    cur = cur.next;
  }

  return;
}

/** 
 * @param {Array[string]} genres
 * @param {Array[number]} plays
 * @return {Array[number]}
 * 
 * a as genres | plays
 * b as set genre         (※ b is less than a)
 * c as clustered play    (※ c is less than a)
 * 
 * time:    O(bc + a)
 *          for               → O(a)
 * 
 *          clusterBygenre    → O(b)
 *            forEach           → O(c)
 * 
 *          forEach           → O(b)
 *            sort              → O(c log c)
 * 
 *          map               → O(b)
 *            map               → O(c)
 * 
 * space:   O(a)
 */
function solution(genres, plays) {
  const hashMap = new MyHashMap();

  for (let i = 0; i < genres.length; i++)
    hashMap.put(genres[i], { 'ordinaryIdx': i, 'play': plays[i] });

  const setGenres = new Set(genres);

  const sortedGenres = clusterPlayByGenre(hashMap, setGenres)
    .sort(sortPlayByCount);

  sortedGenres.forEach(each => each.plays.sort(sortPlayByCountAtGenre))
  sortedGenres.forEach(each => each.plays = slicePlayTop2AtGenre(each.plays));  
  
  return [].concat(...sortedGenres.map(genre => {
    return genre.plays.map(play => {
      return findOrdinaryIdxAtPlay(hashMap, genre.name, play)
    })
  }));
}

(function main() {
  assert.deepEqual(solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]),
    [4, 1, 3, 0]
  );
})();