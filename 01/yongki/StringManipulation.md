# 문자열 조작

## 문제 리스트

<details>
<summary>125. Valid Palindrome</summary>
<br/>

### 이슈

테스트 코드에서 제출 오류가 있었다.

    Input:    ".," 
    Expected: true
  
테스트 코드의 형태가 Palindrome이 아니라서 테스트 코드 오류가 아닌가 싶다.

### 문제 풀이

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

### 시·공간 복잡도

time:   O(n)
```
문자열의 길이에 비례하는 antiPattern 변수와 arr 배열을 생성하는데 O(n)의 시간이 소요된다.
이후에는 while문에서 arr배열의 길이가 1 이하가 될 때까지 앞과 뒤에서부터 문자를 비교하면서 반복하므로, while문의 수행 시간은 문자열의 길이에 비례하게 된다.

따라서 이 코드의 시간 복잡도는 O(n)이다.
```
space:  O(n)
```
코드 내에서 가장 많은 공간을 차지하는 것은 arr배열인데, 이 배열의 길이는 문자열의 길이와 같거나 더 작을 수 있다.

따라서 이 코드의 공간 복잡도는 O(n)이다.
```

### 코드

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

### 이슈

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

### 시·공간 복잡도

time:   O(n)
```
s를 spread operator를 사용하여 배열로 변환하고, 그 배열을 reverse() 메소드로 뒤집은 후 반환한다.
spread operator를 사용하여 배열로 변환하는 시간 복잡도는 O(n)이고,
reverse() 메소드는 배열의 원소를 뒤집는 시간 복잡도가 O(n)이다.

따라서 이 코드의 시간 복잡도는 O(n)이다.
```
space:  O(n)
```
s를 spread operator를 사용하여 배열로 변환하는데, 배열의 크기는 s의 길이와 같다.

따라서 이 코드의 공간 복잡도는 O(n)이다.
```

### 코드

```javascript
var reverseString = function(s) {
  return [...s].reverse();
};
```
</details>

<details>
<summary>937. Reorder Data in Log Files</summary>
<br/>

### 이슈

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

### 문제 풀이

    1. 주어진 Input을 letter와 digit 타입의 배열로 나눈다.

        [ 'let1 art can', 'let2 own kit dig', 'let3 art zero' ]
        [ 'dig1 8 1 5 1', 'dig2 3 6' ]

    2. letter 타입의 배열은 우선순위 대로 정렬해야한다.
       우선순위에 대한 계산을 수행하는 함수를 만들었다.

        비교대상이 되는 1번째 문자열
        → 동일할 시     2번째 문자열
        → 동일할 시     식별자의 문자열

### 시·공간 복잡도

time:   O(n log n)
```
이 코드는 입력 배열 logs의 크기에 비례하는 시간복잡도를 갖는다.
logs 배열을 한 번 순회하고,순회 도중 각 로그를 판별하기 위해 문자열의 split, match, localeCompare 등의 함수가 사용되어 시간복잡도가 증가한다.

따라서 이 코드의 시간복잡도는 O(n log n)이라고 할 수 있다.
```
space:  O(n)
```
주어진 배열 logs를 정렬하여 저장하기 위한 letterArray, digitArray 변수의 크기에 따라 달라진다.
배열의 크기는 입력 배열의 크기와 비례하므로

이 코드의 공간복잡도는 O(n)이다.
```

### 코드

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

### 문제 풀이

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

### 시·공간 복잡도

time:   O(n + m log m)
```
n은 문자열의 길이이고, m은 금지된 단어의 수이다.
주요 연산은 문자열을 소문자로 변환하고, 구두점으로 문자열을 분할하며, 금지된 단어를 검색하며, 단어 수를 계산한다.

이 중 문자열 분할은 O(n) 시간이 걸리고,
금지된 단어 검색과 단어 수 계산은 O(m) 시간이 걸리며,
단어 수 계산에 사용되는 해시맵은 최악의 경우 O(n) 시간이 걸린다.
마지막으로 해시맵의 값을 기준으로 최빈값을 계산하므로, 해시맵을 정렬하는 데 O(m log m) 시간이 걸린다.

따라서 총 시간복잡도는 O(n + m log m)이다.
```
space:  O(n + m)
```
금지된 단어를 저장하는 배열과 단어 수를 저장하는 해시맵이 필요하며,
문자열과 단어를 저장하는데 각각 O(n)의 공간이 필요하다.

따라서 총 공간복잡도는 O(n + m)이다.
```

### 코드

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

### 문제 풀이 1/2

다음은 처음 접근했던 방법이다.

    Input: strs = ["eat","tea","tan","ate","nat","bat"]
    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

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

### 시·공간 복잡도 1/2

time:   O(n²m)
```
주어진 문자열들을 모두 하나의 문자열로 합쳐 paragraph 변수에 저장한 후,
배열 strs를 순회하며 각각의 문자열이 그룹화한 결과 배열에 들어갈 수 있는지 검사하고,
그룹화한 결과를 result 배열에 push 한다.

이 때, 각 문자열을 검사하는데 소요되는 시간복잡도는 O(nm)이고,
전체 strs 배열을 순회하는데 O(n)의 시간이 소요되기 때문에,

총 시간복잡도는 O(n²m)이 된다.
```
space:  O(nm)
```
result 배열을 사용하는데, 이 배열의 크기는 최대 strs 배열의 크기만큼 될 수 있으므로, 공간복잡도는 O(nm)이 된다.
단, paragraph 변수에는 strs 배열의 각 원소를 모두 합쳐서 저장하고 있기 때문에,
paragraph 변수가 차지하는 공간복잡도도 고려해야 한다.
이 변수는 모든 문자열을 모두 합친 결과이므로,

공간복잡도는 O(nm)이다.
```

### 코드 1/2

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

### 문제 풀이 2/2
따라서, 리트코드 내에서 좋은 풀이를 참고하였다.

    Input: strs = ["eat","tea","tan","ate","nat","bat"]
    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

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

### 시·공간 복잡도 2/2

time:   O(n)
```
해시맵을 이용하므로 탐색 시간이 O(1)로 상수시간에 가능하며,
strs 배열의 모든 단어를 한 번씩 탐색하므로 

시간복잡도는 O(n)이다.
```
space:  O(n)
```
해시맵의 크기는 strs 배열의 길이 n과 알파벳 길이(26)의 곱인 O(n * 26)이 되며,

결과적으로 공간복잡도도 O(n)이다.
```

### 코드 2/2

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

### 문제 풀이

교재에 나온 투 포인터 방법을 
자바스크립트 버전으로 바꾸고, 약간의 가독성을 높여 사용하였다.

`findLongestPalindrome` 함수 대신
`Math 객체`의 빌트인 메서드 `Math.max`를 사용할 수 있었지만, 
파이썬처럼 `key 옵션`이 지원되지 않아 단순히 수를 돌려주는 메서드였다. 

때문에 함수를 구현해줘야 했다.

### 시·공간 복잡도

time:   O(n²)
```
이 코드는 먼저 s 문자열의 길이에 따라 반복문을 O(n)번 돌게 된다.
그리고 각 반복에서는 helper 함수를 호출하게 되는데, helper 함수의 최악의 시간복잡도는 O(n)이다.
이는 최악의 경우에는 문자열의 양 끝까지 비교해야 하기 때문이다.

그러므로 이 코드의 전체 시간복잡도는 O(n²)이다.
```
space:  O(1)
```
이 코드는 입력값의 크기에 상관없이 일정한 공간만 사용한다.

따라서 공간복잡도는 입력값의 크기에 무관하게 O(1)이다.
```

### 코드

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

각 문제의 👊를 클릭하면 문제로 이동합니다.

<details>
<summary>
  3. Longest Substring Without Repeating Characters
  <a href="https://leetcode.com/problems/longest-substring-without-repeating-characters/">👊</a>
</summary>
<br/>

### 문제 풀이 1/2

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

### 시·공간 복잡도 1/2

time:   O(n²)
```
문자열의 모든 요소에 대해 반복문을 실행하고,
그 다음 각 반복에서 또 다른 반복문을 사용하여 현재 인덱스로부터 시작하여 중복이 없는 가장 긴 부분 문자열을 찾기 때문이다.

따라서 이 코드의 시간복잡도는 O(n²)이다.
```
space:  O(1)
```
문자열의 길이에 상관없이 고정된 공간을 사용하기 때문이다.

따라서 이 코드의 공간복잡도는 O(1)이다.
```

### 코드 1/2

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

### 문제 풀이 2/2

따라서, 리트코드의 많은 풀이를 참고했지만, 이를 이해하기 힘들었다.

이 문제는 `sliding window`라는 알고리즘 기법으로 해결한다고 하는데, 관련 easy 난이도를 풀어도 기법을 이해하지 못했다.

`sliding window` 기법은 아니지만 가장 직관적인 풀이를 찾을 수 있었다.

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

### 시·공간 복잡도 2/2

time:   O(n)
```
문자열 s를 한 글자씩 순회하면서 각 글자를 기준으로 현재 부분 문자열을 만들어나간다.

이 때, 현재 부분 문자열에 글자를 추가하는 경우와 추가하지 않는 경우 두 가지로 나뉘게 된다.
글자를 추가하는 경우에는 현재 부분 문자열의 길이가 1씩 증가하게 되며,
추가하지 않는 경우에는 현재 부분 문자열의 시작 위치가 다음 글자로 옮겨지게 된다.

따라서 이 코드의 시간복잡도는 O(n)이 된다.
```
space:  O(n)
```
이 코드에서 사용되는 추가적인 메모리는 현재 부분 문자열을 저장하기 위한 변수와
결과 부분 문자열을 저장하기 위한 변수이다.

따라서, 이 코드의 공간복잡도는 O(n)이 된다.
```

### 코드 2/2

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

### 문제 풀이 1/2

    Input: s = "ababcbacadefegdehijhklij"
    Output: [9,7,8]

        "ababcbaca", "defegde", "hijhklij"

    1. 먼저, 문자 별 인덱스 위치들을 정리한 객체를 만들었다.
    2. 객체의 
          a. value 배열의 길이가 가장 길고, 
          b, 마지막 인덱스가 가장 큰 숫자일때, 

       그 숫자가 파티션을 나누는 기준이 된다.    

        {
          a: [ 0, 2, 6, 8 ],  // +++
          b: [ 1, 3, 5 ],          
          c: [ 4, 7 ],     

          d: [ 9, 14 ],     
          e: [ 10, 12, 15 ],  // +++
          f: [ 11 ],          
          g: [ 13 ],          
          h: [ 16, 19 ],      // +++ 🤪 기준의 오류 발생 지점
          i: [ 17, 22 ],      
          j: [ 18, 23 ],     
          k: [ 20 ],
          l: [ 21 ]
        }

    3. 기준을 찾을때까지, 객체에서 문자를 key로 찾아 삭제한다.

        [After loop 1]
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

        [After loop 2]
          { 
            h: [ 16, 19 ], 
            i: [ 17, 22 ], 
            j: [ 18, 23 ], 
            k: [ 20 ], 
            l: [ 21 ] 
          }

        [After loop 3]
          { 
            k: [ 20 ], 
            l: [ 21 ] 
          }        

    하지만, 파티션을 나누는 기준이 너무 정밀한 나머지 원하는 결과를 얻지 못했다.

        [9,7,13,8]

### 시·공간 복잡도 1/2

time:   O(n²)
```
indexOf() 메서드는 문자열의 처음부터 끝까지 순회하면서 값을 찾으므로, 문자열의 길이가 n이고 이를 m번 호출하면 전체적인 시간복잡도는 O(nm)이 된다.
이 코드에서는 문자열의 각 문자별로 indexOf를 호출하여 인덱스를 구하고 이를 저장하는 과정이 필요하다.
따라서 문자열의 길이가 n이라면 이 과정에서 최대 n번의 indexOf() 호출이 발생하며,

이는 O(n²)의 시간복잡도를 가진다.
```
space:  O(n)
```
이 코드에서는 문자열 s의 길이에 비례하는 크기의 해시 테이블 idxTable을 생성하므로 O(n)이다. 
result 배열의 크기는 문자열 s에서 나누어진 부분 문자열의 개수에 비례하므로 최대 O(n)이다.

따라서 전체적인 공간복잡도는 O(n)이다.
```

### 코드 1/2

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

### 문제 풀이 2/2

이후 좋은 풀이를 참조하니, 

필자가 처음 접근한 자료구조 단위가 아닌 변수 단위를 활용하니 훨씬 간단한 문제였음을 알 수 있었다.

코드가 직관적이어서 따로 설명이 필요 없을 정도였다.

### 시·공간 복잡도 2/2

time:   O(n²)
```
for 루프 내에서 lastIndexOf를 호출하면서, lastIndexOf의 시간복잡도는 O(n)이다.
for 루프를 n번 반복하므로, 

전체 시간 복잡도는 O(n²)가 된다.
```
space:  O(1)
```
입력 문자열의 길이와 무관하며, 상수 공간만 사용하므로 O(1)이다.
```

### 코드 2/2

```js
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {  
  let maxLabel = 0;
  let recentLabel = 0;
  
  const result = [];
  
  for(let i = 0; i < s.length; i++){        
    maxLabel = Math.max(s.lastIndexOf(s[i]), maxLabel);
    
    if(i === maxLabel){    
      const label = (maxLabel + 1) - recentLabel;
      result.push(label);

      recentLabel = maxLabel + 1;
    }    
  }
  
  return result;
};
```
</details>

<details>
<summary>
  139. Word Break
  <a href="https://leetcode.com/problems/word-break/">👊</a>
</summary>
<br/>

### 문제 풀이
  
    Input:
      s         = "abcd"
      wordDict  = ["a","abc","b","cd"]

    Output: true

    1. wordDict를 문자열 길이에 따라 내림차순 정렬을 해준다.
    2. 문자열 길이가 길수록, 해당 문자열을 s에서 제외했을 시 남은 문자열이 wordDict에 있는지 선별작업을 더 앞당길 수 있기 때문이다.

        sortWordDict  = ["abc","cd", "a", "b"]
        word          = abc
        left          = abcd - abc = d 

          → Output: false

    3. 남은 문자열 안의 문자가 wordDict에 속했을 때 골치가 아프다.

        word          = cd
        left          = ab 

          → 'a' and 'b' is in wordDict
    
    4. 따라서, 이를 탐색하는 n 작업이 뒤따른다.

        Is 'ab' have 'abc'?
        ...
        Is 'ab' have 'a'?
        Is 'ab' have 'b'?

    5. 하지만, 아래 테스트 케이스에서 막혀버렸다.
       디버깅을 해봤지만, 원인을 찾을 수 없었다.

        Testcase: 
          s        = "ccbb"
          wordDict = ["bc","cb"]

### 시·공간 복잡도

time:   O(mn²)
```
최악의 경우 문자열 s의 길이가 n, 단어 사전 wordDict의 단어 개수가 m이라면,
내부의 while 루프를 m번 반복하고 각 루프에서 문자열의 길이가 최대 n만큼 줄어들 수 있다.

따라서 이 코드의 시간복잡도는 O(mn²)이다.
```
space:  O(m)
```
주어진 단어 사전 wordDict의 크기에 비례한다.
단어 사전을 복사한 배열을 만들어서 정렬하기 때문에, 추가적인 O(m)의 공간이 필요하다.
```

### 코드

```js
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const doDescend = (a, b) => b.length - a.length;
  
  const isKeepable = string => wordDict.some(word => string.indexOf(word) > -1);
  
  let keep = '';
  
  return [...wordDict]
    .sort(doDescend)
    .some(word => {                
      let withoutWord = keep ? keep : s; 
    
      while(withoutWord.indexOf(word) > -1)
        withoutWord = withoutWord.replace(word, '');               
      
      if(wordDict.includes(withoutWord) || !withoutWord)
          return true;
    
      if(isKeepable(withoutWord))
          keep = withoutWord;  
    
      return false;
    });  
};
```

</details>

<hr/>

## 참고문헌

[Simple Solution at 49. Group Anagrams](https://leetcode.com/problems/group-anagrams/discuss/1720092/Simple-and-Fastest-JavaScript-Solution) -- abagarwa

[Simple Solution at 5. Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/discuss/1022625/Javascript) -- rbwn

[Simple Solution at 3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/discuss/199006/Javascript-Solution-96.10) -- lanceyvang

[Simple Solution at 763. Partition Labels](https://leetcode.com/problems/partition-labels/discuss/1283020/Easy-to-understand-for-beginners-as-well(runtime-98)) -- lssuseendharlal