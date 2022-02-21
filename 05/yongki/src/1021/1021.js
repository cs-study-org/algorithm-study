const util = require('util');
const fs = require('fs');

const MyCircularDeque = require('../adt/CircularDeque');


function rotateLeft(circularDeque, rotateCnt) {
  while(rotateCnt--){
    const value = circularDeque.deleteFront();
    circularDeque.insertLast(value);
  }
}

function rotateRight(circularDeque, rotateCnt) {
  while(rotateCnt--){
    const value = circularDeque.deleteLast();
    circularDeque.insertFront(value);
  }
}

/**
 * +++ Filename had to be change
 *  a. when your test in window:    /stdin-1021
 *  b. when submit in BackJoon:     /dev/stdin
 * 
 */

/*

1 6 3 2 7 9 8 4 10 5

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

[2, 3, 4, 5, 6, 7, 8, 9, 10]   ← 1

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]   ← 6


 */
(function main() {
  const [size, _, ...targets] = fs.readFileSync(__dirname + '/stdin-1021')
    .toString()
    .replace('\n', '') 
    .split(/\s/)
    .map(each => Number(each));
  
  console.log(util.inspect(targets, { showHidden: true, depth: null }))
  
  const circularDeque = new MyCircularDeque(size);  
  
  for(let i = 1; i <= size; i++){
    circularDeque.insertLast(i);
  }  

  const middle = Math.ceil(targets.length  / 2);
  let calcCnt = 0;

  for(const target of targets){    
    circularDeque.displayDeque();  

    if(circularDeque.getFront() === target){
      circularDeque.deleteFront()

      continue;
    }

    const idx = circularDeque.search(target);    

    middle > idx
      ? rotateLeft(circularDeque, idx) 
      : rotateRight(circularDeque, idx);
    
    calcCnt += 1;      
  }

  console.log(calcCnt);
})();