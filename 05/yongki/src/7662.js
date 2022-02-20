const util = require('util')
const fs = require('fs');

const MinHeap = require('./MinHeap');
const MaxHeap = require('./MaxHeap');


function handleInput(line, maxHeap, minHeap) {
  const [command, number] = line.split(' ');
  const value = Number(number);

  switch (command) {
    case 'I':
      maxHeap.insert(value);
      minHeap.insert(value);
      break;
    case 'D':
      let syncValue = 0;

      if(value > 0){
        syncValue = maxHeap.extract();
        minHeap.delete(syncValue);
      }else{
        syncValue = minHeap.extract();
        maxHeap.delete(syncValue);
      }
      break;
  }
}

function displayOutput(maxHeap, minHeap) {
  if (!maxHeap.getRoot() || !minHeap.getRoot())
    return console.log('EMPTY');

  console.log(`${maxHeap.getRoot()} ${minHeap.getRoot()}`)
}

/**
 * +++ Filename had to be change
 *  a. when your test in window:    /stdin-7662
 *  b. when submit in BackJoon:     /dev/stdin
 * 
 */
(function main() {
  let [number, ...testCase] = fs.readFileSync(__dirname + '/stdin-7662')
    .toString()
    .replace(/(\r)/gm, '')
    .split('\n');

  let testCaseCnt = Number(number);

  const maxHeap = new MaxHeap();
  const minHeap = new MinHeap();

  while (testCaseCnt--) {
    const lineCnt = Number(testCase[0]);
    const lines = testCase.slice(0, lineCnt + 1);

    for (let i = 1; i < lines.length; i++)
      handleInput(lines[i], maxHeap, minHeap);

    displayOutput(maxHeap, minHeap);

    
    testCase = testCase.slice(lineCnt + 1);
  }
  
  console.log(util.inspect(maxHeap, { showHidden: true, depth: null }))
  console.log(util.inspect(minHeap, { showHidden: true, depth: null }))
})();
