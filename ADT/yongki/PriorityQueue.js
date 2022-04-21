const Queue = require('./Queue');

var PriorityQueueNode = function (element, priority, ...args) {
  this.element = element;
  this.priority = priority;
  this.args = args;
}

var PriorityQueue = function () {
  Queue.apply(this, arguments);
}

PriorityQueue.prototype = Object.create(Queue.prototype);
PriorityQueue.prototype.constructor = PriorityQueue;

/** 
 * @param {*} element 
 * @param {number} priority 
 * @returns 
 * 
 * time:    O(n²)
 *          → for         O(n)
 *          →   splice    O(n)
 * 
 * space:   O(n)
 */
PriorityQueue.prototype.enQueue = function (element, priority, ...args) {
  const node = new PriorityQueueNode(element, priority, ...args);
  let isContain = false;

  for (var i = 0; i < this.queue.length; i++) {
    if (this.queue[i].priority > node.priority) {
      this.queue.splice(i, 0, node);
      isContain = true;
      break;
    }
  }

  if (!isContain)
    this.queue.push(node);

  return;
}

module.exports = PriorityQueue;
