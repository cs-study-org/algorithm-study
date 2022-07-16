# 비트 연산

## 이론

<details>

Douglas Crockford는 비트 연산자가 Javascript의 단점 중 하나라고 생각한다.

Java에서는 비트 연산자가 정수로 작동합니다.

JavaScript에는 정수(Integer)가 없습니다. Double만 있습니다.

비트 연산자는 정수에서 작동하기 때문에 

Javascript는 피연산자를 정수로 변환하고 비트 연산을 수행한 다음 다시 Double로 변환합니다.

대부분의 언어에서 이러한 연산자는 하드웨어에 매우 가깝고 매우 빠릅니다.

때문에, JavaScript에서는 하드웨어와 거리가 멀고 속도가 매우 느립니다.

즉, JavaScript는 비트 조작에 거의 사용되지 않습니다.

</details>

## 문제 리스트

<details>
<summary>191. Number of 1 Bits
  <a href="https://leetcode.com/problems/number-of-1-bits/">👊</a>
</summary>

### 문제 회고

`>>>` 연산자를 처음 쓰게 되었다.

`>>>`는 시프트 연산 이후 버려진 오른쪽 비트만큼 왼쪽은 0으로 채워지고

`<<`는 시프트 연산 이후 버려진 오른쪽 비트만큼 왼쪽은 부호 비트로 채워져, 정수가 유지된다.

즉, 양수일때는 둘의 결과는 같다. 음수일때는 다르다.

    -9₂                     = 11111111111111111111111111110111

    -9 >>> 2 = 1073741821₂  = 00111111111111111111111111111101

    -9 << 2  = -3₂          = 11111111111111111111111111111101


### 문제 풀이

```js
/**
 * @param {number} n - a positive integer
 * @return {number}
 *
 * time:  O(n)
 * space: O(1)
 */
var hammingWeight = function (n) {  
  let cnt = 0;

  while (n) {
    cnt += n & 1;
    n >>>= 1;
  }

  return cnt;
};
```

</details>

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
<summary>2개 이하로 다른 비트
  <a href="https://school.programmers.co.kr/learn/courses/30/lessons/77885">👊</a>
</summary>

### 문제 회고

문자열 비교를 하지 않고 풀어보았지만, 여전히 테스트케이스에 막힌 풀이다.

```js
/**
 * m as numbers.length
 * n as numberCnt 
 * 
 * time:  O(mn²)
 * space: O(1)
 */
function solution(numbers) {
  return numbers.map(number => {
    if (number % 2 == 0)
      return ++number;

    return oddNumberSolution(number);
  });
}

function oddNumberSolution(number) {
  let numberCnt = number;
  let minBitCnt = Infinity;

  while (++numberCnt) {
    let copiedNumCnt = numberCnt;
    let copiedNum = number;
    let curBitCnt = 0;

    while (copiedNumCnt) {
      if ((copiedNumCnt & 1) ^ (copiedNum & 1))
        curBitCnt += 1;

      copiedNumCnt >>= 1;
      copiedNum >>= 1;
    }

    minBitCnt = Math.min(minBitCnt, curBitCnt);

    if (minBitCnt <= 2)
      break;
  }

  return numberCnt;
}
```

### 문제 풀이

정답자는 문자열 비교를 했으며 특징을 찾았던 것같다.

    Input element:   7₂  = 0111
    Output element: 11₂  = 1011

과 같이 MSB 방향의 두 비트만 swap 되는 특징을 보인다.

```js
function solution(numbers) {
  return numbers.map(number => {
    if (number % 2 == 0)
      return evenNumberSolution(number);

    return oddNumberSolution(number);
  });
}

function evenNumberSolution(number) {
  return ++number;
}

function oddNumberSolution(number) {
  const bits = ['0', ...number.toString(2).split('')];

  for (let i = bits.length - 1; i >= 0; i--) {
    if (bits[i] == '0') {
      bits[i] = '1';
      bits[i + 1] = '0';
      break;
    }
  }  

  return parseInt(bits.join(''), 2);
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

[Javascript 비트 연산에서 단점](https://stackoverflow.com/questions/1908492/unsigned-integer-in-javascript) ━ *Stack overflow*

[Javascript >>> 연산자](https://www.geeksforgeeks.org/what-is-javascript-operator-and-how-to-use-it/) ━ *GeeksforGeeks*

[Simple Solution at ](https://leetcode.com/problems/number-of-1-bits/discuss/427069/Javascript-solution) ━ *Leetcode*