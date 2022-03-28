const assert = require('assert');
const util = require('util');

const AdjacencyList = require('../../../ADT/yongki/Graph/AdjacencyList');

/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  const vertexs = new Set([].concat(...edges));

  const graph = new AdjacencyList();

  for (const vertex of vertexs)
    graph.insertVertex(vertex);

  for (const edge of edges) {
    const [vertexA, vertexB] = edge;
    graph.insertEdge(vertexA, vertexB, undirected = true);
  }

  let center = 0;

  for (const vertex of vertexs)
    center = graph.list[vertex].size > center ? vertex : center;

  return center;
};

(function main() {
  assert.equal(
    findCenter([[1, 2], [2, 3], [4, 2]]),
    2
  );

  assert.equal(
    findCenter([[1, 2], [5, 1], [1, 3], [1, 4]]),
    1
  );
})();