# 연결리스트

- [연결리스트](#연결리스트)
  - [개념](#개념)
  - [문제 리스트](#문제-리스트)
    - [문제 풀이 1/2 [`문자열 조작`]](#문제-풀이-12-문자열-조작)
    - [문제 풀이 2/2 [`비트 연산`]](#문제-풀이-22-비트-연산)
    - [문제 회고](#문제-회고)
    - [문제 풀이](#문제-풀이)
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
const util = require('util')
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
assert.deepEqual(printArray(list.head), [4, 1, 9]);
console.log(util.inspect(list, {showHidden: false, depth: null}))

const list2 = new LinkedList([4, 5, 1, 9]);

deleteNode(list2.head, new ListNode(1));
assert.deepEqual(printArray(list2.head), [4, 5, 9]);
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

[Simple Solution at 1290. Convert Binary Number in a Linked List to Integer](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/discuss/461356/JavaScript-Easy-to-understand-bit-operator) -- poppinlp

[Implementation of LinkedList in Javascript](https://www.geeksforgeeks.org/implementation-linkedlist-javascript/) -- GeeksforGeeks
