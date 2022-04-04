const assert = require('assert');
const util = require('util');

const AdjacencyMatrix = require('../../../ADT/yongki/Graph/AdjacencyMatrix');
const Stack = require('../../../ADT/yongki/Stack');


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
 * time:    O(e)
 *          → make graph:     O(e)
 *          → iterate dfs:    O(e)
 * 
 * space:   O(v)
 */
var validPath = function (n, edges, source, destination) {
  const graph = new AdjacencyMatrix();

  for (const [vertexA, vertexB] of edges)
    graph.insertAdjacnetVertex(vertexA, vertexB, undirected = true);

  /**   
   * @returns {boolean}
   * 
   * stack is v but while O(1)?
   * → while's loop always less than v
   * 
   * time:  O(e)
   * space: O(v)
   */
  function dfs() {
    const stack = new Stack(n);
    const visited = new Array(n).fill(false);
    
    stack.push(source);
    visited[source] = true;

    while (!stack.isEmpty()) {      
      const top = stack.peek();      

      if (top === destination)
        return true;
      
      stack.pop();            
      visited[top] = true;            
      
      for (const neighbor of graph.adjacent(top)) {
        if (!visited[neighbor])
          stack.push(neighbor);        
      }      
    }

    return false;
  }

  return dfs();
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