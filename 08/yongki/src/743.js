const assert = require('assert');
const util = require('util');

const AdjacencyMatrix = require('../../../ADT/yongki/Graph/AdjacencyMatrix');
const PriorityQueue = require('../../../ADT/yongki/PriorityQueue');

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

  const queue = new PriorityQueue();
  const distances = graph.adjacent(src);

  queue.enQueue(src, 0);

  // console.log("GRAPH:", util.inspect(graph, { showHidden: false, depth: null }))

  while (!queue.isEmpty()) {
    console.log("Queue:", util.inspect(queue, { showHidden: false, depth: null }))    

    const node = queue.deQueue();
    const curVtx = node.element;
    const curNeighbors = graph.adjacent(curVtx);

    console.log("CUR DISTANCES:", util.inspect(curNeighbors, { showHidden: false, depth: null }));

    for (const [neighborIdx, neighborWeight] of curNeighbors.entries()) {
      const curDistance = distances[neighborIdx];
      const newDistance = distances[curVtx - 1] + neighborWeight;

      if(!isFinite(neighborWeight))
        continue;

      if (curDistance > newDistance) {
        distances[neighborIdx] = newDistance;
        queue.enQueue(neighborIdx, newDistance);
      }
    }
  }

  console.log("DISTANCES:", util.inspect(distances, { showHidden: false, depth: null }));

  let time = 0;
  const vtxs = Array.from(graph.matrix.keys());

  for (const vtx of vtxs) {
    const vtxIdx = vtx - 1;
    const shortestDistance = distances[vtxIdx];

    if (isFinite(shortestDistance) && shortestDistance > time)
      distances[vtxIdx] = time;
  }

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