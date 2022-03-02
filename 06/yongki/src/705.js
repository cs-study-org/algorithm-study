const util = require('util');
const assert = require('assert');

const MyHashSet = require('../src/adt/HashSet');

(function main(){
  const hashSet = new MyHashSet();

  hashSet.add(1);
  // console.log(util.inspect(hashSet, {showHidden: false, depth: null}));
  
  hashSet.add(2);
  // console.log(util.inspect(hashSet, {showHidden: false, depth: null}));

  // assert.equal(hashSet.contains(1), true);
  // assert.equal(hashSet.contains(3), false);
})();