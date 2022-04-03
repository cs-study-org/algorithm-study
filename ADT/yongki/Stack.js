var Stack = function (maxSize) {
  this.stack = [];
  this.maxSize = maxSize;
}

/** 
 * @param {*} value 
 * @returns 
 */
Stack.prototype.push = function (value) {
  if (this.isFull())
    return;

  return this.stack.push(value);
}

Stack.prototype.pop = function () {
  if (this.isEmpty())
    return;

  return this.stack.pop();
}

Stack.prototype.peek = function () {
  if (this.isEmpty())
    return;

  return this.stack.at(-1);
}

Stack.prototype.size = function () {
  return this.stack.length;
}

Stack.prototype.isFull = function () {
  return this.size() === this.maxSize;
}

Stack.prototype.isEmpty = function () {
  return !this.size();
}

module.exports = Stack;