# 비트 연산

## 문제 리스트

<details>
<summary>1356. Sort Integers by The Number of 1 Bits
  <a href="https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/">👊</a>
</summary>

### 문제 회고

정렬 기준이 2개가 있는 문제였다.

이를 or 연산자로 간단히 정의할 수 있었다.

### 문제 풀이

```js
/**
 * @param {number[]} arr
 * @return {number[]}
 *
 * time:  O(n(log n)²)
 * space: O(1)
 */
var sortByBits = function (arr) {
  return arr.sort(comparatorBits);
};


var comparatorBits = function (a, b) {
  return count1Bits(a) - count1Bits(b)
    || a - b;
}

/*
 * time:  O(log n)
 * space: O(1)
 */
var count1Bits = function (number) {
  let cnt = 0;

  while (number) {
    cnt += number & 1;
    number >>= 1;
  }

  return cnt;
}
```

</details>

<details>
<summary>비밀지도
  <a href="https://school.programmers.co.kr/learn/courses/30/lessons/17681">👊</a>
</summary>

### 문제 풀이

```js
/**
 * time:    O(n²log n)
 * space:   O(n)
 */
function solution(n, arr1, arr2) {
  return arr1
    .map((value, idx) => value | arr2[idx])
    .map(number => convertEncryptCode(number, n));
}

/**
 * time:  O(nlog n) 
 * space: O(n)
 */
function convertEncryptCode(number, n) {
  const result = [];

  let convertCnt = 0;

  while (number) {
    if (number & 1)
      result.push('#');
    else
      result.push(' ');

    number >>= 1;
    convertCnt += 1;
  }  

  while (convertCnt++ < n)
    result.push(' ');

  return result.reverse().join('');
}
```

</details>

## 참고 문헌

[로그 곱 계산](https://www.quora.com/Difference-between-log-2-n-log-log-n-and-log-n-2) ━ *Quora*