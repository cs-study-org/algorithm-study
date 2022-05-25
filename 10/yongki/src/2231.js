const assert = require('assert');
const util = require('util')

function swap(a, b, list) {
  let temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}

function isOdd(n) {
  return n % 2 == 1;
}

function isEven(n) {
  return n % 2 == 0;
}

function isParity(a, b) {
  return (isOdd(a) && isOdd(b)) || (isEven(a) && isEven(b))
}

/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function (num) {
  const numList = num.toString().split('').map(each => parseInt(each));

  for (let i = 0; i < numList.length; i++) {
    const num = numList[i];

    for (let j = i + 1; j < numList.length; j++) {
      const target = numList[j];
      if (num < target && isParity(num, target))
        swap(i, j, numList)
    }
    console.log(util.inspect(numList, {showHidden: false, depth: null}))
  }

  return parseInt(''.concat(...numList));
};

(function main() {
  // assert.equal(
  //   largestInteger(1234), 3412
  // );

  assert.equal(
    largestInteger(4173), 4731
  );
})();