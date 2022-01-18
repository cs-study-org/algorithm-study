# 문자열 조작

<details>
<summary>1. Valid Palindrome</summary>
<br/>

테스트 코드에서 제출 오류가 있었다.

    Input:    ".," 
    Expected: true
  
테스트 코드의 형태가 Palindrome이 아니라서 테스트 코드 오류가 아닌가 싶다.

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {  
  if(s.length === 1)
    return true;
  
  const antiPattern = /[^a-zA-Z]/g;
  const pattern = /[a-zA-Z]/g;
  
  let arr = s.replace(antiPattern, "").toLowerCase().split(pattern);  
  
  while (arr.length >= 1){
    const targetA = arr.shift();
    const targetB = arr.pop();
    
    if(targetA !== targetB)
      return false;
    
    arr = arr.slice(
      arr.indexOf(targetA) + 1,
      arr.indexOf(targetB) - 1
    );    
  }
  return true;
};
```

</details>
<details>
<summary>2. Reverse String</summary>
<br/>

반환 조건을 보면, 함수 인자 자체를 바꾸라고 나와있다.

때문에 아래와 같이 해결하였지만, 이는 함수 인자의 불변성을 해친다고 한다.

```javascript
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  s.reverse();
};
```
때문에 가급적 얕은 복사를 사용해야 함을 배웠다.

```javascript
var reverseString = function(s) {
  return [...s].reverse();
};
```
</details>

<details>
<summary>3. Reorder Data in Log Files</summary>
<br/>

주석에서 `Start main logic` 부터 확인하면된다.

코드의 윗단은 다 사용되는 함수이다.

```javascript
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {  
  const extractCompareStandard = (target, index) => target.split(" ")[index];
  
  const letterArrayCompareFunction = (a, b) => 
    extractCompareStandard(a, 1)
        .localeCompare(extractCompareStandard(b, 1)) 
      || extractCompareStandard(a, 2)
        .localeCompare(extractCompareStandard(b, 2))
      || extractCompareStandard(a, 0)
          .localeCompare(extractCompareStandard(b, 0));
  
  // +++ Start main logic
  let letterArray = [];
  let digitArray = [];

  const pattern = / [0-9]+/;
  
  // +++ Seperate logs by element type
  logs.forEach(each => 
    !each.match(pattern) 
    ? letterArray.push(each)
    : digitArray.push(each)    
  );
  
  letterArray.sort(letterArrayCompareFunction);  
  
  return letterArray.concat(digitArray);
};
```
최근 테스트 케이스로 인해 조건이 추가된듯하다.

    Input:      [
                  "dig1 8 1 5 1",
                  "let1 art zero can",
                  "dig2 3 6",
                  "let2 own kit dig",
                  "let3 art zero"
                ]

      Expected: [
                  "let3 art zero",
                  "let1 art zero can", // +++ check this!
                  "let2 own kit dig",
                  "dig1 8 1 5 1",
                  "dig2 3 6"
                ]

비교대상이 되는 1번째 문자열 
→ 동일할 시 2번째 문자열
→ 동일할 시 식별자의 문자열
→ 동일할 시 3번째 문자열의 유무에 따라 우선순위가 추가되었다.

해당 테스트 케이스는 아직 해결중이다.
</details>

<hr/>