const util = require('util');
const fs = require('fs');

const MyCircularDeque = require('../adt/CircularDeque');


function rotate(circularDeque, rotateCnt) {
  circularDeque.deleteFront();  
  rotateCnt--;

  while (rotateCnt--) {
    const value = circularDeque.deleteFront();
    circularDeque.insertLast(value);
  }
}

/**
 * +++ Filename had to be change
 *  a. when your test in window:    /stdin-2346
 *  b. when submit in BackJoon:     /dev/stdin
 * 
 */
(function main() {
  const [size, ...targets] = fs.readFileSync(__dirname + '/stdin-2346')
    .toString()
    .replace('\n', '')
    .split(/\s/)
    .map(each => Number(each));

  const circularDeque = new MyCircularDeque();

  for (let i = 0; i < size; i++)
    circularDeque.insertLast(targets[i]);

  const result = [];

  for (const _ of targets) {
    // circularDeque.displayDeque();

    const front = circularDeque.getFront();

    front < 0
      ? rotate(circularDeque, (circularDeque.size - front))
      : rotate(circularDeque, front);
    
    result.push(targets.indexOf(front) + 1);
  }

  console.log(result);
})();