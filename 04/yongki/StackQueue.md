# 스택, 큐

- [스택, 큐](#스택-큐)
  - [구현문제 리스트](#구현문제-리스트)
    - [문제 풀이](#문제-풀이)
    - [문제 회고](#문제-회고)
    - [문제 풀이 [`with size`]](#문제-풀이-with-size)
    - [문제 풀이 [`without size`]](#문제-풀이-without-size)
  - [문제 리스트](#문제-리스트)

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

|       | `push` |  `pop` | `increment` |
|:-----:|:------:|:------:|:-----------:|
|  time | `O(1)` | `O(1)` |    `O(n)`   |
| space | `O(1)` | `O(1)` |    `O(1)`   |
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
2번째 문제 풀이로 별도의 에디터에 구현해보았다.

### 문제 풀이 [`with size`]

<table>
  <tr>
    <th colspan="2">빅오</th>
  </tr>
  <tr>
    <td colspan="2">
<p>

|       | `enQueue` | `deQueue` | `Front` | `Rear` | `isEmpty` | `isFull` |
|-------|-----------|-----------|---------|--------|-----------|----------|
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

### 문제 풀이 [`without size`]

    ...

</details>

## 문제 리스트

    ...