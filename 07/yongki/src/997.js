const assert = require('assert');
const util = require('util');

const AdjacencyMatrix = require('../../../ADT/yongki/Graph/AdjacencyMatrix');

var isJudgeExist = function (trustCounter) {
  return !(
    Object.values(trustCounter).every(each => each === 1)
    && Object.values(trustCounter).length > 1
  );
}

var isJudgeTrustOne = function (trust, graph) {
  for (const edge of trust) {
    const [vertexA, vertexB] = edge;
    const isDirected = graph.matrix.get(vertexA)[vertexB];
    const isUndirected = graph.matrix.get(vertexB)[vertexA];

    if (isDirected && isUndirected)
      return true;
  }

  return false;
}

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 * 
 * time:
 * space:
 */
var findJudge = function (n, trust) {
  const vertexs = n;

  if (!trust.length)
    return vertexs;

  const graph = new AdjacencyMatrix();

  for (let vertex = 1; vertex <= vertexs; vertex++)
    graph.insertVertex(vertex);

  for (const edge of trust) {
    const [vertexA, vertexB] = edge;
    graph.insertEdge(vertexA, vertexB);
  }

  if (isJudgeTrustOne(trust, graph))
    return -1;

  let trustCounter = {};

  for (const edge of trust) {
    const trustOne = edge[1];
    trustCounter[trustOne] = trustCounter[trustOne]
      ? trustCounter[trustOne] + 1
      : 1;
  }

  if (!isJudgeExist(trustCounter))
    return -1;

  return Object.keys(trustCounter)[0];
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
})();