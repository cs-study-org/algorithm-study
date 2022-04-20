const assert = require('assert');
const util = require('util');

const AdjacencyMatrix = require('../../../ADT/yongki/Graph/AdjacencyMatrix');
// const Queue = require('../../../ADT/yongki/Queue');
const PriorityQueue = require('../../../ADT/yongki/PriorityQueue');

var QueueNode = function (element, priority, stops) {
  this.element = element;
  this.priority = priority;
  this.stops = stops;
}

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, stops) {
  const graph = new AdjacencyMatrix(n);

  for (const [srcNode, dstNode, weight] of flights)
    graph.insertEdge(srcNode, dstNode, weight);

  const queue = new PriorityQueue();
  queue.enQueue(src, 0, stops + 1);

  // console.log("GRAPH:", util.inspect(graph, { showHidden: false, depth: null }));

  while (!queue.isEmpty()) {
    console.log("QUEUE:", util.inspect(queue, { showHidden: false, depth: null }));
    const node = queue.poll();
    const { element, priority, args } = Object(node);
    const stops = args[0];
        
    if (element === dst)
      return priority;

    if (!stops)
      continue;

    const neighbors = graph.adjacent(element);    

    for (const [neighborIdx, neighborCost] of neighbors.entries()) {
      const newCost = priority + neighborCost;
      const nextNode = neighborIdx + 1;

      if(!isFinite(neighborCost))
        continue;
        
      queue.enQueue(nextNode, newCost, stops - 1);
    }
  }

  return -1;
};

(function main() {
  assert.equal(
    findCheapestPrice(
      n = 4,
      flights = [
        [0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]
      ],
      src = 0,
      dst = 3,
      stops = 1
    ),
    700
  );

  // assert.equal(
  //   findCheapestPrice(
  //     n = 3,
  //     flights = [
  //       [0, 1, 100], [1, 2, 100], [0, 2, 500]
  //     ],
  //     src = 0,
  //     dst = 2,
  //     stops = 1
  //   ),
  //   200
  // );

  // assert.equal(
  //   findCheapestPrice(
  //     n = 3,
  //     flights = [
  //       [0, 1, 100], [1, 2, 100], [0, 2, 500]
  //     ],
  //     src = 0,
  //     dst = 2,
  //     stops = 0
  //   ),
  //   500
  // );
})();