const Queue = require('./Queue');

var PriorityQueueNode = function (element, priority) {
  this.element = element;
  this.priority = priority;
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
 */
PriorityQueue.prototype.enQueue = function (element, priority) {
  const node = new PriorityQueueNode(element, priority);
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

/** 
 * @returns {PriorityQueueNode} 
 */
PriorityQueue.prototype.deQueue = function () {
  if (this.isEmpty())
    return;

  return this.queue.shift();
}


module.exports = PriorityQueue;
