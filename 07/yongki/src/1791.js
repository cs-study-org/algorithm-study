const assert = require('assert');
const util = require('util');

const AdjacencyMatrix = require('../../../ADT/yongki/Graph/AdjacencyMatrix');

function sumArray(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  const vertexs = new Set([].concat(...edges));

  const graph = new AdjacencyMatrix();

  for (const vertex of vertexs)
    graph.insertVertex(vertex);
    
  for (const edge of edges) {
    const [vertexA, vertexB] = edge;
    graph.insertEdge(vertexA, vertexB, undirected = true);
  }

  let center = 0;

  for (const vertex of vertexs)
    center = sumArray(graph.matrix.get(vertex)) > center ? vertex : center;

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