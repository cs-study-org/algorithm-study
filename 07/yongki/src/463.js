const assert = require('assert');
const util = require('util');

const Stack = require('../../../ADT/yongki/Stack');

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  const vertexs = grid.length;
  let perimeter = 0;

  (function dfs(source) {
    const stack = new Stack(vertexs);
    const visited = new Array(vertexs).fill(false);

    stack.push(source);
    visited[source] = true;

    while (!stack.isEmpty()) {
      const top = stack.pop();

      visited[top] = true;

      for (let vertex = 0; vertex < vertexs; vertex++) {
        const isNeighbor = grid[top][vertex];

        if (isNeighbor && !visited[vertex]) {
          perimeter += 4;

          if (top < vertexs - 1 && grid[top + 1][vertex])
            perimeter--;

          if (top < vertexs - 1 && grid[top][vertex + 1])
            perimeter--;

          if (top && grid[top - 1][vertex])
            perimeter--;

          if (vertex && grid[top][vertex - 1])
            perimeter--;

          stack.push(vertex);
        }
      }

      console.log(util.inspect(visited, { showHidden: false, depth: null }));
    }

    return;
  })(0);

  return perimeter;
};

(function main() {
  assert.equal(
    islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]),
    16
  );
})();