const assert = require('assert');
const util = require('util');

const AdjacencyList = require('../../../ADT/yongki/Graph/AdjacencyList');
const MinHeap = require('../../../ADT/yongki/Heap/MinHeap');

var HeapNode = function (value, cost, stops) {
  this.value = value;
  this.cost = cost;
  this.stops = stops;
}

MinHeap.prototype._bubbleUp = function (idx) {

  while (
    this.getParent(idx) !== undefined
    && this.getParent(idx).cost > this.heap[idx].cost) {
    const parentIdx = this.getParentIdx(idx);

    this.swap(idx, parentIdx);
    idx = parentIdx;
  }
}

MinHeap.prototype._bubbleDown = function (idx) {  

  while (
    this.getLeftChild(idx) !== undefined
    && this.getRightChild(idx) !== undefined
    &&
    (this.getLeftChild(idx).cost < this.heap[idx].cost
      || this.getRightChild(idx).cost < this.heap[idx].cost)
  ) {
    let smallerIdx = this.getLeftChildIdx(idx);

    if (
      this.getRightChild(idx).cost < this.heap[smallerIdx].cost
    )
      smallerIdx = this.getRightChildIdx(idx)

    this.swap(idx, smallerIdx);
    idx = smallerIdx;
  }
}

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} stops
 * @return {number}
 * 
 * v as vertexs
 * e as edges
 * 
 * time:    O(v + (v·e)logv)
 * space:   O(ve + v)
 */
var findCheapestPrice = function (n, flights, src, dst, stops) {
  const graph = new AdjacencyList(n);

  for (let i = 0; i < n; i++)
    graph.insertVertex(i);

  for (const [srcNode, dstNode, weight] of flights)
    graph.insertEdge(srcNode, { dstNode, weight });

  const heap = new MinHeap();

  heap.insert(new HeapNode(src, 0, stops + 1));

  while (heap.size()) {
    console.log("HEAP:", util.inspect(heap, { showHidden: false, depth: null }));
    const node = heap.extract();
    const { value, cost, stops } = Object(node);

    if (value === dst)
      return cost;

    if (!stops)
      continue;

    const neighbors = graph.adjacent(value);

    for (const { dstNode, weight } of neighbors) {
      if (!isFinite(weight) || value === dstNode)
        continue;

      const newCost = cost + weight;

      heap.insert(new HeapNode(dstNode, newCost, stops - 1));
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