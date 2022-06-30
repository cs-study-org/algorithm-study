# 배열

## 문제 리스트

> 각 문제의 👊를 클릭하면 문제로 이동합니다.

<details>
<summary>
  35. Search Insert Position
  <a href="https://leetcode.com/problems/search-insert-position/">👊</a>
</summary>

### 문제 회고

문제 조건에 시간 복잡도 `O(log n)`을 만족하라고 나와있었다.

즉, 이진 탐색을 사용해서 풀어야했다.

이진 탐색 트리를 구현한 코드를 참고해서 
문제에서 요구하는 결과값을 도출할 수 있게 약간의 수정만 하면된다고 생각했다.
<br/>

트리의 하나의 노드를 구현체로 만들어 재귀적으로 호출하는 풀이를 봤는데, 상당히 구현해놓을 함수가 많았다.

이는 트리 주제때 확인하기로 하고, 현재로써 간단히 이진 탐색만 가능한 함수를 사용했다.

해당 문제가 Easy인 이유는 Input이 정렬된 배열이기 때문이라 보았다.

좀더 구현체를 활용한 코드들은 정렬되지 않은 배열일 때를 극복하는 경우라고 예상한다.

### 문제 풀이 1/2 [`재귀적 호출`]

```js
/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*
* time:   O(log n)
* space:  O(log n)
*/
var searchInsert = function (nums, target) {
  var binarySearch = function (start, end) {
    if (start > end)
      return start;

    const middle = Math.floor((start + end) / 2);

    if (nums[middle] === target)
      return middle;

    if (nums[middle] > target)
      return binarySearch(start, middle - 1);
    else
      return binarySearch(middle + 1, end);
  }

  return binarySearch(0, nums.length - 1);
};
```

### 문제 풀이 2/2 [`하나의 루프에서 범위 재조정`]

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var binarySearch = function(sortedArr, target){
  let startIdx = 0;
  let endIdx = sortedArr.length - 1;
  
  while(startIdx <= endIdx){
    const midIdx = startIdx + Math.floor((endIdx - startIdx) / 2);
    
    if(sortedArr[midIdx] === target)
      return midIdx;
    
    if(sortedArr[midIdx] < target)
      startIdx = midIdx + 1;
    else
      endIdx = midIdx - 1;
  }
  
  return startIdx;
}

var searchInsert = function(nums, target) {
  return binarySearch(nums, target);
};
```

### 이슈
하지만, 수행 시간에서 차이가 극명했다.

🤔 코드를 확인해보면 후자의 풀이도 이진 탐색 풀이는 맞다고 판단되지만, 
수행 시간에서 차이가 이렇게 나는 원인이 궁금하다.

<table>
  <tr>
    <th>재귀적 호출</th>
    <th>하나의 루프에서 범위 재조정</th>
  </tr>
  <tr>
    <td>
      <img src="assets/1stRuntimeCompare(1).jpg">
    </td>
    <td>
      <img src="assets/1stRuntimeCompare(2).jpg">
    </td>
  </tr>
</table>

</details>

<details>
<summary>
  53. Maximum Subarray
  <a href="https://leetcode.com/problems/maximum-subarray/">👊</a>
</summary>

### 문제 회고

이 문제는 접근 방법이 떠오르지 않았다.

여러 풀이를 참고하였고, [문제 풀이 2/3](#문제-풀이-23-kadanes-algorithm)의 가장 직관적인 풀이를 찾아내었다.

### 문제 풀이 1/3 [`Brute force`]

본 `Brute force`를 `O(n)`으로 간추린 알고리즘이 제일 많이 등장한 풀이이다.

하지만, 설명이 부자연스러울 정도로 필자는 제대로 이해하지 못했다.

<table>
  <tr>
    <th>풀이 설명</th>
    <th>코드</th>
  </tr>
  <tr>
    <td>
<pre>

    time:   O(n^2)

    Input:  [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    Output: 6

    1. 루프에 따른 결과값을 확인해보면 이해가 편하다.

      i = 0 일때, 다른 배열 요소를 모두 순회하는데, 

      (현재요소 + 다음요소) vs 다음 요소
      에서 최댓값을 tempMax에 넣어둔다.

      (-2 + 1)    vs  1      tempMax = 1
      (1  + -3)   vs  -3     tempMax = -2
      (-2 + 4)    vs  4      tempMax = 4
      ...
      (5 + 1)     vs 1       tempMax = 6 

      tempMax를 가산기와 헷갈리면 안된다.

    2. 이 계산 과정중의 최댓값은 또 따로 빼둔다.

        max = 6
</pre>
    </td>
    <td>
<pre>

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {  
  let max = nums[0];
  
  for(let i = 0; i < nums.length; i++){
    let tempMax = nums[i];
        
    for(let j = i + 1; j < nums.length; j++){    
      tempMax = Math.max(tempMax + nums[j], nums[j]);
      max = Math.max(tempMax, max);      
    }    
  }
  
  return max;
};
```
</pre>
    </td>
  </tr>  
</table>

### 문제 풀이 2/3 [`Kadane's Algorithm`]

배열 챕터에 등장한 풀이법이다.

**알고리즘 설명**

`Kadane's Algorithm`은 

    수열에서 각 수들을 더했을때 가장 큰 수가 나오는 연속된 부분(최대 부분합)을 찾는 알고리즘이다.

<table>
  <tr>
    <td width="50%">
      <img src="https://miro.medium.com/max/1400/1*0T4vufD3IKkBLC895NNtkA.png">
    </td>
    <td>
      <p>풀이의 핵심은</p>
<pre><code>수열의 요소별 최대 부분합은
이전 요소의 최대 부분합이 반영된 결과값인 것이다.</code></pre>
    </td>
  </tr>
</table>

최대 부분합은 이렇게

1. `이전 요소의 최대 부분합` + `현재 요소의 최대 부분합`하여 연장할지,
2. 또는, `현재 요소의 최대 부분합`으로 초기화할지 선택하면 된다.

<table>
  <tr>
    <th>풀이 설명</th>
    <th>코드</th>
  </tr>
  <tr>
    <td>
<pre>

    time: O(n)

위 알고리즘 설명으로 대체한다.

</pre>
    </td>
    <td>
<pre>

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {  
  for(let i = 1; i < nums.length; i++){
    nums[i] = Math.max(
      nums[i],
      nums[i] + nums[i - 1]
    )    
  }
  
  return Math.max(...nums);
};
```
</pre>
    </td>
  </tr>
</table>

### 문제 풀이 3/3 [`divide and conquer`]

`Follow up`에 기술된 추가 조건이다. `DP`를 익힌 후에 다시 한번 풀어보도록 하자.

```js
```

</details>

<details>
<summary>
  2133. Check if Every Row and Column Contains All Numbers
  <a href="https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/">👊</a>
</summary>

### 문제 회고
원래 [79. Word Search](https://leetcode.com/problems/word-search/)가 발표 문제였지만, 난이도 조정이 필요하다 생각하였다.

따라서, 위 문제와 유사하지만 난이도 조정된 문제를 
`Related Topics`에 `Array`, `Metrix`와 `Easy`태그를 더해 찾았다.

### 문제 풀이 [`Brute force`]

    row를 하나의 배열이라 할때,
    길이가 3이면, row에는 1, 2, 3이 배열의 요소로 들어있어야한다.

    col도 마찬가지다.

<table>
  <tr>
    <th colspan="2">예시 사진</th>
  </tr>
  <tr align="center">
    <td><small>Pass</small></td>
    <td><small>Non-pass</small></td>
  </tr>
  <tr align="center">
    <td>      
      <img src="https://assets.leetcode.com/uploads/2021/12/21/example1drawio.png">
    </td>
    <td>
      <img src="https://assets.leetcode.com/uploads/2021/12/21/example2drawio.png">
    </td>
  </tr>
  <tr>
    <th>풀이 설명</th>
    <th>코드</th>
  </tr>
  <tr>
  <td>
<pre>

    time:   O(n^2)

    1. row와 col(이하 line이라 통칭)을 검증할 숫자(validateNum)는 그 요소들의 합이다.
       요소의 합 6을 기준으로 1, 2, 3을 빼면서 0이 되어야 검증된 line이다.

    2. 이때, 이러한 테스트 케이스가 있었다.

        [
          [2, 1, 3],
          [2, 3, 1],
          [2, 2, 2]
        ]

        즉, validateNum을 통과하지만, 1, 2, 3의 요소가 모두 들어있지 않다.
        때문에, isSameElement 함수는 
          배열을 Set화 시킬때 길이와 배열의 길이를 비교해서 이를 극복한다.

    3. 또한, col의 요소들을 비교하기 위해 col마다 배열화 시켜야했다.
       때문에, matrix를 회전하여, 해당 데이터 또한 활용하였다.
</pre>
  </td>
  <td>
<pre>

```js
var checkValid = function(matrix) {
  
  // +++ Function
  const isSameElement = (arr) => new Set(arr).size !== matrix.length;
  
  const rotateMatrix = (matrix) => {
    const result = [];
    
    for(let row = 0; row < matrix.length; row++){      
      let rotateRow = [];
      
      for(let col = 0; col < matrix.length; col++)
        rotateRow.push(matrix[col][row])

      result.push(rotateRow);
    }
    
    return result;
  }
  
  // +++ Start
  const validateNum = matrix[0].reduce((a, b) => a + b, 0);  
  const rotatedMatrix = rotateMatrix(matrix);
  
  
  for(let row = 0; row < matrix.length; row++){
    if(isSameElement(matrix[row]))
      return false;
    
    if(isSameElement(rotatedMatrix[row))
      return false;
    
    let rowRange = validateNum;
    let colRange = validateNum;

    for(let col = 0; col < matrix.length; col++){      
      rowRange = rowRange - matrix[row][col];
      colRange = colRange - matrix[col][row];
    }

    if(rowRange || colRange)
      return false;
  }
  
  return true;
}
```
</pre>
  </td>
  </tr>
</table>

</details>
<hr/>

## 참고문헌

[Binary Search code](https://velog.io/@yujo/JS이진-탐색Binary-Search) -- yujo

[Kadane's Algorithm](https://kplog.tistory.com/273) -- 센치한개발자

[Kadane's Algorithm](https://medium.com/@vdongbin/kadanes-algorithm-카데인-알고리즘-acbc8c279f29) -- vincent

[Simple Solution at 53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/discuss/164670/JavaScript-Solution-Comparisons) -- Busyreadingsomething

[Simple Solution at 53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/discuss/1152811/Kadane's-Algorithm-Javascript) -- EziO-