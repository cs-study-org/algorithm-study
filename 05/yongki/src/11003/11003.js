const fs = require('fs');

const MyCircularDeque = require('../adt/CircularDeque');


function handleInput(path) {
  return fs.readFileSync(path)
    .toString()
    .replace('\n', '')
    .split(/\s/)
    .map(each => Number(each));
}

/**
 * +++ Filename had to be change
 *  a. when your test in window:    /stdin-11003
 *  b. when submit in BackJoon:     /dev/stdin
 * 
 * +++ Calculate after Start
 * 
 * n as nums
 * limit always less than n. O(1)
 * 
 * time:    O(n)
 *          → for:        O(n)
 *            → while:    O(1)
 * 
 * space:   O(n)
 */
(function main() {
  const [_, limit, ...nums] = handleInput(__dirname + '/stdin-11003');

  // +++ Start
  const circularDeque = new MyCircularDeque(limit);
  const result = [];

  for (const [idx, num] of nums.entries()) {
    while (!circularDeque.isEmpty()
      && circularDeque.getRear() > num)
      circularDeque.deleteLast();

    circularDeque.insertLast(num);

    let curMinIdx = idx - limit + 1
    curMinIdx = curMinIdx <= 0 ? 0 : curMinIdx;
    
    // console.log(nums[curMinIdx], circularDeque.getFront());
    //   circularDeque.deleteFront();

    circularDeque.displayDeque();
    result.push(circularDeque.getFront());

    if (circularDeque.isFull())
      circularDeque.deleteFront();
  }

  console.log(result.join(' '));
})();