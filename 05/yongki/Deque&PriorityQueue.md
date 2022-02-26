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
    - [문제 풀이](#문제-풀이-2)
    - [문제 회고](#문제-회고-3)
    - [문제 풀이](#문제-풀이-3)
    - [문제 회고](#문제-회고-4)
    - [문제 풀이 1/2 [`Brute force`]](#문제-풀이-12-brute-force)
    - [문제 풀이 2/2 [`#Sliding Window` `#Monotonic Stack`]](#문제-풀이-22-sliding-window-monotonic-stack)
    - [문제 회고](#문제-회고-5)
    - [문제 풀이](#문제-풀이-4)
  - [참고 문헌](#참고-문헌)

## 이론

덱은

    Double-Ended Queue의 줄임말이다.

    주로, 이중 연결리스트 자료구조로 구현하는데, 
      1. 덱 자료구조의 의미에 맞고,
      2. 양쪽끝 추출의 시간 복잡도를 동일시 할 수 있기 때문이라 생각한다.

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

이전 3주차의 `단일 연결리스트 구현`, 4주차의 `원형큐 구현`와 다르게
이중 연결리스트 자료구조를 이용해 원형 덱을 구현하였다.

front와 rear라는 각자의 위치가 있지만,
Insertion / Deletion의 행위에 의해 1개가 될 때 위치를 동기화하는 과정이 매우 어려웠다.

때문에 처음에 구상한 이상적인 구조가 나오지 못했고,
    
<center>
<img width="60%" src="assets/circular-deque-aim.drawio.svg"/>
</center>

교재의 풀이를 참고하여 각자 위치를 나타내는 빈 노드를 거쳐가는 형식의 구조를 사용하니, 동기화 문제가 사라졌다.

빈 노드들은 덱의 사이즈에 영향을 주지 않는다.

<center>
<img width="70%" src="assets/circular-deque-avoid.drawio.svg"/>
</center>

### 문제 풀이

빅오를 한눈에 보자면 다음과 같다.

|       | `insertFront` | `insertLast` | `deleteFront` | `deleteLast` | `getFront` | `getRear` | `isEmpty` | `isFull` |
| :---: | :-----------: | :----------: | :-----------: | :----------: | :--------: | :-------: | :-------: | :------: |
| time  |    `O(1)`     |    `O(1)`    |    `O(1)`     |    `O(1)`    |   `O(1)`   |  `O(1)`   |  `O(1)`   |  `O(1)`  |
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
  <a href="https://www.acmicpc.net/problem/1021">👊</a>  
</summary>

### 문제 회고

`641번`의 자료구조 구현 파일을 그대로 사용하였다.

### 문제 풀이

문제 풀이는 `src\1021`폴더에서 확인할 수 있다.

**문제 설명**

    Input:  10 3
            2 9 5

    Output: 8

    a. 10은 덱에 다음과 같이 채워져야 함을 의미한다.
    
      [HEAD] size: 10   elements: undefined → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10 → undefined →      

    b. 3은 [2, 9, 5] 즉, 제거할 요소들의 개수이다.

    c. 루프에 따른 결과값
    
      [element = 2] 일때, 덱의 앞으로 회전해야 효율적이다.
      회전한 후,  
        [HEAD] size: 10   elements: undefined → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10 → 1 → undefined →

      제거한다.
        [HEAD] size: 9    elements: undefined → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10 → 1 → undefined →        

      [element = 9] 일때, 덱의 뒤에서 회전해야 효율적이다.
      회전한 후,          
        [HEAD] size: 9    elements: undefined → 9 → 10 → 1 → 3 → 4 → 5 → 6 → 7 → 8 → undefined →

      제거한다.
        [HEAD] size: 8    elements: undefined → 10 → 1 → 3 → 4 → 5 → 6 → 7 → 8 → undefined →

문제의 핵심은

    a. 회전의 기준이다.

       회전의 기준은 (deque.size) / 2이고, 홀수 일때, 올림한다.

        1 → 2 → 3이 있을때 올림값을 한 2를 회전의 기준으로 잡으면
        1, 2는 앞으로 3은 뒤로 돈다.
        
        이게 빠르다고 한다.

    b. 삭제하는 곳이다.

        1 → 2 → 3 → 4 → 5에서 3에 접근할때,

        덱의 뒤에서 접근여 2번이 나오더라도,

        4 → 5 → 1 → 2 → 3

        앞에서 삭제해야하기 때문에 1번을 더 이동시켜줘야한다.

        3 → 4 → 5 → 1 → 2
        
<dl><dt>
문제에서 제공한 모든 예제에 출력이 정상적으로 나왔지만, 제출이 되지 않았다.
</dt></dl>
</details>

<details>
<summary>
  2346. 풍선 터뜨리기
  <a href="https://www.acmicpc.net/problem/2346">👊</a>  
</summary>

### 문제 회고

`1021번`과 유사하다.

### 문제 풀이

문제 풀이는 `src\2346`폴더에서 확인할 수 있다.

**문제 설명**

    Input:  5
            3 2 1 -3 -1

    Output: 1 4 5 3 2
  
    a. head를 삭제하고,
      size: 5   elements: 3 → 2 → 1 → -3 → -1 →

    b. head value만큼 회전시킨다.
      size: 4   elements: -3 → -1 → 2 → 1 →

      ...
      size: 3   elements: -1 → 2 → 1 →
      size: 2   elements: 1 → 2 →
      size: 1   elements: 2 →
    
    c. Ouput은 삭제된 head가 Input의 몇 번째 요소인지를 배열로 나타낸다.

</details>

<details>
<summary>
  11003. 최솟값 찾기
  <a href="https://www.acmicpc.net/problem/11003">👊</a>  
</summary>

### 문제 회고

문제만 보면 힙으로 해결하는 문제같지만, 어떻게 최솟값을 정의하는가의 문제라서 힙 자료구조는 필요없었다.

### 문제 풀이 1/2 [`Brute force`]

    Input:  nums = [1, 5, 2, 3, 6, 2, 3, 7, 3, 5, 2, 6]
            ※ 표준 입출력 과정을 거치면서 배열로 받을 수 밖에 없다.

            limit = 3

    배열을 순회하면서, 
    최솟값을 색출할 수 있는 범위를 찾아낸 뒤, 최솟값을 찾는다.

    [idx = 3] range idx = 0, 1
              range     = 1, 5 
              min       = 1

    Output: 1 1 1 2 2 2 2 2 3 3 2 2

Output은 만족했지만, 시간 초과 에러가 났고, topic과 연관 없게 푼 풀이였다.

```js
function findMinTargets(targets, start, end) {
  const result = [];  

  for(let i = start; i <= end; i++){

    if(i < 0)
      continue;

    result.push(targets[i]);
  }

  return result;
}

/**
 * time:    O(n)
 *          → findMin...  O(less n)
 * 
 * space:   O(n)
 */
(function main() {
  ... stdin processing

  // +++ Start
  const result = [];

  for (let i = 0; i < size; i++){
    const start = i - limit + 1;
    const end = i;

    const min = Math.min(...findMinTargets(targets, start, end));
    result.push(min);
  }

  console.log(result.join(' '));
})();
```

### 문제 풀이 2/2 [`#Sliding Window` `#Monotonic Stack`]

    Input:  nums = [1, 5, 2, 3, 6, 2, 3, 7, 3, 5, 2, 6]        

            limit = 3

            min idx = idx - limit + 1 (단, min idx > 0)
    
  배열을 순회하면서, min idx부터 순회하는 현재 인덱스까지 limit 만큼의 범위까지 확인한다.

  즉, limit 만큼만 저장하는 자료구조가 필요하다.

    [num = 1] pass

    [num = 5] pass

    [num = 2] pass    

    [num = 3] [5, 2, 3]

    [num = 6] [2, 3, 6]

  덱이 적합한데, limit 까지만 뒤에서 받고,
  지난 인덱스의 범위는 앞에서 삭제할 수 있기 때문이다.

  여기서, 덱은 Monotonic Stack 처럼 오름차순을 유지하도록 한다.

    1 → 5 에 2가 들어올 경우, 2보다 큰 요소를 모두 제거한 뒤, 넣는다.

    [num = 1] 1 → 2

    [num = 5] 1 → 2 → 5

문제 풀이는 `src\11003`폴더에서 확인할 수 있다.

<dl><dt>
Output이 미세하게 다르게 나와서 원인 파악 중이다.
</dt><dl>

</details>

<details>
<summary>
  1046. Last Stone Weight
  <a href="https://leetcode.com/problems/last-stone-weight/">👊</a>  
</summary>

### 문제 회고

`7662번`에서 구현한 자료구조가 필요하기 때문에 별도의 소스 코드에 기술하였다.

처음 접근 방식은 문제의 조건들을 제대로 확인하지 못하고 풀었을 때이다.

<dl><dt>
If x != y, the stone of weight x is destroyed, <br/>
and the stone of weight y has new weight y - x.
</dt><dl>
<br/>

이를 확인하지 못하고 접근했을 때는 다음과 같다.

    1. 힙의 최댓값(루트)을 조회 하고, 이보다 1작은 값이 힙에 있는지 검색한다.

    2. 없다면, 다음 루프를 돌고
       있다면, 최댓값을 힙에서 제거한다.

    다만, 2가지 문제가 있었다. 
    
        a. 이전 문제에서 작동이 검증된 findIndex()가 제대로 작동하지 않았다.

        b. 만약 findIndex()가 제대로 작동해서

            [ 8, 7, 4, 1, 2, 1, [length]: 6 ]가

            [ 1, 4, 1, 2, 1,    [length]: 5 ]로 되었다면, 
            
          이를 다시 힙 정렬해두기가 내가 구현한 자료구조에서는 어렵다.

          만약, 1로 바뀐 요소가 힙의 중간에 있을때 이를 bubbleUp 할지 bubbleDown 할지 확인하기 어렵기 때문이다.

```js
var lastStoneWeight = function (stones) {
  const maxHeap = new MaxHeap();

  ... array to heapify

  for (let i = 0; i < maxHeap.heap.length; i++) {    
    const root = maxHeap.getRoot();

    const lessIdx = maxHeap.findIndex(root - 1);

    if (lessIdx === undefined)
      continue;
    
    maxHeap.heap[lessIdx] == 1;
    maxHeap.extract();
  }

  return maxHeap.heap.length;
};
```

### 문제 풀이

문제 풀이는 `src\1046.js`에서 확인할 수 있다.

</details>

<hr/>

## 참고 문헌

<details>
<summary>자료구조 이론</summary>
<br/>

[Heap 특성](https://1ilsang.dev/2019-10-21/algorithm/heap) ━ *1ilsang*
</details>

<details>
<summary>자료구조 구현</summary>
<br/>

[Doubly LinkedList 구현](https://makasti.tistory.com/96) ━ *두콩*

[Heap 삭제 과정](https://www.geeksforgeeks.org/insertion-and-deletion-in-heaps/) ━ *GeeksforGeeks*

[Heap 시각화](https://visualgo.net/en/heap) ━ *VisuAlgo*

[Javascript Heap 구현](https://nyang-in.tistory.com/153) ━ *냥인*

[Javascript 객체 상속](https://www.zerocho.com/category/JavaScript/post/573d812680f0b9102dc370b7) ━ *ZeroCho*
</details>

<details>
<summary>풀이 참고</summary>
<br/>

[Simple Solution at 1021. 회전하는 큐](https://wiselog.tistory.com/126) ━ *지혜로운 개발로그*

[Simple Solution at 11003. 최솟값 찾기](https://wooooooak.github.io/algorithm/2018/12/03/백준11003번문제/) ━ *쾌락코딩*

[Simple Solution at 1046. Last Stone Weight](https://github.com/cs-study-org/algorithm-study/blob/7ad1cda101186ca7b18b2488ded242ea84d7bdc0/05/JiYongKim/Leetcode.md) ━ *Github*
</details>

<details>
<summary>백준 제출</summary>
<br/>

[Javascript 표준 입출력과 백준 제출 팁](https://overcome-the-limits.tistory.com/25) ━ *Plus Ultra*

[Javascript 표준 입출력과 백준 이슈](https://broadway.tistory.com/entry/자바스크립트-백준-입력받는법) ━ *이너멜*

[백준 제출 형식](https://velog.io/@mttw2820/백준-7662.-이중-우선순위-큐) ━ *mttw2820*
</details>