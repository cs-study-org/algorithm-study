var TrieNode = function () {
  this.isEndOfWord = false;
  this.children = {};
}

var Trie = function () {
  this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 * 
 * time:    O(n)
 * space:   O(n)
 */
Trie.prototype.insert = function (word) {
  let node = this.root;  

  for (const char of word) {
    if (!node.children[char])
      node.children[char] = new TrieNode();

    node = node.children[char];
  }
  node.isEndOfWord = true;  
};

/** 
 * @param {string} word
 * @return {boolean}
 * 
 * time:    O(n)
 * space:   O(n)
 */
Trie.prototype.search = function (word) {
  let node = this.root;  

  for (const char of word) {
    if (!node.children[char])
      return false;

    node = node.children[char];
  }
  return node.isEndOfWord;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 * 
 * time:    O(n)
 * space:   O(n)
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.root;  

  for (const char of prefix) {
    if (!node.children[char])
      return false;

    node = node.children[char];
  }
  return true;
};

module.exports = Trie;