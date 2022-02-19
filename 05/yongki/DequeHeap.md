# 덱, 우선순위 큐(힙)

## 구현문제 리스트

<details>
<summary>
  641. Design Circular Deque
  <a href="https://leetcode.com/problems/design-circular-deque/">👊</a>  
</summary>

### 문제 회고

3주차의 `단일 연결리스트 구현`, 4주차의 `원형큐 구현`을 참고해서 구현하였다.

본 문제의 `deleteFront` 행위가 

원형큐에서의 `dequeue`와 다르게 구현해야 하는 점을 배웠다.

### 문제 풀이

<table>
  <tr >
    <th colspan="2">빅오</th>
  </tr>
  <tr>
    <td colspan="2">
<p>

|       | `insertFront` | `insertLast` | `deleteFront` | `deleteLast` | `getFront` | `getRear` | `isEmpty` | `isFull` |
| :---: | :-----------: | :----------: | :-----------: | :----------: | :--------: | :-------: | :-------: | :------: |
| time  |    `O(1)`     |    `O(n)`    |    `O(1)`     |    `O(n)`    |   `O(1)`   |  `O(n)`   |  `O(1)`   |  `O(1)`  |
| space |    `O(1)`     |    `O(1)`    |    `O(1)`     |    `O(1)`    |   `O(1)`   |  `O(1)`   |  `O(1)`   |  `O(1)`  |
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
// +++ Struct
class ListNode {
  constructor(value) {
      this.value = value;
      this.next = null;     
  }
}

/**
 * @param {number} k
 */
var MyCircularDeque = function(k) {
  this.head = null;
  this.size = 0;
  this.maxSize = k;
};
```
</p>
    </td>
    <td>
<p>

```js
// +++ Debug
MyCircularDeque.prototype.lastIndex = function(){
  return this.size > 0 ? this.size - 1 : 0;
}

MyCircularDeque.prototype.displayDeque = function(pointer){  
  let cur = pointer ? pointer : this.head;
  
  process.stdout.write(`size: ${this.size}   `);
  process.stdout.write(`elements: `);

  for(let i  = 0; i < this.size; i++){
    process.stdout.write(`${cur.value} → `);    
    cur = cur.next;
  }  
  process.stdout.write('\n');
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
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
  if(this.isFull())
    return false;
  
  let cur = this.head;
  const node = new ListNode(value);
    
  node.next = cur;
  this.head = node;
  
  this.size += 1;  
  return true;
};
```
</p>
    </td>
    <td>
<p>

```js
/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
  if(this.isFull())
    return false;
    
  const node = new ListNode(value);
  
  if(!this.head)
    this.head = node;
  else{
    let cur = this.head;
  
    for(let i = 0; i < this.lastIndex(); i++)
      cur = cur.next;
    
    cur.next = node;
  }
  
  this.size += 1;  
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
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
  if(this.isEmpty())
    return false;
  
  if(this.size === 1){
    this.size = 0;
    return this.head = null;
  }
  
  this.head = this.head.next;      

  this.size -= 1;  
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
MyCircularDeque.prototype.deleteLast = function() {
  if(this.isEmpty())
    return false;
  
  if(this.size === 1){
    this.size = 0;
    return this.head = null;
  }
  
  let prev = null;
  let cur = this.head;
    
  for(let i = 0; i < this.lastIndex(); i++){      
    prev = cur;
    cur = cur.next;
  }
  
  prev.next = cur.next;
  
  this.size -= 1;      
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
MyCircularDeque.prototype.getFront = function() {
  if(this.isEmpty())  
    return -1;
  
  return this.head.value;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
  if(this.isEmpty()) 
    return -1;
  
  let cur = this.head;
  
  for(let i = 0; i < this.lastIndex(); i++)
    cur = cur.next;
    
  return cur.value;
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
MyCircularDeque.prototype.isEmpty = function() {
  return !this.head;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
  return this.size === this.maxSize;
};
```
</p>
    </td>
  </tr>
</table>
</details>

<hr/>

## 참고 문헌

[My Solution at 707. Design Linked List](https://github.com/cs-study-org/algorithm-study/blob/master/03/yongki/LinkedList.md) ━ *GitHub*

[My Solution at 622. Design Circular Queue](https://github.com/cs-study-org/algorithm-study/blob/master/04/yongki/src/circularQueue.js) ━ *GitHub*
