const util = require('util');

const BinarySearchTree = require('../../../ADT/yongki/Tree/BinarySearchTree');
const Trie = require('../../../ADT/yongki/Trie/Trie');
const HashTable = require('../../../ADT/yongki/HashTable/HashTable');

BinarySearchTree.prototype.insertAtNode = function (node, newNode) {
  if (node.value === newNode.value) {
    return;
  }
  else if (node.value < newNode.value) {
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

describe('search string', () => {
  const wordList = ["rebro", "replay"];

  describe('BST', () => {
    const tree = new BinarySearchTree();

    for (const word of wordList) {
      for (const char of word)
        tree.insert(char);
    }
    // console.log(util.inspect(tree, {showHidden: false, depth: null}))
  });

  describe('Trie', () => {
    const trie = new Trie();

    for (const word of wordList)
      trie.insert(word);

    // console.log(util.inspect(trie, {showHidden: false, depth: null}))
  })

  describe('Hashing', () => {
    const hash = new HashTable();

    for (const word of wordList) {
      for (const char of word) {
        if (!hash.contains(char))
          hash.add(char);
      }
    }

    console.log(util.inspect(hash, { showHidden: false, depth: null }))
  });
});