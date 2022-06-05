var BinaryTree = function () {
  this.root = null;
}

BinaryTree.prototype.display = function (operation) {
  this.result = [];

  switch (operation) {
    case 'inorder':
      this.inorder(this.root);
      break;
    case 'preorder':
      this.preorder(this.root);
      break;
    case 'postorder':
      this.postorder(this.root);
      break;
    case 'levelorder':      
      this.levelorder(this.root, level = 0);
      return [].concat(...this.result);
  }

  return this.result;
}

BinaryTree.prototype.inorder = function (node) {
  if (node) {
    this.inorder(node.left);
    this.result.push(node.value);
    this.inorder(node.right);
  }
}


BinaryTree.prototype.preorder = function (node) {
  if (node) {
    this.result.push(node.value);
    this.preorder(node.left);
    this.preorder(node.right);
  }
}

BinaryTree.prototype.postorder = function (node) {
  if (node) {
    this.postorder(node.left);
    this.postorder(node.right);
    this.result.push(node.value);
  }
}

BinaryTree.prototype.levelorder = function(node, level){  
  if(!node)
    return

  if(!this.result[level])
    this.result[level] = [];

  this.result[level].push(node.value);

  if(node.left)
    this.levelorder(node.left, level + 1);
  if(node.right)
    this.levelorder(node.right, level + 1);
}

module.exports = BinaryTree;