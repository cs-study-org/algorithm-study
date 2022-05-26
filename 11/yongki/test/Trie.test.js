const util = require('util');
const assert = require('assert');
const Trie = require('../../../ADT/yongki/Trie/Trie');

describe('Trie', () => {
  describe('LeetCode 208', () => {
    const trie = new Trie();

    it('insert', () => {
      trie.insert('apple');
    })

    it('insert', () => {
      trie.insert('appear');      
    })

    it('search', () => {
      assert.equal(
        trie.search('apple'),
        true
      );
    })

    it('search', () => {
      assert.equal(
        trie.search('app'),
        false
      );
    })

    it('startsWith', () => {
      assert.equal(
        trie.startsWith('app'),
        true
      );
    })

    it('insert', () => {
      trie.insert('app');
    })

    it('startsWith', () => {
      assert.equal(
        trie.startsWith('app'),
        true
      );
    })
  });

  describe('Study Example', () => {
    const wordList = ["rebro", "replay", "hi", "high", "algo"];
    const trie = new Trie();

    for(const word of wordList)
      trie.insert(word);    

    it('search', () => {
      assert.equal(
        trie.search('high'),
        true
      );
    })

    it('search', () => {
      assert.equal(
        trie.search('hi'),
        true
      );
    })

    it('search', () => {
      assert.equal(
        trie.search('re'),
        false
      );
    })

    it('startsWith', () => {
      assert.equal(
        trie.startsWith('re'),
        true
      );
    })  
  })
})