# 배열

<details>
<summary>1. Two Sum</summary>
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
<hr/>

## 참고문헌

[Simple Solution at 1. Two Sum](https://www.code-recipe.com/post/two-sum) -- Code Recipe