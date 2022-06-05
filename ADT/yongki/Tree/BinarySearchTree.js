const util = require('util');

const TreeNode = require('../Tree/TreeNode');
const BinaryTree = require('./BinaryTree');

var BinarySearchTree = function () {
  BinaryTree.apply(this, arguments);
}

BinarySearchTree.prototype = Object.create(BinaryTree.prototype);
BinarySearchTree.prototype.constructor = BinarySearchTree;

/**
 * @param {number} value 
 * @returns {void}
 * 
 * worst time:    O(n)
 * avg time:      O(log n)
 * space:         O(1)
 */
BinarySearchTree.prototype.insert = function (value) {
  var node = new TreeNode(value);

  if (!this.root)
    this.root = node;
  else
    this._insertAtNode(this.root, node);
  return;
}

BinarySearchTree.prototype._insertAtNode = function (node, newNode) {
  if (node.value < newNode.value) {
    if (!node.right)
      node.right = newNode;
    else
      this._insertAtNode(node.right, newNode);
  } else {
    if (!node.left)
      node.left = newNode;
    else
      this._insertAtNode(node.left, newNode);
  }
}

/** 
 * @param {number} value 
 * @returns {boolean}
 */
BinarySearchTree.prototype.search = function (value) {
  return this._searchAtNode(this.root, value) ? true : false;
}

BinarySearchTree.prototype._searchAtNode = function (node, value) {
  if (!node)
    return undefined;

  if (value < node.value)
    return this._searchAtNode(node.right, value)
  else if (value > node.value)
    return this._searchAtNode(node.left, value)
  else
    return node;
}

/**
 * @param {number} value 
 * @returns {boolean}
 * 
 * worst time:    O(n)
 * avg time:      O(log n)
 * space:         O(1)
 */
BinarySearchTree.prototype.delete = function (value) {
  if (!this.root)
    return false;

  this._deleteAtNode(this.root, value);
  return true;
}

BinarySearchTree.prototype._deleteAtNode = function (node, deleteValue) {
  if (node.value > deleteValue)
    node.left = this._deleteAtNode(node.left, deleteValue);
  else if (node.value < deleteValue)
    node.right = this._deleteAtNode(node.right, deleteValue);
  else {
    if (!node.left)
      return node.right;
    else if (!node.right)
      return node.left;

    let deleteNode = node;
    let minNode = node.right;

    while (minNode.left){
      deleteNode = minNode;
      minNode = minNode.left;
    }

    node.value = this._getMinValueAtRightSubtree(node.right);
    node.right = this._deleteAtNode(node.right, node.value);
  }
  return node;
}

/** 
 * @param {TreeNode} node 
 * @returns 
 * 
 * worst time:    O(n)
 * avg time:      O(1)
 * space:         O(1)
 */
BinarySearchTree.prototype._getMinValueAtRightSubtree = function (node) {
  let min = node.value;

  while (node.left) {
    min = node.left.value;
    node = node.left;
  }

  return min;
}

module.exports = BinarySearchTree;