const util = require('util');
const fs = require('fs');

function findMinTargets(targets, start, end) {
  const result = [];  

  for(let i = start; i <= end; i++){

    if(i < 0)
      continue;

    result.push(targets[i]);
  }

  return result;
}

/**
 * +++ Filename had to be change
 *  a. when your test in window:    /stdin-11003
 *  b. when submit in BackJoon:     /dev/stdin
 * 
 * +++ Calculate after Start
 * time:    O(n)
 *          → findMin...  O(less n)
 * 
 * space:   O(n)
 */
(function main() {
  const [size, limit, ...targets] = fs.readFileSync(__dirname + '/stdin-11003')
    .toString()
    .replace('\n', '')
    .split(/\s/)
    .map(each => Number(each));

  // +++ Start
  const result = [];

  for (let i = 0; i < size; i++){
    const start = i - limit + 1;
    const end = i;

    const min = Math.min(...findMinTargets(targets, start, end));
    result.push(min);
  }

  console.log(result.join(' '));
})();