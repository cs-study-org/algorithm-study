var Queue = function (maxSize) {
  this.queue = [];
  this.maxSize = maxSize;
}

Queue.prototype.enQueue = function (value) {
  if (this.isFull())
    return false;

  this.queue.push(value);
  return true;
}

Queue.prototype.deQueue = function () {
  if (this.isEmpty())
    return false;

  this.queue.shift();
  return true;
};

Queue.prototype.Front = function() {
  if(this.isEmpty())
    return -1;
  
  return this.queue[0];
};

Queue.prototype.isFull = function () {
  return this.queue.length === this.maxSize;
};

Queue.prototype.isEmpty = function () {
  return !this.queue.length;
};

module.exports = Queue;