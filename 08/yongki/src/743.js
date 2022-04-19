const assert = require('assert');
const util = require('util');

const AdjacencyMatrix = require('../../../ADT/yongki/Graph/AdjacencyMatrix');
const { findShortestVertexIdx } = require('../../../ADT/yongki/Graph/Dijkstra')

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} src
 * @return {number}
 */
var networkDelayTime = function (times, n, src) {
  const graph = new AdjacencyMatrix(n, startWith = 1);

  for (const [srcNode, destNode, weight] of times)
    graph.insertEdge(srcNode, destNode - 1, weight);

  console.log("GRAPH:", util.inspect(graph, { showHidden: false, depth: null }))

  const srcIdx = src - 1;  
  const distances = graph.adjacent(src);
  const parents = new Array(n).fill(undefined);
  const visited = new Array(n).fill(false);

  visited[srcIdx] = true;

  for (const [neighborIdx, neighbor] of distances.entries()) {
    if (neighborIdx === srcIdx || !isFinite(neighbor))
      continue;

    parents[neighborIdx] = src;
  }

  function findShortestPath() {
    const vtxs = Array.from(graph.matrix.keys());
    let shortestIdx = srcIdx;

    while (vtxs[shortestIdx]) { 
      shortestIdx = findShortestVertexIdx(distances, visited);
      const shortestVtx = vtxs[shortestIdx];

      console.log("SHORTEST:", util.inspect(shortestVtx, { showHidden: false, depth: null }))
      console.log("DISTANCES:", util.inspect(distances, { showHidden: false, depth: null }))
      console.log("PARENTS:", util.inspect(parents, { showHidden: false, depth: null }))
      console.log("VISITED:", util.inspect(visited, { showHidden: false, depth: null }))

      visited[shortestIdx] = true;

      const distance = distances[shortestIdx];
      const neighbors = graph.adjacent(shortestVtx);

      for (const [neighborIdx, neighbor] of neighbors.entries()) {
        if (neighborIdx === srcIdx || !isFinite(neighbor))
          continue;

        const newDistance = distance + neighbor;

        if (!visited[neighborIdx] && distances[neighborIdx] > newDistance) {
          distances[neighborIdx] = newDistance;
          parents[neighborIdx] = shortestVtx
        }
      }
    }    
  }

  findShortestPath();

  console.log("DISTANCES:", util.inspect(distances, { showHidden: false, depth: null }))
  console.log("PARENTS:", util.inspect(parents, { showHidden: false, depth: null }))
  console.log("VISITED:", util.inspect(visited, { showHidden: false, depth: null }))

  const time = Math.max(...distances);
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

  assert.equal(
    networkDelayTime(
      [[1, 2, 1], [2, 1, 3]],
      2,
      2
    ),
    3
  );

  // assert.equal(
  //   networkDelayTime(
  //     [[1, 2, 1], [2, 3, 2]],
  //     3,
  //     1
  //   ),
  //   3
  // );

  // assert.equal(
  //   networkDelayTime(
  //     [[1, 2, 1], [2, 3, 2], [1, 3, 2]],
  //     3,
  //     1
  //   ),
  //   2
  // );
})();