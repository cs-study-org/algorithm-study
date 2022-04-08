const assert = require('assert');
const util = require('util');

const AdjacencyMatrix = require('../../../ADT/yongki/Graph/AdjacencyMatrix');
const Stack = require('../../../ADT/yongki/Stack');

function max() {
  var args = Array.prototype.slice.call(arguments);
  return Math.max.apply(Math, args.filter(function (val) {
    return !isNaN(val);
  }));
}

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const graph = new AdjacencyMatrix(n, startWith = 1);

  for (const [srcNode, destNode, weight] of times)
    graph.insertEdge(srcNode, destNode - 1, weight);

  console.log(util.inspect(graph, { showHidden: false, depth: null }))

  const distances = new Array(n).fill(0);
  const parents = new Array(n).fill(undefined);

  function sumDelayTime(parents) {
    const destNode = parents.indexOf(max(...parents)) + 1;
    let parent = destNode;
    let time = 0;

    while (parent) {
      const distance = distances[parent - 1];

      if (distance)
        time += distance;

      parent = parents[parent - 1];
    }

    return time;
  }

  function dfs() {
    const stack = new Stack(n);
    const visited = new Array(n).fill(false);

    stack.push(k);
    visited[k - 1] = true;

    while (!stack.isEmpty()) {
      const top = stack.peek();
      stack.pop();
      visited[top - 1] = true;

      const neighbors = graph.adjacent(top);

      for (const [idx, weight] of neighbors.entries()) {
        const neighbor = idx + 1;
        const isMoveable = !visited[idx] && weight && isFinite(weight);

        if (isMoveable) {
          stack.push(neighbor);
          distances[idx] += weight;
          parents[idx] = top;
        }
      }

      // console.log(util.inspect(stack, { showHidden: false, depth: null }))
    }
  }
  dfs();

  console.log("DISTANCES:", util.inspect(distances, { showHidden: false, depth: null }))
  console.log("PARENTS:", util.inspect(parents, { showHidden: false, depth: null }))

  const time = sumDelayTime(parents);
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

  // assert.equal(
  //   networkDelayTime(
  //     [[1, 2, 1], [2, 3, 2]],
  //     3,
  //     1
  //   ),
  //   3
  // );

  assert.equal(
    networkDelayTime(
      [[1, 2, 1], [2, 3, 2], [1, 3, 2]],
      3,
      1
    ),
    2
  );
})();