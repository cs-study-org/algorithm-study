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

/**
 * @param {number} value 
 * @returns 
 * 
 * worst time:    O(n)
 * avg time:      O(log n)
 * space:         O(1)
 */
BinarySearchTree.prototype.delete = function (value) {
  if (!this.root)
    return;

  return this.deleteAtNode(this.root, value)
}

BinarySearchTree.prototype.deleteAtNode = function (node, deleteValue) {
  if (node.value > deleteValue)
    node.left = this.deleteAtNode(node.left, deleteValue);
  else if (node.value < deleteValue)
    node.right = this.deleteAtNode(node.right, deleteValue);
  else {
    if (!node.left)
      return node.right;
    else if (!node.right)
      return node.left;
    else {
      const temp = node.value;
      console.log(util.inspect(node, {showHidden: false, depth: null}))
      
      // const successor = this.getSuccessor(node);
      // node = successor;

      node = node.right;
      console.log(util.inspect(node, {showHidden: false, depth: null}))
      return temp;
    }
  }  
}

BinarySearchTree.prototype.getSuccessor = function (node) {  
  let successorParent = node;
  let successor = node.right;  

  return successor;
}

module.exports = BinarySearchTree;