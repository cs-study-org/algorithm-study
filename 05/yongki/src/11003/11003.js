const fs = require('fs');

const CircularDeque = require('../../../../ADT/yongki/Deque/CircularDeque');


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
 * a as nums
 * b as limit
 * 
 * time:    O(a)
 * b always less than a.      O(1)
 * 
 *          → for:            O(a)
 *            → while:        O(b)
 *            → includes:     O(b)
 * 
 * space:   O(ab)
 *          → result:         O(a)
 *          → for:
 *            → curMinRange:  O(b) 
 */
(function main() {
  const [_, limit, ...nums] = handleInput(__dirname + '/stdin-11003');

  // +++ Start
  const circularDeque = new CircularDeque(limit);
  const result = [];

  for (const [idx, num] of nums.entries()) {
    let curMinIdx = idx - limit + 1;
    curMinIdx = curMinIdx <= 0 ? 0 : curMinIdx;

    const curMinRange = nums.slice(curMinIdx, idx + 1);

    if (circularDeque.getFront() < nums[curMinIdx]
      && !curMinRange.includes(circularDeque.getFront())
    )
      circularDeque.deleteFront();

    while (circularDeque.getRear() >= num)
      circularDeque.deleteLast();

    circularDeque.insertLast(num);

    // circularDeque.displayDeque();
    result.push(circularDeque.getFront());
  }

  console.log(result.join(' '));
})();