# 스택, 큐

- [스택, 큐](#스택-큐)
  - [개념](#개념)
  - [문제 리스트](#문제-리스트)
    - [문제 풀이](#문제-풀이)

## 개념

스택은 배열, 큐는 연결리스트로 구현하는 것이 효율적이다.
> 🤔 이유는?

## 문제 리스트

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