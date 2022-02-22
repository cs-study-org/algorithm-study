const util = require('util')
const assert = require('assert')

const MyCircularQueue = require('./circularQueue.js');

/* 
+++ Drive ADT

* size: 1   elements: 3 →
* size: 0   elements:
* size: 1   elements: 5 →

* MyCircularQueue {
    head: <ref *1> ListNode { value: 5, next: [Circular *1] },
    size: 1
  }
*/
var obj = new MyCircularQueue();
obj.enQueue(3)
obj.displayQueue();

obj.deQueue()
obj.displayQueue();

obj.enQueue(5)
obj.displayQueue();

console.log(util.inspect(obj, {showHidden: false, depth: null}))

// +++ Test
assert.equal(obj.Front(), 5);        // pass
assert.equal(obj.Rear(), 5);         // pass
assert.equal(obj.isEmpty(), false);  // pass
