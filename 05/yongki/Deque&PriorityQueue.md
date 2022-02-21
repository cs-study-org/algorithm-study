# 덱, 우선순위 큐

- [덱, 우선순위 큐](#덱-우선순위-큐)
  - [이론](#이론)
  - [구현문제 리스트](#구현문제-리스트)
    - [문제 회고](#문제-회고)
    - [문제 풀이](#문제-풀이)
    - [문제 회고](#문제-회고-1)
    - [문제 풀이](#문제-풀이-1)
  - [문제 리스트](#문제-리스트)
    - [문제 회고](#문제-회고-2)
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

빅오를 한눈에 보자면 다음과 같다.

|       | `insertFront` | `insertLast` | `deleteFront` | `deleteLast` | `getFront` | `getRear` | `isEmpty` | `isFull` |
| :---: | :-----------: | :----------: | :-----------: | :----------: | :--------: | :-------: | :-------: | :------: |
| time  |    `O(1)`     |    `O(n)`    |    `O(1)`     |    `O(n)`    |   `O(1)`   |  `O(n)`   |  `O(1)`   |  `O(1)`  |
| space |    `O(1)`     |    `O(1)`    |    `O(1)`     |    `O(1)`    |   `O(1)`   |  `O(1)`   |  `O(1)`   |  `O(1)`  |

문제 풀이는 `src\adt\CircularDeque.js`에서 확인할 수 있다.

</details>

<details>
<summary>
  7662. 이중 우선순위 큐
  <a href="https://www.acmicpc.net/problem/7662">👊</a>  
</summary>

### 문제 회고

힙 자료구조 기반으로 구현하였다.

`이중 우선순위 큐`라는 단일 자료구조를 만든 것이 아닌,
`최대힙`, `최소힙` 총 2개의 자료구조를 이용하였다.

이 2개의 자료구조 구현의 전체적인 틀은 참고를 하였고, 문제 조건에 필요한 메소드 몇개만 직접 구현하였다.

### 문제 풀이

빅오를 한눈에 보자면 다음과 같다.

|       |  `insert`  | `extract`  | `findIndex` |  `delete`  |
| :---: | :--------: | :--------: | :---------: | :--------: |
| time  | `O(log n)` | `O(log n)` | `O(log n)`  | `O(log n)` |
| space |   `O(1)`   |   `O(1)`   |   `O(1)`    |   `O(1)`   |

문제 풀이는 `src\7662`폴더에서 확인할 수 있다.

- `7662.js`가 문제 제출 형식을 맞춘 파일이다.
- `stdin-7662`는 문제에서 제공한 입력 예제이다.
    > 파일 형식을 사용한 이유는 노드 환경에서 표준 입출력을 받는 작업이 어렵기 때문이다.

<dl><dt>
문제에서 제공한 출력 예제가 정상적으로 나왔지만, 제출에서 메모리 초과 오류가 있다.
<br/>
</dt></dl>                

    Ouput:          EMPTY
                    333 -45

    Display Heap:   MaxHeap { heap: [ 333, -642, -45, [length]: 3 ] }
                    MinHeap { heap: [ -45, 45, 333, [length]: 3 ] }

</details>

## 문제 리스트

<details>
<summary>
  1021. 회전하는 큐
  <a href="https://www.acmicpc.net/problem/7662">👊</a>  
</summary>

### 문제 회고

`641번`의 자료구조 구현 파일을 그대로 사용하였다.

문제 풀이는 `src\1021`폴더에서 확인할 수 있다.

</details>

<hr/>

## 참고 문헌

[My Solution at 707. Design Linked List](https://github.com/cs-study-org/algorithm-study/blob/master/03/yongki/LinkedList.md) ━ *GitHub*

[My Solution at 622. Design Circular Queue](https://github.com/cs-study-org/algorithm-study/blob/master/04/yongki/src/circularQueue.js) ━ *GitHub*

[Simple Solution at 1021. 회전하는 큐](https://wiselog.tistory.com/126) ━ *지혜로운 개발로그*

[Heap 특성](https://1ilsang.dev/2019-10-21/algorithm/heap) ━ *1ilsang*

[Heap 삭제 과정](https://www.geeksforgeeks.org/insertion-and-deletion-in-heaps/) ━ *GeeksforGeeks*

[Heap 시각화](https://visualgo.net/en/heap) ━ *VisuAlgo*

[Javascript Heap 구현](https://nyang-in.tistory.com/153) ━ *냥인*

[Javascript 객체 상속](https://www.zerocho.com/category/JavaScript/post/573d812680f0b9102dc370b7) ━ *ZeroCho*

[Javascript 표준 입출력과 백준 제출 팁](https://overcome-the-limits.tistory.com/25) ━ *Plus Ultra*

[Javascript 표준 입출력과 백준 이슈](https://broadway.tistory.com/entry/자바스크립트-백준-입력받는법) ━ *이너멜*

[백준 제출 형식](https://velog.io/@mttw2820/백준-7662.-이중-우선순위-큐) ━ *mttw2820*