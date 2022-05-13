# Priority Queue

## Priority Queue의 정의
- 먼저 들어온 순서대로 나가는 것이 아닌 우선순위를 먼저 결정하고 그 순위가 높은 엘리먼트가 먼저 나가는 자료구조
- array, LinkedList, Heap으로 구현이 가능하나 Heap으로 구현하는 것이 일반적이다.
- 내부 구조가 힙으로 구성되어 이진트리 구조를 가진다.
- 삽입 시 -> 마지막 노드에 삽입 후 부모 노드와 비교하여 Swap
- 삭제 시 -> 우선 순위가 가장 높은 루트 노드를 삭제 후 마지막 노드를 루트 노드에 올린 후 자식 노드들과 비교하며 Swap

## JAVA PriorityQueue 클래스 특징
- null 값을 허용하지 않는다.
- 비교할 수 없는 객체를 허용하지 않는다.
- Threa-safe 하지 않는다.
  - 멀티스레드 환경에서는 Prioriy Blocking Queue를 사용하면 된다.
- iterator() 메소드로 순회했을 때 순서를 보장하지 않는다.
- DEFAULT_INITINAL_CAPACITY = 11 이다.(기본 초기 용량)


## Priority Queue의 시간복잡도
| offer | peek | poll | size |
|------|-------|---|---|
| O(log n) | O(1)  | O(log n)  | O(1)  |


## LinkedList Queue vs Priority Queue
자바에서 Queue를 구현할 경우에 LinkedList를 사용하여 구현할 수 있고 Priority Queue를 사용하여 구현할 수 있다.

> 여기서 큐는 FIFO 방식의 자료구조이다.</br>
> 그래프의 넓이 우선 탐색(BFS)에서 사용된다.

**< LinkedList 구현 특징 >**

- add             : O(1)
- remove          : O(1)
- get             : O(n)
- Contains        : O(n)
- iterator.remove : O(1)
- java 1.2에 추가, thread-safe 보장 안함
- 특징 : 데이터를 저장하는 각 노드가 이전 노드와 다음 노드의 상태만 알고 있다.
   - 데이터 추가/삭제시 빠름
   - 데이터 검색시 처음부터 노드를 순화해야 되기 때문에 느림

**< priorityQueue 구현 특징 >**

- offer(입력)   : O(log n)
- peek(get)     : O(1)
- poll(반환)    : O(log n)
- size          : O(1)
- natural order : JVM에서 제공하는 일반적인거와 다를수 있음 순서 ex) 문자는 ASCII 순서로 정렬
- java 1.5 에서 나옴
- 특징 : 일반적은 큐는 FIFO의 구조를 가지지만 자연 네추럴 오더에 따라 정렬
  - Null을 허용하지 않는다.