const util = require('util');
const assert = require('assert');

const MyHashSet = require('../src/adt/HashSet');

(function main() {
  const hashSet = new MyHashSet();

  hashSet.add(6);

  hashSet.remove(4);

  hashSet.add(17);

  console.log(util.inspect(hashSet, { showHidden: false, depth: null }));

  assert.equal(hashSet.contains(6), true);
  assert.equal(hashSet.contains(14), false);
})();