# 스택, 큐

- [스택, 큐](#스택-큐)
  - [구현문제 리스트](#구현문제-리스트)
    - [문제 풀이](#문제-풀이)
    - [문제 회고](#문제-회고)
    - [문제 풀이 [`용량 제한적인`]](#문제-풀이-용량-제한적인)
    - [문제 풀이 [`용량 제한없는`]](#문제-풀이-용량-제한없는)
  - [문제 리스트](#문제-리스트)
    - [문제 회고](#문제-회고-1)
    - [문제 풀이 1/2 [`스택 사용`]](#문제-풀이-12-스택-사용)
    - [문제 풀이 2/2 [`직관적인`]](#문제-풀이-22-직관적인)
    - [문제 풀이 [`1614번 문제 풀이 1/2`]](#문제-풀이-1614번-문제-풀이-12)
    - [문제 풀이 1/2 [`Brute force`]](#문제-풀이-12-brute-force)
    - [문제 풀이 2/2 [`#Follow up 만족` `#Monotonic Stack`]](#문제-풀이-22-follow-up-만족-monotonic-stack)
      - [알고리즘 설명](#알고리즘-설명)
      - [코드](#코드)
      - [루프에 따른 결과값 1/2 [`Example1`]](#루프에-따른-결과값-12-example1)
      - [루프에 따른 결과값 2/2 [`Example2`]](#루프에-따른-결과값-22-example2)
  - [참고문헌](#참고문헌)

## 구현문제 리스트

<details>
<summary>1381. Design a Stack With Increment Operation
  <a href="https://leetcode.com/problems/design-a-stack-with-increment-operation/">👊</a>
</summary>

### 문제 풀이

<table>
  <tr>
    <th colspan="2">빅오</th>
  </tr>
  <tr>
    <td colspan="2">
<p>

|       | `push` | `pop`  | `increment` |
| :---: | :----: | :----: | :---------: |
| time  | `O(1)` | `O(1)` |   `O(n)`    |
| space | `O(1)` | `O(1)` |   `O(1)`    |
</p>
    </td>
  </tr>
  <tr>
    <th colspan="2">코드</th>
  </tr>
  <tr>
    <td>
<p>

```js
/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
  this.list = [];
  this.maxSize = maxSize;
  this.size = 0;
};
```
</p>
    </td>
    <td>
<p>

```js
//+++ Private function
CustomStack.prototype._isFull = function(x) {
  return this.size === this.maxSize;
}

CustomStack.prototype._isEmpty = function(x) {
  return !this.size;
}
```
</p>
    </td>
  </tr>
  <tr>
    <td>
<p>

```js
/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
  if(this._isFull())
    return -1;
  
  this.size += 1;
  return this.list.push(x);
};
```
</p>
    </td>
    <td>
<p>

```js
/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
  if(this._isEmpty())
    return -1;
  
  this.size -= 1;
  return this.list.pop();
};
```
</p>
    </td>
  </tr>
  <tr>
    <td colspan="2">
<p>

```js
/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
  if(this._isEmpty())
    return -1;
  
  const loopCnt = this.size < k ? this.size : k;
  
  for(let i = 0; i < loopCnt; i++)
    this.list[i] += val;    
};
```
</p>
    </td>
  </tr>
</table>
</details>

<details>
<summary>622. Design Circular Queue
  <a href="https://leetcode.com/problems/design-circular-queue/">👊</a>
</summary>

### 문제 회고

원형 큐 문제지만, 구현을 단순 큐 처럼해도 제출이 완료되었다.

때문에 size 제한이 없고, 연결리스트를 사용한 실질적인 원형 큐를 
2번째 문제 풀이로 별도의 에디터에 구현할 계획이다.

### 문제 풀이 [`용량 제한적인`]

<table>
  <tr>
    <th colspan="2">빅오</th>
  </tr>
  <tr>
    <td colspan="2">
<p>

|       | `enQueue` | `deQueue` | `Front` | `Rear` | `isEmpty` | `isFull` |
| ----- | --------- | --------- | ------- | ------ | --------- | -------- |
| time  | `O(1)`    | `O(1)`    | `O(1)`  | `O(1)` | `O(1)`    | `O(1)`   |
| space | `O(1)`    | `O(1)`    | `O(1)`  | `O(1)` | `O(1)`    | `O(1)`   |
</p>
    </td>
  </tr>
  <tr>
    <th colspan="2">코드</th>
  </tr>
  <tr>
    <td colspan="2">
<p>

```js
/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.queue = [];
  this.size = k;
};
```
</p>
    </td>    
  </tr>
  <tr>
    <td>
<p>

```js
/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if(this.isFull())
    return false;
  
  this.queue.push(value);  
  return true;
};
```
</p>
    </td>
    <td>
<p>

```js
/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if(this.isEmpty())
    return false;
  
  this.queue.shift();  
  return true;
};
```
</p>
    </td>
  </tr>
  <tr>
    <td>
<p>

```js
/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  if(this.isEmpty())
    return -1;
  
  return this.queue[0];
};
```
</p>
    </td>
    <td>
<p>

```js
/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  if(this.isEmpty())
    return -1;
  
  return this.queue.at(-1);
};
```
</p>
    </td>
  </tr>
  <tr>
    <td>
<p>

```js
/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return !this.queue.length;
};
```
</p>
    </td>
    <td>
<p>

```js
/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  return this.queue.length === this.size;
};

```
</p>
    </td>
  </tr>
</table>

### 문제 풀이 [`용량 제한없는`]

    ...

</details>

## 문제 리스트

<details>
<summary>1614. Maximum Nesting Depth of the Parentheses
  <a href="https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/">👊</a>
</summary>

### 문제 회고

조건이 다음과 같을 때, 

    Input:    "(1+(2*3)+((8)/4))+1"
    Ouput:    3

처음 접근 방식은 

<dl><dt>

문자열의 마지막 left bracket 이전의 bracket들의 dept를 계산하면된다고 생각했다.
</dt><dl>


즉, bracket들만 있다고 가정하면,

    ( ( ) ( ( max depth space ) ) )

마지막 left bracket 이전들은 다음과 같다.

    ( ( ) ( ( 
    
여기서 VPS를 제외하면, `Output: 3`이 나온다.

하지만, 다음과 같은 테스트케이스가 있었다.

    Input:    "8*((1*(5+6))*(8/6))"
    brackets: ( ( ( max depth space ) ) ( ) )
    Ouput:    3

즉, 마지막 left bracket 이전에 max depth가 존재한 케이스였다.

다음은 리트코드 풀이를 참고하였다.
필자가 실패한 접근 방법들은 `문제 풀이 1/2`에 가장 가까웠다.

### 문제 풀이 1/2 [`스택 사용`]

```js
/**
 * @param {string} s
 * @return {number}
 * time:    O(n)
 * space:   O(n)
 */
var maxDepth = function(s) {  
  let stack = [];
  let max = 0;
  
  for(let letter of s){
    if(letter === '(')
      stack.push(letter)

    else if(letter === ')')
      stack.pop();
        
    max = Math.max(stack.length, max);
  }
  
  return max;
};
```

### 문제 풀이 2/2 [`직관적인`]

```js
/**
 * @param {string} s
 * @return {number}
 * time:    O(n)
 * space:   O(1)
 */
var maxDepth = function(s) {  
  let max = 0;
  let count = 0;    // +++ brackets count
  
  for(let i = 0; i < s.length; i++){
    if(s[i] === '('){
      count++;
      max = Math.max(max, count);
    }
    
    if(s[i] === ')')
      count--;        
  }
  
  return max;  
};
```

</details>

<details>
<summary>1598. Crawler Log Folder
  <a href="https://leetcode.com/problems/crawler-log-folder/">👊</a>
</summary>

### 문제 풀이 [`1614번 문제 풀이 1/2`]

```js
/**
 * @param {string[]} logs
 * @return {number}
 * time:    O(n)
 * space:   O(n)
 */
var minOperations = function(logs) {
  const stack = [];  
  
  for(let log of logs){
    
    if(log === './')
      continue;
    
    if(log === '../'){
      if(stack.length) 
        stack.pop();                
      
      continue;  
    }      
    
    stack.push(log);    
  }
  
  return stack.length;
};
```
</details>

<details>
<summary>496. Next Greater Element I
  <a href="https://leetcode.com/problems/next-greater-element-i/">👊</a>
</summary>

### 문제 풀이 1/2 [`Brute force`]

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 
 * time:    O(ab)
            → for           O(a)
            →   indexOf()     O(b)
            →   findNext..    O(b)

 * space:   O(a)              
 */
var nextGreaterElement = function(nums1, nums2) {  
  const findNextGreaterElement = (curIdx, curNum) => { 
    if(nums2.length === curIdx + 1)
      return -1;          
      
    for(let i = curIdx + 1; i < nums2.length; i++){
      if(nums2[i] > curNum)
        return nums2[i];      
    }            
    
    return -1;
  };
  
  const result = [];
  
  for(let num of nums1){
    const idx = nums2.indexOf(num);       
    
    result.push(findNextGreaterElement(idx, num));
  }    
  
  return result;
};
```

### 문제 풀이 2/2 [`#Follow up 만족` `#Monotonic Stack`]

다음과 같은 추가조건이 주어졌다.

<dl><dt>
Could you find an O(nums1.length + nums2.length) solution?
</dl></dt> 

- 풀이법은 리트코드 풀이를 참조하였다.

- 제출함수를 위해 스택을 간단히 구현했지만, `1381번: 스택 구현`과 유사해 생략하였다.

#### 알고리즘 설명

`Monotonic Stack`은 스택의 요소들이 오름차순 또는 내림차순을 유지해야한다.

    오름차순을 유지해야하는 경우

    [5, 19, 20]에 10을 넣는다고 했을때,
    19, 20을 제거하고 10을 넣는다.

    [5, 10]

    이렇듯, 스택에 push되는 값 이상의 수를 모두 제거하는 특징을 이용한다.

#### 코드

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 
 * time:    O(a + b)
            → for                 O(b)
            →   while               O(1)
            →     stack.isEmpty()     O(1)
            →     stack.peek()        O(1)
            →     stack.pop()         O(1)
            →     map.set             O(1)
            
            → for                 O(a)
            
 * space:   O(a + b)              
            → result              O(a)
            → map                 O(b)
            → stack               O(b)
 */
var nextGreaterElement = function(nums1, nums2) {
  const result = [];
  
  /*
    key:    num2 
    value:  num2's next greater element
  */
  const map = new Map();

  // descend order monotonic stack
  const stack = new Stack();
  
  for(const num of nums2){
    while(!stack.isEmpty()
         &&stack.peek() < num)
      map.set(stack.pop(), num);
    
    stack.push(num);
    console.log(stack, map);
  }
  
  for(let i = 0; i < nums1.length; i++)
    result[i] = map.has(nums1[i]) ? map.get(nums1[i]) : -1;
    
  return result;
};
```

#### 루프에 따른 결과값 1/2 [`Example1`]

    Input:    [4,1,2]
              [1,3,4,2]

    Output:   [-1,3,-1]

    Stack { stack: [ 1 ], size: 1 } Map(0) {}
    Stack { stack: [ 3 ], size: 1 } Map(1) { 1 => 3 }
    Stack { stack: [ 4 ], size: 1 } Map(2) { 1 => 3, 3 => 4 }
    Stack { stack: [ 4, 2 ], size: 2 } Map(2) { 1 => 3, 3 => 4 }

#### 루프에 따른 결과값 2/2 [`Example2`]

    Input:    [2,4]
              [1,2,3,4]

    Output:   [3,-1]

    Stack { stack: [ 1 ], size: 1 } Map(0) {}
    Stack { stack: [ 2 ], size: 1 } Map(1) { 1 => 2 }
    Stack { stack: [ 3 ], size: 1 } Map(2) { 1 => 2, 2 => 3 }
    Stack { stack: [ 4 ], size: 1 } Map(3) { 1 => 2, 2 => 3, 3 => 4 }

</details>

<hr/>

## 참고문헌

[Simple Solution at 1614. Maximum Nesting Depth of the Parentheses](https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/discuss/891829/javascript-O(n)-O(1)) ━ *LeetCode*

[Simple Solution at 1614. Maximum Nesting Depth of the Parentheses](https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/discuss/1707692/JavaScript-Stack-or-O(n)-Time-or-O(1)-Space) ━ *LeetCode*

[Simple Solution at 496. Next Greater Element I](calendar.google.com/calendar/u/0/r/month/2022/1/1) ━ *LeetCode*