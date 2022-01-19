# 문자열 조작

<details>
<summary>125. Valid Palindrome</summary>
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
<summary>344. Reverse String</summary>
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
<summary>937. Reorder Data in Log Files</summary>
<br/>

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

    Expected:   [
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

<details>
<summary>819. Most Common Word</summary>
<br/>

자바스크립트에는 `getKeyByValue`와 같이 빌트인 메서드로 있슴직한 메서드들이 없어서 불편하였다.

```javascript
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const getKeyByValue = (obj, value) =>
      Object.keys(obj)
        .find(key => obj[key] === value);
      
    const seperatorPattern = /[\s!"#$%&\'()*+,\-\.\/:;<=>?@\[\]^_`{|}~]/
  
    const words = paragraph
      .toLowerCase()
      .split(seperatorPattern)
      .filter(each => each);    
    
    const wordCounter = {};
    words.forEach(each => { 
      if(!wordCounter[each])
        wordCounter[each] = 0;
      
      return wordCounter[each] += 1;
    });
  
    banned.forEach(each => {      
      if(wordCounter[each])
        delete wordCounter[each]
    });
    
    const maxCount = Math.max(...Object.values(wordCounter));    
    
    return getKeyByValue(wordCounter, maxCount);
};
```
</details>

<details>
<summary>49. Group Anagrams</summary>
<br/>

```javascript
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {  
  const result = [];

  let paragraph = strs.join();  
  
  const breakPattern = ",{" + strs.length + "}";
  const breakCondition = paragraph.match(new RegExp(breakPattern), "g");  
  let loopCount = 0;
  
  while(!breakCondition && loopCount < strs.length){
    const findString = strs[loopCount];    
    
    const pattern = new RegExp(
          "[" + findString + "]" + "{" + findString.length + "}",
          "g"
      );
    
    const matchWords = paragraph.match(pattern);   
        
    if(matchWords)
      result.push(matchWords);      
        
    paragraph = paragraph.replace(pattern, "");    
    loopCount += 1;    
  };
    
  return result;
};
```

아래 테스트 케이스 통과가 안되서 해결중이다.

      Test Case A: ["",""]
      Test Case B: ["","b"]


</details>
<hr/>