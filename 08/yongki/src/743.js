const assert = require('assert');
const util = require('util');

const AdjacencyMatrix = require('../../../ADT/yongki/Graph/AdjacencyMatrix');
const Stack = require('../../../ADT/yongki/Stack');

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {  
  const graph = new AdjacencyMatrix(n, startWith = 1);  
  let time = 0;  

  for (const [srcNode, destNode, weight] of times)
    graph.insertEdge(srcNode, destNode - 1, weight);

  console.log(util.inspect(graph, { showHidden: false, depth: null }))  

  function dfs() {
    const stack = new Stack(n);
    const visited = new Array(n).fill(false);

    stack.push(k);
    visited[k - 1] = true;  // vertex start 1, 2...

    while (!stack.isEmpty()) {
      const top = stack.peek();
      stack.pop();
      visited[top - 1] = true;

      const neighbors = graph.adjacent(top);            

      for (const [idx, weight] of neighbors.entries()) {   
        const neighbor = idx + 1;        

        if (!visited[idx]){
          stack.push(neighbor);
          time += weight;
        }        
      }

      console.log(util.inspect(stack, { showHidden: false, depth: null }))
    }
  }

  dfs();

  return time ? time : -1;
};

(function main() {
  // assert.equal(
  //   networkDelayTime(
  //     [[2, 1, 1], [2, 3, 1], [3, 4, 1]],
  //     4,
  //     2
  //   ),
  //   2
  // );

  // assert.equal(
  //   networkDelayTime(
  //     [[1, 2, 1], [2, 1, 3]],
  //     2,
  //     2
  //   ),
  //   3
  // );

  assert.equal(
    networkDelayTime(
      [[1, 2, 1], [2, 3, 2]],
      3,
      1
    ),
    3
  );
})();