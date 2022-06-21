# 이진 탐색

> 이론은 10주차 트리때 이진 트리로 진행하여 제외합니다.

## 문제 리스트

<details>
<summary>704. Binary Search
  <a href="https://leetcode.com/problems/binary-search/">👊</a>
</summary>

### 문제 풀이

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * time:    O(log n)
 * space:   O(log n)
 */
var search = function (nums, target) {
  function binarySearch(start, end) {
    if (start > end)
      return;

    const middle = Math.floor((start + end) / 2);

    if (nums[middle] === target)
      return middle;

    if (nums[middle] > target)
      return binarySearch(start, middle - 1);
    else
      return binarySearch(middle + 1, end);
  }

  const result = binarySearch(0, nums.length - 1);
  return isNaN(result) ? -1 : result;
};
```

</details>

<details>
<summary>349. Intersection of Two Arrays
  <a href="https://leetcode.com/problems/intersection-of-two-arrays/">👊</a>
</summary>

### 문제 회고

자바스크립트 sort 배열 메소드의 기본 정렬 순서는 다음과 같다.

    기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따릅니다. ━ MDN

때문에 숫자 정렬 순서를 따르도록 compare 함수를 구현해줘야한다.

### 문제 풀이

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 
 * m as nums1
 * n as nums2
 *
 * time:    O(m log n)
 * space:   O(m)
 */
var intersection = function (nums1, nums2) {
  nums2.sort((a, b) => a - b);

  const result = new Set();

  for (const num of nums1) {
    const idx = binarySearch(
      start = 0,
      end = nums2.length - 1,
      nums = nums2,
      target = num
    );

    if (isNaN(idx))
      continue;

    result.add(num);
  }

  return [...result];
};

var binarySearch = function (start, end, nums, target) {
  if (start > end)
    return;

  const middle = Math.floor((start + end) / 2);

  if (nums[middle] === target)
    return middle;

  if (nums[middle] > target)
    return binarySearch(start, middle - 1, nums, target);
  else
    return binarySearch(middle + 1, end, nums, target);
}
```
</details>

<details>
<summary>350. Intersection of Two Arrays II
  <a href="https://leetcode.com/problems/intersection-of-two-arrays-ii/">👊</a>
</summary>

### 문제 회고

`349번`과 비교하여 본 문제는 탐색 대상인 nums2의 인덱스를 기억해야한다.

따라서 이진 탐색을 마친 요소는 marking을 해두어야하는데,

처음 접근을 `undefined`로 매겼지만 이진 탐색시 탐색 대상에서 제외시키지 못했다.

따라서, `-Infinity`를 주어 해결하였다.

### 문제 풀이

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 
 * m as nums1
 * n as nums2
 *
 * time:    O(mn log n)
 *          for             →     O(m)
 *            binarySearch  →     O(log n)
 *            sort          →     O(n log n)
 * space:   O(n)
 */
var intersect = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  const result = [];

  for (const num of nums1) {
    const idx = binarySearch(
      start = 0,
      end = nums2.length - 1,
      nums = nums2,
      target = num
    );

    if (isNaN(idx))
      continue;

    nums2[idx] = -Infinity;
    nums2.sort((a, b) => a - b);
    result.push(num);
  }

  return result;
};

var binarySearch = function (start, end, nums, target) {
  if (start > end)
    return;

  const middle = Math.floor((start + end) / 2);

  if (isNaN(nums[middle]))
    return;

  if (nums[middle] === target)
    return middle;

  if (nums[middle] > target)
    return binarySearch(start, middle - 1, nums, target);
  else
    return binarySearch(middle + 1, end, nums, target);
}
```
</details>

<hr/>

## 참고 문헌

[이진 탐색 구현](https://www.geeksforgeeks.org/binary-search-in-javascript/) ━ *GeeksforGeeks*

[Simple Solution at 350. Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/discuss/2154281/Javascript-TIPs-for-Binary-Search) ━ *Leetcode*