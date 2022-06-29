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

<hr/>

## 참고 문헌

[Window Sliding Technique](https://www.geeksforgeeks.org/window-sliding-technique/) ━ *GeeksforGeeks*