const assert = require('assert');
const util = require('util');

const AdjacencyMatrix = require('../../../ADT/yongki/Graph/AdjacencyMatrix');


Set.prototype.difference = function (setB) {
  var difference = new Set(this);
  for (var elem of setB) {
    difference.delete(elem);
  }
  return difference;
}

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
  const graph = new AdjacencyMatrix();

  for (const [vertexA, vertexB] of edges)
    graph.insertAdjacnetVertex(vertexA, vertexB, undirected = true);
  
  // console.log(util.inspect(graph, {showHidden: false, depth: null})); 

  /**
   * @param {AdjacencyList} graph 
   * @param {number} source 
   * @param {Set} visited 
   * @returns {boolean}
   * 
   * time:  O(e)
   * space: O(e)
   */
  return (function dfs(source, visited) {
    if (!visited.has(source)) {
      visited.add(source);

      const neighbors = new Set(graph.adjacent(source));
      const accesibleNeighbors = neighbors.difference(visited);
      
      // console.log("ACCESIBLE NEIGHBOR:", util.inspect(accesibleNeighbors, {showHidden: false, depth: null})); 
      
      for (const neighbor of accesibleNeighbors)
        dfs(neighbor, visited);
    }

    if (visited.has(destination))
      return true;

    return false;
  })(source, new Set());
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