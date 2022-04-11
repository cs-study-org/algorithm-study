const assert = require('assert');
const util = require('util');

const AdjacencyMatrix = require('../../../ADT/yongki/Graph/AdjacencyMatrix');


function isDestVertex(vertex, graph) {
  const neighbor = graph.adjacent(vertex);
  return neighbor.every(neighbor => neighbor === Infinity || !neighbor);
}

/** 
 * @param {number[]} distances 
 * @param {boolean[]} visited 
 * @returns {number}
 */
function findLongestVertexIdx(distances, visited) {  
  let longest = undefined;
  let longestDistance = 0;  

  console.log("DISTANCES:", util.inspect(distances, { showHidden: false, depth: null }))
  
  for (const [idx, distance] of distances.entries()) {
    const isLongest = isFinite(distance)
      && (!longest || distance > longestDistance);

    if (isLongest && !visited[idx]) {
      longest = idx;
      longestDistance = distance;
    }
  }

  return longest;
}

function sumDelayTime(distances, parents, dest) {
  let parent = parents[dest - 1];
  let time = distances[dest - 1];

  while (parent) {
    let parentIdx = parent - 1;
    const distance = distances[parentIdx];

    if (distance)
      time += distance;

    parent = parents[parentIdx];
  }

  return time;
}

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
  
  const distances = graph.adjacent(src);
  const parents = new Array(n).fill(undefined);
  const visited = new Array(n).fill(false);

  const srcIdx = src - 1;
  let dest = undefined;
  
  visited[srcIdx] = true;

  function findLongestPath() {
    const vtxs = Array.from(graph.matrix.keys());
    let longestIdx = findLongestVertexIdx(distances, visited);
    parents[longestIdx] = src;

    while (vtxs[longestIdx]) {
      visited[longestIdx] = true;
      const longestVtx = vtxs[longestIdx];

      console.log("longestVtx:", util.inspect(longestVtx, { showHidden: false, depth: null }))

      const distance = distances[longestIdx];
      const neighbors = graph.adjacent(longestVtx);
      const isDestVtx = isDestVertex(longestVtx, graph);

      if (isDestVtx) {
        dest = longestVtx;
        break;
      }

      for (const [neighborIdx, neighbor] of neighbors.entries()) {
        if (neighbor === Infinity)
          continue;

        const newDistance = distance + neighbor;

        if (!visited[neighborIdx] && distances[neighborIdx] < newDistance) {
          distances[neighborIdx] = newDistance;
          parents[neighborIdx] = longestVtx
        }
      }

      longestIdx = findLongestVertexIdx(distance, visited, parents);
    }
  }

  console.log("DISTANCES:", util.inspect(distances, { showHidden: false, depth: null }))
  console.log("PARENTS:", util.inspect(parents, { showHidden: false, depth: null }))
  
  findLongestPath();

  console.log("DISTANCES:", util.inspect(distances, { showHidden: false, depth: null }))
  console.log("PARENTS:", util.inspect(parents, { showHidden: false, depth: null }))

  const time = sumDelayTime(distances, parents, dest);
  return time ? time : -1;
};

(function main() {
  assert.equal(
    networkDelayTime(
      [[2, 1, 1], [2, 3, 1], [3, 4, 1]],
      4,
      2
    ),
    2
  );

  // assert.equal(
  //   networkDelayTime(
  //     [[1, 2, 1], [2, 1, 3]],
  //     2,
  //     2
  //   ),
  //   3
  // );

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