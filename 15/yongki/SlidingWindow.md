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

<hr/>

## 참고 문헌

[Window Sliding Technique](https://www.geeksforgeeks.org/window-sliding-technique/) ━ *GeeksforGeeks*