const assert = require('assert');
const util = require('util');

const AdjacencyMatrix = require('../../../ADT/yongki/Graph/AdjacencyMatrix');

/** 
 * @param {number[]} distances 
 * @param {boolean[]} visited 
 * @returns {number}
 */
function findLongestVertexIdx(distances, visited) {
  let longest = undefined;
  let longestDistance = 0;

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

function sumDelayTime(distances, parents, destIdx) {
  let parent = parents[destIdx];
  let time = distances[destIdx];

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

  // console.log("GRAPH:", util.inspect(graph, { showHidden: false, depth: null }))

  const distances = graph.adjacent(src);
  const parents = new Array(n).fill(undefined);
  const visited = new Array(n).fill(false);

  const srcIdx = src - 1;
  let destIdx = n - 1;

  visited[srcIdx] = true;

  for (const [neighborIdx, neighbor] of distances.entries()) {
    if (neighborIdx === srcIdx || !isFinite(neighbor))
      continue;

    parents[neighborIdx] = src;
  }

  function findLongestPath() {
    const vtxs = Array.from(graph.matrix.keys());
    let longestIdx = srcIdx;

    while (longestIdx !== destIdx) {
      longestIdx = findLongestVertexIdx(distances, visited);
      const longestVtx = vtxs[longestIdx];

      if(!longestVtx)
        return;

      console.log("LONGEST:", util.inspect(longestVtx, { showHidden: false, depth: null }))
      console.log("DISTANCES:", util.inspect(distances, { showHidden: false, depth: null }))
      console.log("PARENTS:", util.inspect(parents, { showHidden: false, depth: null }))
      console.log("VISITED:", util.inspect(visited, { showHidden: false, depth: null }))

      visited[longestIdx] = true;      

      const distance = distances[longestIdx];
      const neighbors = graph.adjacent(longestVtx);                  

      for (const [neighborIdx, neighbor] of neighbors.entries()) {
        if (neighborIdx === srcIdx || !isFinite(neighbor))
          continue;

        const newDistance = distance + neighbor;

        if (!visited[neighborIdx] && distances[neighborIdx] < newDistance) {
          distances[neighborIdx] = newDistance;
          parents[neighborIdx] = longestVtx
        }
      }      
    }
  }  

  findLongestPath();

  console.log("DISTANCES:", util.inspect(distances, { showHidden: false, depth: null }))
  console.log("PARENTS:", util.inspect(parents, { showHidden: false, depth: null }))
  console.log("VISITED:", util.inspect(visited, { showHidden: false, depth: null }))

  const time = sumDelayTime(distances, parents, destIdx);
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