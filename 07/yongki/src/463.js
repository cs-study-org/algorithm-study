const assert = require('assert');

/**
 * @param {number[][]} grid
 * @return {number}
 * 
 * time:    O(n²)
 * space:   O(1)
 */
var islandPerimeter = function (grid) {
  const rows = grid.length - 1;
  const cols = grid[0].length - 1;

  let perimeter = 0;

  for (let row = 0; row <= rows; row++) {
    for (let col = 0; col <= cols; col++) {
      if (grid[row][col]) {
        perimeter += 4;

        if (row < rows && grid[row + 1][col])
          perimeter--;

        if (col < cols && grid[row][col + 1])
          perimeter--;

        if (row && grid[row - 1][col])
          perimeter--;

        if (col && grid[row][col - 1])
          perimeter--;
      }
    }
  }

  return perimeter;
};

(function main() {
  assert.equal(
    islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]),
    16
  );
})();