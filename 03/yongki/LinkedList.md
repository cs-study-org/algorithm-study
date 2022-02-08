# 연결리스트

- [연결리스트](#연결리스트)
  - [개념](#개념)
  - [문제 리스트](#문제-리스트)
    - [문제 풀이 1/2 [`문자열 조작`]](#문제-풀이-12-문자열-조작)
    - [문제 풀이 2/2 [`비트 연산`]](#문제-풀이-22-비트-연산)
    - [문제 회고](#문제-회고)
    - [문제 풀이](#문제-풀이)
    - [문제 회고](#문제-회고-1)
    - [문제 풀이[`Switch tracks at the end`]](#문제-풀이switch-tracks-at-the-end)
  - [문제 회고](#문제-회고-2)
  - [문제 풀이](#문제-풀이-1)
  - [참고문헌](#참고문헌)

## 개념

<table>
  <tr>
    <th colspan="2">구조</th>
  </tr>
  <tr align="center">
    <td colspan="2">
      <img 
        width="50%"
        src="https://mblogthumb-phinf.pstatic.net/MjAxOTA1MDdfMTEg/MDAxNTU3MjA0OTUwMDA1.DSJlwlTNm2iXdPUkzSrIkz58Q-6C2WKfFi0Tq7KlZVwg.uGAPoVzrcjQv58CzjdZ0Fz1u0BWZoA0rOWT6YUQ2Hacg.PNG.std_34/image.png?type=w800">      
    </td>
  </tr>
  <tr>
    <th colspan="2">종류</th>
  </tr>
  <tr>
    <td>
      <img src="https://mblogthumb-phinf.pstatic.net/MjAxOTA1MDdfMTc4/MDAxNTU3MjA2NzUwNTA2.zFSk59o7XoiUEv20e73r1Qh0csm7PfHL2zgpK0B9NZEg.vDG82wpGHzBLaRyrSP41E6EVIjjdzsszeoWY8mIBOqAg.PNG.std_34/image.png?type=w800">
    </td>
    <td>
<p>
다음은 최악의 경우 시간 복잡도이다.

<b>단일 연결리스트</b>

| Access | Search | Insertion | Deletion |
| :----: | :----: | :-------: | :------: |
| `O(n)` | `O(n)` |  `O(n)`   |  `O(n)`  |

<b>원형 연결리스트</b>

| Access | Search | Insertion | Deletion |
| :----: | :----: | :-------: | :------: |
| `O(n)` | `O(n)` |  `O(n)`   |  `O(n)`  |
> 순차적으로 Insertion / Deletion 행위에는 `O(1)`을 보장한다.

<b>이중 연결리스트</b>

| Access | Search | Insertion | Deletion |
| :----: | :----: | :-------: | :------: |
| `O(n)` | `O(n)` |  `O(1)`   |  `O(1)`  |

> 포인터 공간을 추가로 사용하는 비용에 단점이 있다.
</p>
    </td>
  </tr>
</table>

## 문제 리스트

> 각 문제의 👊를 클릭하면 문제로 이동합니다.
> 각 문제의 `메인 함수에 대한 주석`은 중복되어 첫 문제 풀이에만 기술하겠습니다.

<details>
<summary>1290. Convert Binary Number in a Linked List to Integer
  <a href="https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/">👊</a>
</summary>

### 문제 풀이 1/2 [`문자열 조작`]

<table>
  <tr>
    <th>풀이 설명</th>
    <th>코드</th>
  </tr>
  <tr>
    <td>
<p>

    time:   O(n)
    space:  O(n)

    1. 연결리스트를 순회하여 노드의 val를 str 문자열 변수에 합한다.
    2. str 문자열 변수를 정수화시킨다.

</p>
    </td>
    <td>
<p>

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
  let str = '';  
  
  while(head){
    str += String(head.val);
    head = head.next;    
  }
  
  return parseInt(str, 2);
};
```
</p>
    </td>
  </tr>
</table>

### 문제 풀이 2/2 [`비트 연산`]

`Show Hint 2`에 다음과 같은 추가 조건을 주었다.

*"한 번의 작업으로 십진수 값을 얻으려면 shift left 연산(`<<`) 및 or 연산(`|`)을 사용합니다"*

처음에는 `LSB`부터 접근해서 2씩 곱해주는데, 1과 0은 or연산으로 걸러주면 된다고 생각하였다.
shift left 연산은 어떻게 활용해야할 지 몰랐다.

다만, 그러면 연결리스트를 reverse 해야하는데, 메소드를 지원하지도 않고 잘못된 접근이었다.

따라서 리트코드의 풀이를 참고하였다.

풀이의 핵심은 **결과값을** shift left 연산으로 값을 높여가면서,
연결리스트와 or 연산으로 비교해 나아가는 것이다.

<table>
  <tr>
    <th>풀이 설명</th>
    <th>코드</th>
  </tr>
  <tr>
    <td width="50%">
<p>

    time:   O(n)
    space:  O(1)

    Input: head = [1,0,1]
    Output: 5

     1. 루프에 따른 결과값으로 알고리즘을 이해하자.

        val = 0

        loop start

          head: 1
            val = (val << 1) | head.val
            val = (0 << 1) | 1
            
            val = 1

          head: 0
            val = (val << 1) | head.val
            val = (1 << 1) | 0 
            val = 10

          head: 1
            val = (val << 1) | head.val
            val = (10 << 1) | 1 
            val = 101

          head: null
        done

</p>
    </td>
    <td width="50%">
<p>

```js
var getDecimalValue = function(head) {
  let result = 0; 
  
  while(head){
    result = (result << 1) | head.val;
    head = head.next;
  }
  
  return result;
};
```
</p>
    </td>
  </tr>
</table>

</details>

<details>
<summary>237. Delete Node in a Linked List
  <a href="https://leetcode.com/problems/delete-node-in-a-linked-list/">👊</a>
</summary>

### 문제 회고

Input에 기술된 head 인자가 문제 메인 함수에 없는 오류가 있다. 

때문에 별도의 에디터에서 연결리스트를 구현해서 옳은 인자를 만들어 문제를 풀게되었다.

### 문제 풀이

`deleteNode 함수`만 확인하면 된다.

<table>
  <tr>
    <th>풀이 설명</th>
    <th>코드</th>
  </tr>
  <tr>
    <td>
<p>

    time:   O(n)

    1. 연결리스트의 노드를 순회할 때 prev라는 변수에 노드를 저장한다.
       해당 변수는 삭제할 노드를 찾았을 시 
       이전 노드와 삭제 이후의 노드를 연결하기 위해 사용한다.

        prev: 4 → 5 → 1 → 9

        head: 5 to delete
          prev.next = head.next
          5 → 1 → 9 = 1 → 9 

          head = prev.next;
          4 → 1 → 9
        done            

</p>
    </td> 
    <td>
<p>

```js
const assert = require('assert')

class ListNode {
  constructor(val) {
      this.val = val;
      this.next = null;              
  }
}

class LinkedList {  
  constructor(arr){
    arr.forEach(each => {
      const node = new ListNode(each);
      let current;

      if(this.head == null)
        this.head = node
      else{
        current = this.head;

        while(current.next)
          current = current.next;

        current.next = node;
      }
    })    
  }  
}

var printArray = function(head){
    const result = [];
    let current = head;

    while(current){
      result.push(current.val);
      current = current.next;
    }

    return result;
}


/**
 * +++ Main Function
 * @param {ListNode, ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(head, node) {  
  let prev = head;

  while(head){    
    if(head.val === node.val){
      prev.next = head.next;
      head = prev.next;
    }else{
      prev = head;
      head = head.next;
    } 
  }
};

// +++ Test
const list = new LinkedList([4, 5, 1, 9]);

deleteNode(list.head, new ListNode(5));
assert.deepEqual(printArray(list.head), [4, 1, 9]);   // pass

const list2 = new LinkedList([4, 5, 1, 9]);

deleteNode(list2.head, new ListNode(1));
assert.deepEqual(printArray(list2.head), [4, 5, 9]);  // pass
```
</p>
    </td>
  </tr>
</table>
</details>
<details>
<summary>
  160. Intersection of Two Linked Lists
  <a href="https://leetcode.com/problems/intersection-of-two-linked-lists/">👊</a>
</summary>

### 문제 회고

처음에는 아래와 같이 접근했지만, 요구하는 문제는 정렬되있지 않아 적합하지 않았다.

    cf. headA = [2, 3, 4, 5]
        headB = [1, 2, 3, 4, 5] 라면,

        while(headA || headB){
          if(headA > headB)
            headB = headB.next;
          else
            headA = headA.next;
        }

접근 방법이 떠오르지 않아 리트코드 풀이를 참고했다.

### 문제 풀이[`Switch tracks at the end`]

연결리스트 간 길이가 다르다 보니

짧은 연결리스트A가 끝나면 연결리스트B를 이어붙여서 sync를 맞추는 알고리즘이었다.

<table>
  <tr>
    <th>풀이 설명</th>
    <th>코드</th>
  </tr>
  <tr>
    <td>
<p>

    time:   O(n)

    Input:  [4,1,8,4,5]
            [5,6,1,8,4,5]

    1. 루프 마다 다음 노드를 헤드에 넣어 연결리스트를 순회한다.
       다음 노드를 헤드에 넣을 때 조건을 넣어
       다음 노드가 없을 시 또 다른 연결리스트를 이어붙인다.

        4 → 1 → 8 → 4 → 5 → null 
                              5 → 6 → 1 → 8 → 4 → 5

        5 → 6 → 1 → 8 → 4 → 5 → null
                                  4 → 1 → 8 → 4 → 5

    2. sync가 맞춰지면, 교차되는 지점은 에디터에서 판별한다.
</p>
    </td>
    <td>
<p>

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let curA = headA;
  let curB = headB;
  
  while (curA !== curB) {        
    curA = curA ? curA.next : headB;
    curB = curB ? curB.next : headA;    
  }
  
  return curA;
};
```
</p>
    </td>
  </tr>
</table>

</details>
<details>
<summary>
  83. Remove Duplicates from Sorted List
  <a href="https://leetcode.com/problems/remove-duplicates-from-sorted-list/">👊</a>
</summary>

## 문제 회고

이전 `237번 문제`는 별도의 에디터를 사용해서 풀었다고 하였다.

문제 메인 함수를 사용해 연결리스트를 순회해서 head가 마지막에 다다라도 
함수 종류 이후 head는 첫 노드를 다시 가리켰었다.

리트코드 에디터에서는 head가 마지막에 다다르면
마지막 노드를 유지하는 것 같다.

때문에, 연결리스트는 만족해도 head가 마지막을 가리켜서 오답인 경우가 있다.

## 문제 풀이

투 포인터 기법으로 뒤따르는 포인터와 앞서 가는 포인터와 일치할 시 
이전 노드와 앞서 가는 포인터 이후의 노드를 연결해준다.

해당 문제는 **정렬되있지 않은 문제로** 난이도를 올려서 풀면 도움이 많이 될 것이라 생각했다.

<table>
  <tr>
    <th>풀이 설명</th>
    <th>코드</th>
  </tr>
  <tr>
    <td>
<p>

    time:   O(n)

</p>
    </td>
    <td>
<p>

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {  
  let cur = head;
  
  while(cur && cur.next){
    if(cur === cur.next)
      cur.next = cur.next.next;    
    else
      cur = cur.next;    
  }
  
  return head;
};
```
</p>
    </td>
  </tr>
</table>
</details>
<hr/>

## 참고문헌

[연결리스트 참고사진](https://m.blog.naver.com/std_34/221532135313) -- 514

[연결리스트 빅오](https://velog.io/@grinding_hannah/CS-자료구조-Big-O-표기법-링크드-리스트Linked-List) -- grinding_hannah

[Simple Solution at 1290. Convert Binary Number in a Linked List to Integer](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/discuss/461356/JavaScript-Easy-to-understand-bit-operator) -- LeetCode

[Implementation of LinkedList in Javascript](https://www.geeksforgeeks.org/implementation-linkedlist-javascript/) -- GeeksforGeeks

[Remove duplicates from an unsorted linked list](https://www.geeksforgeeks.org/remove-duplicates-from-an-unsorted-linked-list/) -- GeeksforGeeks

[Simple Solution at 160. Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/discuss/324105/Heavily-commented-Javascript-O(n)-in-O(1)-space-solution) -- LeetCode

[Simple Solution at 83. Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/discuss/28722/Javascript-Solution) -- LeetCode
