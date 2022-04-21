const assert = require('assert');
const util = require('util');

const BinarySearchTree = require('../../../ADT/yongki/Tree/BinarySearchTree');


describe('BinarySearchTreeTraversal', () => { 
  describe('nodes', () => {
    const nums = [30, 25, 90, 19, 26, 77, 99, 5];
    const tree = new BinarySearchTree();

    it('insert node', () => {
      for(const num of nums)
        tree.insert(num);      
    })
    
    it('display inorder', () => {
      assert.deepEqual(
        tree.display('inorder'),
        [5, 19, 25, 26, 30, 77, 90, 99]
      )
    })

    it('display preorder', () => {
      assert.deepEqual(
        tree.display('preorder'),
        [30, 25, 19, 5, 26, 90, 77, 99]
      )
    })

    it('display postorder', () => {
      assert.deepEqual(
        tree.display('postorder'),
        [5, 19, 26, 25, 77, 99, 90, 30]
      )
    })

    it('delete node', () => {
      assert.equal(
        tree.delete(90),
        90
      )
    })
    
    it('display levelorder', () => {      
      console.log(util.inspect(tree.display('levelorder'), { showHidden: true, depth: null }))

      assert.deepEqual(
        tree.display('levelorder'),
        [30, 25, 99, 19, 26, 77, 5]
      )
    })
  })
})