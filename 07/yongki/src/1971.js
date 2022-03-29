const assert = require('assert');
const util = require('util');

const AdjacencyList = require('../../../ADT/yongki/Graph/AdjacencyList');


Set.prototype.difference = function (setB) {
  var difference = new Set(this);
  for (var elem of setB) {
    difference.delete(elem);
  }
  return difference;
}

var dfs = function (graph, source, destination, visited) {
  if (!visited.has(source)) {
    visited.add(source);

    const difference = new Set(graph.adjacent(source)).difference(visited);

    // console.log("ADJACENT:", util.inspect(new Set(graph.adjacent(source)), { showHidden: false, depth: null }));
    // console.log("VISITED:", util.inspect(visited, { showHidden: false, depth: null }));
    // console.log("DIFF:", util.inspect(difference, { showHidden: false, depth: null }));

    for (const each of difference)
      dfs(graph, each, destination, visited);
  }  

  if (visited.has(destination))
    return true;

  return false;
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  const vertexs = n - 1;
  const graph = new AdjacencyList();

  for (let vertex = 0; vertex <= vertexs; vertex++)
    graph.insertVertex(vertex);

  for (const edge of edges) {
    const [vertexA, vertexB] = edge;
    graph.insertEdge(vertexA, vertexB, undirected = true);
  }

  // console.log(util.inspect(graph, {showHidden: false, depth: null}));  

  return dfs(graph, source, destination, new Set());
};

(function main() {
  assert.equal(
    validPath(
      3,
      [[0, 1], [1, 2], [2, 0]],
      0,
      2,
    ),
    true
  );

  assert.equal(
    validPath(
      6,
      [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]],
      0,
      5,
    ),
    false
  );
})();