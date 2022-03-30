const TreeNode = require('../Tree/TreeNode');

var BinarySearchTree = function () {
  this.root = null;
}

/**
 * @param {number} value 
 * @returns {void}
 * 
 * time:    O(log n)
 * space:   O(1)
 */
BinarySearchTree.prototype.insert = function (value) {
  var node = new TreeNode(value);

  if (!this.root)
    this.root = node;
  else
    this.insertAtNode(this.root, node);
  return;
}

BinarySearchTree.prototype.insertAtNode = function (node, newNode) {
  if (node.value < newNode.value) {
    if (!node.right)
      node.right = newNode;
    else
      this.insertAtNode(node.right, newNode);
  } else {
    if (!node.left)
      node.left = newNode;
    else
      this.insertAtNode(node.left, newNode);
  }
}

/** 
 * @param {number} value 
 * @returns {boolean}
 */
BinarySearchTree.prototype.search = function (value) {
  return this.searchAtNode(this.root, value) ? true : false;
}

BinarySearchTree.prototype.searchAtNode = function (node, value) {
  if (!node)
    return undefined;

  if (value < node.value)
    return this.searchAtNode(node.right, value)
  else if (value > node.value)
    return this.searchAtNode(node.left, value)
  else
    return node;
}

BinarySearchTree.prototype.convertPreorderList = function () {
  this.result = [];

  this.preorder(this.root);

  return this.result;
}

BinarySearchTree.prototype.preorder = function (node) {
  if (node) {
    this.result.push(node.value);
    this.preorder(node.left);
    this.preorder(node.right);
  }
}

module.exports = BinarySearchTree;