const util = require('util')
const DualPriorityQueue = require('./DualPriorityQueue');

/*
+++ Drive ADT

* Input:    I 16
            I -5643
            D -1      +++ getMin
            D 1       +++ getMax
            D 1
            I 123
            D -1

*/
var obj = new DualPriorityQueue();

obj.insert(16);        
/*
+++ Insert process

* [16, -5643]      insert -5643
*                  idx = 1

* [-5643, 16]      swap
*                  idx = 0
*/
obj.insert(-5643);

console.log(util.inspect(obj, {showHidden: true, depth: null}))

obj.extract();
console.log(util.inspect(obj, {showHidden: true, depth: null}))