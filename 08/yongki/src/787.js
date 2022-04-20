const assert = require('assert');
const util = require('util');

const AdjacencyMatrix = require('../../../ADT/yongki/Graph/AdjacencyMatrix');
const PriorityQueue = require('../../../ADT/yongki/PriorityQueue');

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} stops
 * @return {number}
 * 
 * 
 * time:    O((n - 1)n)
 * space:   O(n² + (n - 1))
 */
var findCheapestPrice = function (n, flights, src, dst, stops) {
  const graph = new AdjacencyMatrix(n);

  for (const [srcNode, dstNode, weight] of flights)
    graph.insertEdge(srcNode, dstNode, weight);

  const queue = new PriorityQueue();
  queue.enQueue(src, 0, stops + 1);

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

    for (const [neighbor, neighborCost] of neighbors.entries()) {
      if(!isFinite(neighborCost) || element === neighbor)
        continue;

      const newCost = priority + neighborCost;      
        
      queue.enQueue(neighbor, newCost, stops - 1);
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