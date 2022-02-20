# 덱, 우선순위 큐

- [덱, 우선순위 큐](#덱-우선순위-큐)
  - [이론](#이론)
  - [구현문제 리스트](#구현문제-리스트)
    - [문제 회고](#문제-회고)
    - [문제 풀이](#문제-풀이)
    - [문제 회고](#문제-회고-1)
    - [문제 풀이](#문제-풀이-1)
  - [참고 문헌](#참고-문헌)

## 이론

덱은

    ...

우선순위 큐는

    큐 또는 스택 자료구조와 유사하지만, 요소가 '우선순위'에 따라 정렬되어 있다.
                                                cf. 최솟값 또는 최댓값

    주로 힙 자료구조를 이용해 구현한다.

힙은 

    최솟값 또는 최댓값을 빠르게 찾아내기 위해 고안된 완전 이진 트리 이다.

    - 힙은 배열 자료형으로 구현한다.
      배열의 인덱스는 트리의 중위 순회를 의미한다.

    - 힙의 시간복잡도는 O(log n)이다.
      → 최솟값 또는 최댓값을 검색:    O(1)
      → 검색 이후 재정렬:             O(log n)

      이때, 최초 힙을 세팅하는 O(n)은 제외하였다.

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

<details>
<summary>
  7662. 이중 우선순위 큐
  <a href="https://www.acmicpc.net/problem/7662">👊</a>  
</summary>

### 문제 회고

힙 자료구조 기반의 우선순위 큐를 구현하였다.

본 문제를 풀기 위해 아래 2개를 별도의 소스코드로 구현해보았고, 

1. 최소힙 구현
2. 최대힙 구현

본 문제인 2개의 기능을 모두 지원해야 하는

3. 이중 우선순위 큐를 `문제 풀이`에다 기술하였다.

> 1, 2의 구현은 직접하지 못하고, 참고 문헌의 도움을 받으면서 이해하였다.

### 문제 풀이

  ...

</details>
<hr/>

## 참고 문헌

[My Solution at 707. Design Linked List](https://github.com/cs-study-org/algorithm-study/blob/master/03/yongki/LinkedList.md) ━ *GitHub*

[My Solution at 622. Design Circular Queue](https://github.com/cs-study-org/algorithm-study/blob/master/04/yongki/src/circularQueue.js) ━ *GitHub*

[Heap 특성](https://1ilsang.dev/2019-10-21/algorithm/heap) ━ *1ilsang*

[Heap 시각화](https://visualgo.net/en/heap) ━ *VisuAlgo*

[Javascript Heap 구현](https://nyang-in.tistory.com/153) ━ *냥인*

[Javascript 객체 상속](https://www.zerocho.com/category/JavaScript/post/573d812680f0b9102dc370b7) ━ *ZeroCho*

[Javascript 표준 입출력 방법](https://overcome-the-limits.tistory.com/25) ━ *Plus Ultra*

[Javascript 표준 입출력과 백준 이슈](https://broadway.tistory.com/entry/자바스크립트-백준-입력받는법) ━ *이너멜*

[백준 제출 형식](https://velog.io/@mttw2820/백준-7662.-이중-우선순위-큐) ━ *mttw2820*