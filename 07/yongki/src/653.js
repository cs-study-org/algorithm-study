const assert = require('assert');
const util = require('util');

const BinarySearchTree = require('../../../ADT/yongki/Tree/BinarySearchTree');

var twoSum = function (nums, target) {
  const memory = {};

  for (let i = 0; i < nums.length; i++) {
    const searchOne = target - nums[i];

    if (searchOne in memory)
      return true;

    memory[nums[i]] = i;
  }

  return false;
}

var clusterNodesByLevel = function (node) {
  const result = [];

  var findNode = function (node, level) {    
    if (!node.val)
      return;

    if (!result[level])
      result[level] = [];

    result[level].push(node.val);    

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

  const cluster = clusterNodesByLevel(root);  
  return cluster.some(nodes => twoSum(nodes, k));
};

function solutionHelper(values, output) {
  const tree = new BinarySearchTree();

  for (const value of values)
    tree.insert(value);  
  
  // console.log(util.inspect(tree, { showHidden: false, depth: null }));
  return findTarget(tree.root, output);
}

(function main() {
  // assert.equal(
  //   solutionHelper([5, 3, 6, 2, 4, null, 7], 9),
  //   true
  // );

  // assert.equal(
  //   findTarget([5, 3, 6, 2, 4, null, 7], 28),
  //   false
  // );

  assert.equal(
    solutionHelper([2, 1, 3], 3),
    true
  );
})();