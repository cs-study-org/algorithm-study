const assert = require('assert');
const util = require('util');

const AdjacencyList = require('../../../ADT/yongki/Graph/AdjacencyList');

var sortDescendObject = function(object){
  return Object.entries(object).sort(([, a], [, b]) => b - a);
}

var makeTrustCounter = function (trust) {
  const trustCounter = {};

  for (const edge of trust) {
    const trustOne = edge[1];
    trustCounter[trustOne] = trustCounter[trustOne]
      ? trustCounter[trustOne] + 1
      : 1;
  }

  return trustCounter;
}

var isTrustEachother = function (trustCounter) {
  return Object.values(trustCounter).every(each => each === 1)
    && Object.keys(trustCounter).length > 1;
}

var isJudgeExist = function (list) {
  for (let vertex = 1; vertex < list.length; vertex++) {
    if (!list[vertex].size)
      return true
  }

  return false;
}

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 * 
 * a as n
 * b as trust
 * 
 * time:   O(a + b)
 * space:  O(ab)
 */
var findJudge = function (n, trust) {
  const vertexs = n;

  if (!trust.length && vertexs === 1)
    return vertexs;

  const graph = new AdjacencyList();

  for (let vertex = 1; vertex <= vertexs; vertex++)
    graph.insertVertex(vertex);

  for (const edge of trust) {
    const [vertexA, vertexB] = edge;
    graph.insertEdge(vertexA, vertexB);
  }

  const trustCounter = makeTrustCounter(trust);

  if(!trustCounter.length && !trust.length)
    return -1;

  if (!isJudgeExist(graph.list))
    return -1;

  if (isTrustEachother(trustCounter))
    return -1;

  const [maxTrustOne, maxTrustCount] = sortDescendObject(trustCounter)[0];
  const maxTrustWithoutJudge = vertexs - 1;

  if (
    (maxTrustWithoutJudge === maxTrustCount && trust.length === 1)
    || maxTrustWithoutJudge === maxTrustCount
  )
    return Number(maxTrustOne);

  return -1;
};

(function main() {
  assert.equal(
    findJudge(2, [[1, 2]]),
    2
  );

  assert.equal(
    findJudge(3, [[1, 3], [2, 3]]),
    3
  );

  assert.equal(
    findJudge(3, [[1, 3], [2, 3], [3, 1]]),
    -1
  );

  assert.equal(
    findJudge(3, [[1, 2], [2, 3]]),
    -1
  );

  assert.equal(
    findJudge(4, [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]]),
    3
  );

  assert.equal(
    findJudge(4, [[1, 3], [1, 4], [2, 3]]),
    -1
  );

  assert.equal(
    findJudge(1, []),
    1
  );

  assert.equal(
    findJudge(2, []),
    -1
  );

  assert.equal(
    findJudge(4, [[1, 2], [1, 3], [2, 1], [2, 3], [1, 4], [4, 3], [4, 1]]),
    3
  );
})();