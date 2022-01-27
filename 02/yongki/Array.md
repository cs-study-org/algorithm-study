# 배열

> 각 문제의 👊를 클릭하면 문제로 이동합니다.

<details>
<summary>1. Two Sum <a href="https://leetcode.com/problems/two-sum/">👊</a></summary>
<br/>

**문제풀이 (1/2)**

처음 접근 방법은 시간복잡도 O(n^2)이었다.

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){          
      if((nums[i] + nums[j]) === target)
        return [i, j]
    }
  }
};
```
**문제풀이 (2/2)**

문제 안에 `Follow-up`을 보면, O(n^2) 내로 줄여보라는 추가 과제가 있었다.

O(n)으로 줄일 수 있었다.

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const memory = {};
  
  for(let i = 0; i < nums.length; i++){
    const searchOne = target - nums[i];
    
    if(searchOne in memory)
      return [i, memory[searchOne]]
    
    memory[nums[i]] = i;    
  }
};
```

</details>

<details>
<summary>42. Trapping Rain Water <a href="https://leetcode.com/problems/trapping-rain-water/">👊</a></summary>
<br/>

🤔 문제의 계산 의도 기술 필요

**문제 풀이 1/4 [Fail]**

투 포인터를 사용해 1칸의 water를 체킹할 수 있는 방법까지만 접근할 수 있었다.

```js
var trap = function(height) {
  let result = 0;
  
  for(let i = 0; i < height.length; i++){
    const slow = i + 1;
    const fast = i + 2;
    
    if(slow > i && fast > slow)
      result += fast - slow;
  }
  
  return result;
};
```

**문제 풀이 2/4 [Brute force]**

    time:  O(n^2)
    space: O(1)

    Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]

    1. 1칸의 water를 체킹한 구간 2번째 인덱스로 확인해보자.

      ⅰ) current  = 2

          leftMax  = 1
          rightMax = 3

          water = leftMax - height[2] = 1

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {  
  let result = 0;

  for(let current = 0; current < height.length; current++){
    let leftMax = 0;
    let rightMax = 0;
    
    for(let left = 0; left < current; left++)
      leftMax = Math.max(leftMax, height[left]);
    
    for(let right = current + 1; right < height.length; right++)
      rightMax = Math.max(rightMax, height[right]);
    
    const water = Math.min(leftMax, rightMax) - height[current];    
    
    if(water > 0)
      result += water;
  }
  
  return result;
};
```

**문제 풀이 3/4 [Two pointer]**

    time:  O(n)
    space: O(n)

    Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]

    1. 1칸의 water가 채워질때까지 루프 결과값을 확인해보자.

      ⅰ) left = 0; right = 11;

          leftMax = 0;
          rightMax = 1;
    
          height[0] = 0 < height[11] = 1
            left += 1;

      ⅱ) left = 1; right = 11;

          leftMax = 1;
          rightMax = 1;

          height[1] = 1 === height[11] = 1
            right -= 1;

      ⅲ) left = 1; right = 10;

          leftMax = 1;
          rightMax = 2;

          height[1] = 1 < height[10] = 2
            left += 1;

      ⅳ) left = 2; right = 10;

          leftMax = 1;
          rightMax = 2;

          height[2] = 0 < leftMax = 1
            water += 1;                   // +++ check this!

          height[2] = 0 < height[10] = 2
            left += 1;          

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {  
  let left = 0;
  let right = height.length - 1;
  
  let leftMax = 0;
  let rightMax = 0;

  let result = 0;

  while(left < right){
    leftMax = Math.max(leftMax, height[left]);
    
    if(height[left] < leftMax)
      result += leftMax - height[left];
    
    rightMax = Math.max(rightMax, height[right]);
    
    if(height[right] < rightMax)
      result += rightMax - height[right];
    
    height[left] < height[right] ? left++ : right--;
  }
  
  return result;
};
```

**문제 풀이 4/4 [Stack]**

      ...

</details>

<hr/>

## 참고문헌

[Simple Solution at 1. Two Sum](https://www.code-recipe.com/post/two-sum) -- Code Recipe

[Simple Solution at 42. Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/discuss/400555/Clean-JavaScript-solutions-(brute-force-dynamic-programming-stack-two-pointers)) -- Hongbo-Miao