const assert = require('assert');
const util = require('util');

const BinarySearchTree = require('../../../ADT/yongki/Tree/BinarySearchTree');
const Queue = require('../../../ADT/yongki/Queue');


var clusterNodesByLevel = function (node) {
  const result = [];

  var findNode = function (node, level) {
    if (!node.value)
      return;

    if (!result[level])
      result[level] = [];

    result[level].push(node.value);

    if (node.left)
      findNode(node.left, level + 1);

    if (node.right)
      findNode(node.right, level + 1);
  }

  findNode(node, 0);

  return result;
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  if (!root)
    return false;

  const vertexs = [].concat(...clusterNodesByLevel(root)).length;  
  const queue = new Queue(vertexs);
  const visited = new Set();

  function bfs() {
    queue.enQueue(root);

    while (!queue.isEmpty()) {
      const front = queue.Front();

      if (visited.has(k - front.value))
        return true;

      visited.add(front.value);      
      
      if (front.left)
        queue.enQueue(front.left);
      if (front.right)
        queue.enQueue(front.right);

      queue.deQueue();
      // console.log(util.inspect(queue, { showHidden: false, depth: null }));
    }

    return false;
  }

  return bfs();
};

function solutionHelper(values, output) {
  const tree = new BinarySearchTree();

  for (const value of values)
    tree.insert(value);

  // console.log(util.inspect(tree, { showHidden: false, depth: null }));
  return findTarget(tree.root, output);
}

(function main() {
  assert.equal(
    solutionHelper([5, 3, 6, 2, 4, null, 7], 9),
    true
  );

  // assert.equal(
  //   findTarget([5, 3, 6, 2, 4, null, 7], 28),
  //   false
  // );

  // assert.equal(
  //   solutionHelper([2, 1, 3], 3),
  //   true
  // );
})();