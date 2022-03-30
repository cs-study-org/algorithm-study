const assert = require('assert');
const util = require('util');

const BinarySearchTree = require('../../../ADT/yongki/Tree/BinarySearchTree');

var twoSum = function(nums, target) {
  const memory = {};
  
  for(let i = 0; i < nums.length; i++){
    const searchOne = target - nums[i];
    
    if(searchOne in memory)
      return true;
    
    memory[nums[i]] = i;    
  }

  return false;
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  const tree = new BinarySearchTree();

  for (const value of root)
    tree.insert(value);

  let treeNodeList = tree.convertPreorderList();
  console.log(util.inspect(treeNodeList, { showHidden: false, depth: null }));

  const rootLevel = 0;
  const clusterByLevel = [treeNodeList[rootLevel]];
  treeNodeList = treeNodeList.slice(rootLevel + 1);

  let degree = 2;

  while (treeNodeList.length) {
    const nodes = treeNodeList.slice(0, degree);
    clusterByLevel.push(nodes);
    
    treeNodeList = treeNodeList.slice(degree);
    degree *= 2;
  }  

  return clusterByLevel.some(nodes => twoSum(nodes, k));
};

(function main() {
  assert.equal(
    findTarget([5, 3, 6, 2, 4, null, 7], 9),
    true
  );

  // assert.equal(
  //   findTarget([5, 3, 6, 2, 4, null, 7], 28),
  //   false
  // );
})();