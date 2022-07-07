# 슬라이딩 윈도우

## 이론

<details>
<br/>

대표적으로 배열에서 연이은 k개의 최대합을 구하는 문제에 사용된다.

Brute force의 O(kn)으로 해결하는 문제를 O(n)으로 줄일수 있다.

**Brute force**

```js
function maxSum(arr, k) {
  let max = 0;
  const N = arr.length;

  for (let i = 0; i <= N - k; i++) {
    let sum = 0;
    
    for(let j = 0; j < k; j++)
      sum = sum + arr[i + j];

    max = Math.max(max, sum);
  }  

  return max;
}

(function main() {
  assert.equal(
    maxSum(
      arr = [1, 4, 2, 10, 2, 3, 1, 0, 20],
      k = 4
    ),
    24
  )
})();
```

**슬라이딩 윈도우**

    arr = [1, 4, 2, 10, 2, 3, 1, 0, 20]
    k = 4

    k만큼의 요소를 arr에서 sum하면 14이다.

      [1, 4, 2, 10]

    k인덱스부터 루프를 돈다.

      [2, 3, 1, 0, 20]

    sum은 k만큼의 요소의 합을 유지한다.

      [4, 2, 10, 2]를 유지하기 위해 요소1을 제거

    매 루프마다 max와 sum의 max를 구한다.

```js
function maxSum(arr, k) {
  let max = 0;
  let sum = 0;

  const N = arr.length;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
    max = sum;
  }

  for (let i = k; i < N; i++) {    
    sum += arr[i] - arr[i - k];

    max = Math.max(max, sum);
  }

  return max;
}

(function main() {
  assert.equal(
    maxSum(
      arr = [1, 4, 2, 10, 2, 3, 1, 0, 20],
      k = 4
    ),
    24
  )
})();
```

</details>

## 문제 리스트

<details>
<summary>219. Contains Duplicate II
  <a href="https://leetcode.com/problems/contains-duplicate-ii/">👊</a>
</summary>

### 문제 회고

이전 해결했던 이력이 있었다.

다만 슬라이딩 윈도우를 푼것인지도 몰랐다.

이론에서 다룬 형태외에도 Map을 사용한 형태도 해당됨을 알게되었다.

### 문제 풀이

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 *
 * time:  O(n)
 * space: O(k)
 */
var containsNearbyDuplicate = function (nums, k) {
  const window = new Map();

  for (const [idx, num] of nums.entries()) {
    if (
      window.has(num)
      && Math.abs(idx - window.get(num)) <= k
    )
      return true;

    window.set(num, idx);
  }
  return false;
};
```

</details>

<details>
<summary>643. Maximum Average Subarray I
  <a href="https://leetcode.com/problems/maximum-average-subarray-i/submissions/">👊</a>
</summary>

### 문제 회고

이론에서 다룬 형태와 같아 고민없이 풀 수 있었다.

자바스크립트에서 `Math.avg`는 없는것도 알 수 있었다.

### 문제 풀이

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 *
 * time:  O(n)
 * space: O(1)
 */
var findMaxAverage = function (nums, k) {
  let max = 0;
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
    max = sum / k;
  }

  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    max = Math.max(max, (sum / k));
  }

  return max;
};
```

</details>

<details>
<summary>2269. Find the K-Beauty of a Number
  <a href="https://leetcode.com/problems/find-the-k-beauty-of-a-number/">👊</a>
</summary>

### 문제 풀이

```js
/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 *
 * time:  O(n)
 * space: O(n)
 */
var divisorSubstrings = function (num, k) {
  const letterList = num.toString().split('');

  let cur = '';
  let cnt = 0;

  for (let i = 0; i < k; i++)
    cur += letterList[i];

  if (isZeroDivisor(num, parseInt(cur)))
    cnt += 1;

  for (let i = k; i < letterList.length; i++) {
    cur = cur.substring(1);
    cur += letterList[i];

    if (isZeroDivisor(num, parseInt(cur)))
      cnt += 1;
  }

  return cnt;
};

var isZeroDivisor = function (num, target) {
  return (num % target) === 0;
};
```

</details>

<details>
<summary>1763. Longest Nice Substring
  <a href="https://leetcode.com/problems/longest-nice-substring/">👊</a>
</summary>

### 문제 회고

가변적인 결과값이 예상되어 `슬라이딩 윈도우`보단 `투 포인터` 알고리즘이 필요하다고 판단하였다.

현재 동일한 알파벳의 niceSubstring은 완성하지만

    Input:   "dDzeE"
    Output:  "dD"

여러 알파벳의 niceSubstring은 찾지 못했다.

    Input:    "cChH"
    Output:   "cC"
    Expected: "cChH"

### 문제 풀이

```js
/**
 * @param {string} s
 * @return {string}
 *
 * time:  O(n²)
 * space: O(n)
 */
var longestNiceSubstring = function (s) {
  var getLongestSubstring = function (...args) {
    return args.reduce((a, b) => {
      return (a.length === b.length) ? a
        : (a.length > b.length) ? a
          : b;
    });
  }

  var getNiceSubstring = function (left, right) {
    let cur = '';

    while (
      left >= 0
      && right < N
      && s[left].toLowerCase() === s[right].toLowerCase()
    ) {
      cur = s.substring(left, right + 1);
      right += 1;
    }

    return cur;
  }

  /// +++ start  
  const N = s.length;
  let result = '';

  if (N < 2)
    return result;

  for (let i = 0; i < N; i++) {
    const niceSubstring = getNiceSubstring(i, i);

    if (niceSubstring.length === 1)
      continue;

    result = getLongestSubstring(result, niceSubstring);
    console.log(result);
  }

  return result;
};
```

</details>

<details>
<summary>1876. Substrings of Size Three with Distinct Characters
  <a href="https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/">👊</a>
</summary>

### 문제 풀이

```js
/**
 * @param {string} s
 * @return {number}
 *
 * time:  O(n)
 * space: O(1)
 */
var countGoodSubstrings = function (s) {
  var isGoodSubstrings = function (s) {
    return s === [...new Set(s.split(''))].join('');
  }

  // +++ Start
  const L = 3;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const substring = s.substring(i, i + L);

    if (substring.length === L && isGoodSubstrings(substring))
      result += 1;
  }
  return result;
};
```
</details>

<details>
<summary>1984. Minimum Difference Between Highest and Lowest of K Scores
  <a href="https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/">👊</a>
</summary>

### 문제 풀이

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 *
 * time:  O(n)
 * space: O(1)
 */
var minimumDifference = function (nums, k) {
  nums.sort((a, b) => a - b);

  const kIdx = k - 1;

  let highScore = nums[kIdx];
  let lowScore = nums[0];
  let min = highScore - lowScore;  

  for (let i = kIdx; i < nums.length; i++) {
    const diffScore = nums[i] - nums[i - kIdx];
    min = Math.min(min, diffScore);
  }

  return min;
};
```

</details>

<details>
<summary>보석 쇼핑
  <a href="https://school.programmers.co.kr/learn/courses/30/lessons/67258">👊</a>
</summary>

### 문제 회고

제시된 예제는 패스했지만, 제출시 테스트케이스는 해결하지 못했다.

### 문제 풀이

```js
/*
* time:     O(n)
* space:    O(n)
*/
function solution(gems) {
  const gemTypeLength = new Set([...gems]).size;
  const window = new Map();

  for (const [idx, gem] of gems.entries()) {
    window.set(gem, idx + 1);

    if (gemTypeLength === [...window.values()].length)
      break;
  }

  return [
    Math.min(...window.values()),
    Math.max(...window.values())
  ];
}
```

</details>

<hr/>

## 참고 문헌

[Window Sliding Technique](https://www.geeksforgeeks.org/window-sliding-technique/) ━ *GeeksforGeeks*