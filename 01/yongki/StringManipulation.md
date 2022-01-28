# 문자열 조작

## 문제 리스트

<details>
<summary>125. Valid Palindrome</summary>
<br/>

**이슈**

테스트 코드에서 제출 오류가 있었다.

    Input:    ".," 
    Expected: true
  
테스트 코드의 형태가 Palindrome이 아니라서 테스트 코드 오류가 아닌가 싶다.

**문제 풀이**

    1. 정규표현식을 이용해 문자열을 전처리해준다.

       "A man, a plan, a canal: Panama"

       → "amanaplanacanalpanama"
    
    2. 전처리된 문자열을 문자를 요소로한 배열을 만든다.
        
        [
          'a', 'm', 'a', 'n', 'a',
          'p', 'l', 'a', 'n', 'a',
          'c', 'a', 'n', 'a', 'l',
          'p', 'a', 'n', 'a', 'm',
          'a'
        ]

    3. 루프를 돌 때마다 배열의 앞요소와 뒷요소가 같은지 검사한다.
    4. 검사가 패스된 요소는 제거하여 배열을 재조정한다.

        [
          'm', 'a', 'n', 'a',
          'p', 'l', 'a', 'n', 'a',
          'c', 'a', 'n', 'a', 'l',
          'p', 'a', 'n', 'a', 'm'
        ]

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // +++ Exception
  if(s.length === 1)
    return true;

  if(s.length === 2)
    return false;
  
  // +++ Start
  const antiPattern = /[^a-zA-Z]/g;  
  
  let arr = s.replace(antiPattern, "").toLowerCase().split('');  
  
  while (arr.length > 1){
    const targetA = arr[0];
    const targetB = arr[arr.length - 1];
        
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

**문제 풀이**

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

**이슈**

최근 테스트 케이스의 조건이 추가된듯하다.

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
        → 동일할 시     2번째 문자열
        → 동일할 시     식별자의 문자열

        그 다음에
        → 동일할 시     3번째 문자열의 유무에 따른 우선순위가 추가되었다.

해당 테스트 케이스는 아직 해결중이다.

**문제 풀이**

    1. 주어진 Input을 letter와 digit 타입의 배열로 나눈다.

        [ 'let1 art can', 'let2 own kit dig', 'let3 art zero' ]
        [ 'dig1 8 1 5 1', 'dig2 3 6' ]

    2. letter 타입의 배열은 우선순위 대로 정렬해야한다.
       우선순위에 대한 계산을 수행하는 함수를 만들었다.

        비교대상이 되는 1번째 문자열
        → 동일할 시     2번째 문자열
        → 동일할 시     식별자의 문자열

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
  
  // +++ Start
  let letterArray = [];
  let digitArray = [];

  const pattern = / [0-9]+/;
  
  logs.forEach(each => 
    !each.match(pattern) 
    ? letterArray.push(each)
    : digitArray.push(each)    
  );
  
  letterArray.sort(letterArrayCompareFunction);  
  
  return letterArray.concat(digitArray);
};
```
</details>

<details>
<summary>819. Most Common Word</summary>
<br/>

**문제 풀이**

    Input: 
      paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
      banned    = ["hit"]

    1. Input을 전처리한다.

        [
          'bob',   'hit',  'a',
          'ball',  'the',  'hit',
          'ball',  'flew', 'far',
          'after', 'it',   'was',
          'hit'
        ]

    2. 단어의 빈도 수를 계산한 객체를 만든다.

        {
          bob: 1,
          hit: 3,
          a: 1,
          ball: 2,
          the: 1,
          flew: 1,
          far: 1,
          after: 1,
          it: 1,
          was: 1
        }

    3. banned와 일치한 key를 객체에서 삭제한뒤
       객체에서 제일 큰 value를 같는 key를 반환한다.

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

**문제 3줄 요약**    

    1. Input: strs = ["eat","tea","tan","ate","nat","bat"]       

    2. Output: [["bat"],["nat","tan"],["ate","eat","tea"]]    

**문제 풀이 1/2**

다음은 처음 접근했던 방법이다.

    Input: strs = ["eat","tea","tan","ate","nat","bat"]

    1. strs 배열의 문자열 요소들을 하나의 단락(paragraph)을 만든다. 
       이 단락은 루프를 돌면서 문자열 선별작업의 대상이 되고,
       선별된 문자열은 단락에서 삭제된다.

        "eat,tea,tan,ate,nat,bat"

    2. 루프를 돌 때, Input 배열에서 문자열을 하나 꺼내서
       문자열과 문자열 길이로 정규표현식을 만든다.
       
        [eat]{3}

    3. 정규표현식의 뜻은 [] 안의 알파벳과 일치한 문자열 3개를 추출하는 것이다.
        
        즉, eat, tea, ate를 선별할 수 있다.

    4. 단, 선별한 뒤에 paragraph는 ",,,,"가 남게되어

        Test Case A: ["",""]
        Test Case B: ["","b"]

       위와 같이 빈 문자열을 선별하는 테스트 케이스를 통과할 수 없었다.

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

**문제 풀이 2/2**
따라서, 리트코드 내에서 좋은 풀이를 참고하였다.

    Input: strs = ["eat","tea","tan","ate","nat","bat"]

    1. 배열의 갯수만큼 루프를 도는데,
       배열의 요소 마다 알파벳 순으로 정렬한다.

        aet
        aet
        ant
        aet
        ant
        abt

    2. 정렬된 요소를 key로 두어 관련된 value를 취합한다.
 
        { 
          aet: [ 'eat', 'tea', 'ate' ], 
          ant: [ 'tan', 'nat' ], 
          abt: [ 'bat' ] 
        }

```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {  
  const obj = {};

  for (const str of strs){
    let sortedStr = str.split('').sort().join('');

    if (sortedStr in obj)
      obj[sortedStr].push(str);
    else
      obj[sortedStr] = [str];
  }
  
  return Object.values(obj);  
};
```

</details>

<details>
<summary>5. Longest Palindromic Substring</summary>
<br/>

**문제 풀이**

교재에 나온 투 포인터 방법을 
자바스크립트 버전으로 바꾸고, 약간의 가독성을 높여 사용하였다.

`findLongestPalindrome` 함수 대신
`Math 객체`의 빌트인 메서드 `Math.max`를 사용할 수 있었지만, 
파이썬처럼 `key 옵션`이 지원되지 않아 단순히 수를 돌려주는 메서드였다. 

때문에 함수를 구현해줘야 했다.

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const findLongestPalindrome = (...args) => args.reduce((a, b) => (a.length > b.length) ? a : b);
  
  const helper = (left, right) => {
    let current = '';
    
    while(
        left >= 0
      && right < s.length
      && s[left] === s[right]
    ){
      current = s.substring(left, right + 1);
      left -= 1;
      right += 1;
    }
    
    return current;
  }
  
  // +++ Exception
  if(s.length < 2)
    return s;  
  
  // +++ Start
  let result = '';
    
  for(let i = 0; i < s.length; i++){
    const slow = helper(i, i);
    const fast = helper(i, i + 1);
    
    
    result = findLongestPalindrome(result, slow, fast);
  }
  
  return result;
};
```

루프에 따른 결과값 정리를 해보았다.

    Input: babad

    ==================================

    Ⅰ) i = 0;
        
      ⅰ) left = 0; right = 0; b === b;

          current = b
          left = -1
          right = 1

      ⅱ) left = -1; right = 1;

          quit loop

      slow = b

      ------------------------

      ⅱ) left = 0; right = 1; b !== a;

          quit loop

      fast = ''

      result = max('', b, '')
    
    ==================================

    Ⅱ) i = 1;

      ⅰ) left = 1; right = 1; a === a;

          current = a
          left = 0
          right = 2

      ⅱ) left = 0; right = 2; b === b

          current = bab
          left = -1
          right = 3

      ⅲ) left = -1; right = 3;

          quit loop

      slow = bab

      ------------------------

      ⅱ) left = 1; right = 2;  a !== b

          quit loop

      fast = ''

      result = max(b, bab, '')

    ==================================

    Ⅲ) i = 2;

      slow = aba
      fast = ''

      result = bab

    ==================================

    Ⅳ) i = 3;

      slow = a
      fast = ''

      result = bab
    
    ==================================

    Ⅴ) i = 4;

      slow = d
      fast = ''    

      result = bab

</details>

### 추가 문제

- 테스트 케이스까지 통과한 문제만 시간 복잡도를 기록해두었습니다.
- 각 문제의 👊를 클릭하면 문제로 이동합니다.

<details>
<summary>
  3. Longest Substring Without Repeating Characters
  <a href="https://leetcode.com/problems/longest-substring-without-repeating-characters/">👊</a>
</summary>
<br/>

**문제 풀이 1/2**

처음에 접근한 방법이다.

    Input: s = "abcabcbb"

    1. 문자열의 문자 갯수만큼 루프를 돈다.
    2. 루프를 돌때마다 substring을 찾아내는데,
       현재 문자 인덱스로 부터 다시 자신이 나올때까지 찾아낸다.

        abc
        bca
        cab
        abcbb
        bc
        cbb

    3. 중복되는 문자는 제거하였다.

        abc
        bca
        cab
        bc

    하지만, 다음 테스트케이스를 통과하지 못했다.
    TestCase: s = "cdd"

    substring을 찾아내는 함수가 적절하지 못했다.

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  
  // +++ Exception
  if(new Set(s).size === 1)
    return 1;
  if(!s.length)
    return 0;
  if(s.length < 2)
    return 1;

  // +++ Function
  const findSubstring = (left, right) => {
    let current = '';
    
    while(
      left >= 0
      && right < s.length
      && s[left] !== s[right]
    ){                  
      current = s.substring(left, right + 1);
      right += 1;
    }              

    return current;
  }
  
  const checkRepeatAlpabet = (string) => string !== [...new Set(string.split(''))].join('');
    
  // +++ Start
  let result = 0;
  
  for(let i = 0; i < s.length; i++){    
    const substring = findSubstring(i, i + 1);        
    
    if(checkRepeatAlpabet(substring))
      continue;
    
    result = Math.max(result, substring.length);    
  }
  
  if(!result)
    return s.length;  
  
  return result;
};
```

**문제 풀이 2/2**

따라서, 리트코드의 많은 풀이를 참고했지만, 이를 이해하기 힘들었다.

이 문제는 `sliding window`라는 알고리즘 기법으로 해결한다고 하는데, 관련 easy 난이도를 풀어도 기법을 이해하지 못했다.

`sliding window` 기법은 아니지만 가장 직관적인 풀이를 찾을 수 있었다.

    time:  O(n^2)

      for       → O(n)
        indexOf → O(n)    

    ---------------------

    Input: s = "abcabcbb"

    1. 문자열의 문자 갯수만큼 루프를 돈다.
    2. 현재 루프 순서인 자신의 문자와 동일한 문자를 current에서 찾는다.
       동일한 문자가 없으면 current에 넣는다.

        current = '' → a
        letter = a

    3. 자신의 문자와 동일한 문자를 찾았다면, 
       current에 있던 동일 문자를 제거하고, 자신을 current에 붙인다.

        current = abc
        letter  = a

        current = bc + a = bca
    
    4. 또한, current의 length가 제일 길었을 때 longest에 넣어 기억해둔다.

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {  
  let longest = '';
  let current = '';
  
  for(const letter of s){
    let index = current.indexOf(letter);
    
    if(index > -1){
      if(current.length > longest.length)
        longest = current;
      
      current = current.slice(index + 1) + letter;
    }else
      current += letter;    
  }
  
  if(current.length > longest.length)
    longest = current;
  
  return longest.length;
};
```

</details>

<details>
<summary>
  763. Partition Labels
  <a href="https://leetcode.com/problems/partition-labels/">👊</a>
</summary>
<br/>

    Input: s = "ababcbacadefegdehijhklij"
    Output: [9,7,8]

        "ababcbaca", "defegde", "hijhklij"

    1. 먼저, 문자별 인덱스 위치를 나타내는 객체를 만들었다.
    2. 객체의 value 요소의 길이가 가장 길고, 마지막 인덱스가 가장 큰 숫자일때, 
       그 숫자가 파티션을 나누는 기준이 된다.    

        {
          a: [ 0, 2, 6, 8 ],  // +++
          b: [ 1, 3, 5 ],          
          c: [ 4, 7 ],     

          d: [ 9, 14 ],     
          e: [ 10, 12, 15 ],  // +++
          f: [ 11 ],          
          g: [ 13 ],          
          h: [ 16, 19 ],
          i: [ 17, 22 ],
          j: [ 18, 23 ],     
          k: [ 20 ],
          l: [ 21 ]
        }

    3. 기준을 찾을때까지, 객체에서 문자를 key로 찾아 삭제한다.

        ⅰ)
          {
            d: [ 9, 14 ],
            e: [ 10, 12, 15 ],
            f: [ 11 ],
            g: [ 13 ],
            h: [ 16, 19 ],
            i: [ 17, 22 ],
            j: [ 18, 23 ],
            k: [ 20 ],
            l: [ 21 ]
          }

        ⅱ)
          { 
            h: [ 16, 19 ], 
            i: [ 17, 22 ], 
            j: [ 18, 23 ], 
            k: [ 20 ], 
            l: [ 21 ] 
          }

        ⅲ)
          { 
            k: [ 20 ], 
            l: [ 21 ] 
          }        

    하지만, 파티션을 나누는 기준이 너무 정밀한 나머지 원하는 결과를 얻지 못했다.

        [9,7,13,8]

```js
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {  
  const idxTable = {};
  
  for(const [index, letter] of Object.entries(s)){
    if(letter in idxTable)
      idxTable[letter].push(
        s.indexOf(letter, index)
      );
    else
      idxTable[letter] = [s.indexOf(letter)];
  }    
    
  const result = [];  
  
  while(Object.keys(idxTable).length){
    const letterList = Object.keys(idxTable);
    let splitIdx = 0;
    let maxFreq = 0; 

    for(const letter of letterList){         
      const lastIdx = idxTable[letter].at(-1);
      const letterFreq = idxTable[letter].length;

      if(splitIdx < lastIdx){
        if(maxFreq < letterFreq){
          splitIdx = lastIdx;
          maxFreq = letterFreq;          
        }else if(maxFreq > letterFreq)        
          break;
      }
      
      delete idxTable[letter];            
    }
    
    const recentSplitIdx = result.at(-1);
    result.push(
      recentSplitIdx 
      ? (splitIdx + 1) - recentSplitIdx  
      : splitIdx + 1
    );    
  }    
  return result;
};
```

</details>

<hr/>

## 참고문헌

[Simple Solution at 49. Group Anagrams](https://leetcode.com/problems/group-anagrams/discuss/1720092/Simple-and-Fastest-JavaScript-Solution) -- abagarwa

[Simple Solution at 5. Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/discuss/1022625/Javascript) -- rbwn

[Simple Solution at 3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/discuss/199006/Javascript-Solution-96.10) -- lanceyvang