var Stack = function (maxSize) {
  this.list = [];
  this.maxSize = maxSize;
}

/** 
 * @param {*} value 
 * @returns 
 */
Stack.prototype.push = function (value) {
  if (this.isFull())
    return;

  return this.list.push(value);
}

Stack.prototype.pop = function () {
  if (this.isEmpty())
    return;

  return this.list.pop();
}

Stack.prototype.peek = function () {
  if (this.isEmpty())
    return;

  return this.list.at(-1);
}

Stack.prototype.size = function () {
  return this.list.length;
}

Stack.prototype.isFull = function () {
  return this.size() === this.maxSize;
}
Stack.prototype.isEmpty = function () {
  return !this.size();
}

module.exports = Stack;