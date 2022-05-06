const fs = require('fs');

const CircularDeque = require('../../../../ADT/yongki/Deque/CircularDeque');

/**
 * @param {CircularDeque} circularDeque 
 * @param {Number} rotateCnt 
 * 
 * a as circularDeque
 * b as rotateCnt
 * 
 * time:    O(b)
 * space:   O(1)
 */
function rotateLeft(circularDeque, rotateCnt) {
  while (rotateCnt--) {
    const value = circularDeque.deleteFront();
    circularDeque.insertLast(value);
  }

  circularDeque.deleteFront();
}

/**
 * @param {CircularDeque} circularDeque 
 * @param {Number} rotateCnt 
 * 
 * a as circularDeque
 * b as rotateCnt
 * 
 * time:    O(b)
 * space:   O(1)
 */
function rotateRight(circularDeque, rotateCnt) {
  while (rotateCnt--) {
    const value = circularDeque.deleteLast();
    circularDeque.insertFront(value);
  }

  circularDeque.deleteFront();
}

/**
 * +++ Filename had to be change
 *  a. when your test in window:    /stdin-1021
 *  b. when submit in BackJoon:     /dev/stdin
 * 
 */
(function main() {
  // +++ Processcing
  const [size, _, ...targets] = fs.readFileSync(__dirname + '/stdin-1021')
    .toString()
    .replace('\n', '')
    .split(/\s/)
    .map(each => Number(each));

  const circularDeque = new CircularDeque(size);

  for (let i = 1; i <= size; i++)
    circularDeque.insertLast(i);

  // +++ Start
  let result = 0;

  for (const target of targets) {
    circularDeque.displayDeque();

    const middle = Math.ceil(circularDeque.size / 2);
    const idx = circularDeque.getIndex(target);

    let moveCnt = 0;

    if (middle > idx) {
      moveCnt = idx;
      rotateLeft(circularDeque, moveCnt);
    } else {
      moveCnt = circularDeque.size - idx;
      rotateRight(circularDeque, moveCnt);
    }
    result += moveCnt;
  }

  console.log(result);
})();