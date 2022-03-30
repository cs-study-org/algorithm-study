const assert = require('assert');
const util = require('util');

const AdjacencyMatrix = require('../../../ADT/yongki/Graph/AdjacencyMatrix');


/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 * 
 * v as vertexs
 * e as edges
 * 
 * time:    O(v + e)
 * space:   O(v + e)
 */
var validPath = function (n, edges, source, destination) {
  const vertexs = n - 1;
  const graph = new AdjacencyMatrix(vertexs);

  for (const edge of edges) {
    const [vertexA, vertexB] = edge;
    graph.insertEdge(vertexA, vertexB, undirected = true);
  }

  // console.log(util.inspect(graph, {showHidden: false, depth: null}));  
  /**
   * @param {AdjacencyList} graph 
   * @param {number} source 
   * @param {Set} visited 
   * @returns 
   * 
   * time:  O(e)
   * space: O(1)
   */
  return (function dfs(source, visited) {
    if (!visited[source]) {
      visited[source] = 1;

      const neighbors = graph.adjacent(source);

      neighbors.forEach((neighbor, index) => {
        if (neighbor && !visited[index])
          dfs(index, visited);
      })
    }

    if (visited[destination])
      return true;

    return false;
  })(source, new Array(n));
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