# 그래프

- [그래프](#그래프)
  - [이론](#이론)
  - [문제 리스트](#문제-리스트)
    - [문제 회고](#문제-회고)
    - [문제 풀이](#문제-풀이)
    - [문제 회고](#문제-회고-1)
    - [문제 풀이](#문제-풀이-1)
    - [문제 회고](#문제-회고-2)
    - [문제 풀이](#문제-풀이-2)
  - [참고 문헌](#참고-문헌)

## 이론

<details>
<br/>

그래프는 2가지로 표현할 수 있다.

1. 인접 행렬    
   
    그래프의 정점 수가 n이라면, n x n의 2차원 배열 M을 생성한다.

       if(간선(vertexA, vertexB)가 존재하면)
          M[vertexA][vertexB] = 1
       else                                  
          M[vertexA][vertexB] = 0

    장점은

       정점과 간선의 Search 행위에 O(1) 소요된다.

    단점은

       간선의 수와 무관하게 n²개의 메모리 공간이 필요하다.

    필수 메소드의 시·공간 복잡도는

    |       | `insertVertex` | `insertEdge` | `deleteVertex` | `deleteEdge` | `adjacent` |
    | :---: | :------------: | :----------: | :------------: | :----------: | :--------: |
    | time  |    `O(n²)`     |    `O(1)`    |     `O(1)`     |    `O(1)`    |   `O(1)`   |
    | space |     `O(1)`     |    `O(1)`    |     `O(1)`     |    `O(1)`    |   `O(1)`   |

2. 인접 리스트
    
    배열의 인덱스는 그래프의 정점을 나타내며
    
    배열의 요소는 각각의 정점에 인접한 정점들을 연결 리스트로 표시한다.

    장점은

       정점의 Search 행위에 O(1) 소요된다.

    단점은

       간선의 Search 행위에 O(n) 소요된다.

    필수 메소드의 시·공간 복잡도는

    |       | `insertVertex` | `insertEdge` | `deleteVertex` | `deleteEdge` | `adjacent` |
    | :---: | :------------: | :----------: | :------------: | :----------: | :--------: |
    | time  |     `O(1)`     |    `O(1)`    |     `O(1)`     |    `O(n)`    |   `O(n)`   |
    | space |     `O(n)`     |    `O(1)`    |     `O(1)`     |    `O(1)`    |   `O(1)`   |

그래프 탐색은

|                       |                                                                   DFS                                                                    |                                                                          BFS                                                                           |
| :-------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------: |
|         정의          |                                                     그래프에서 깊은 부분을 먼저 탐색                                                     |                                                         시작 정점에서 가까운 정점을 먼저 탐색                                                          |
|       동작 과정       | 1. 시작 정점을 기억 공간에 저장<br/>  2. 인접한 정점 중에 방문하지 않은 정점을 탐색 대상으로 재귀 호출<br/>  3. 목표 정점을 찾을 시 종료 | 1. 인접한 정점 중에 방문하지 않은 정점을 모두 기억 공간에 저장<br/>  2. 기억 공간에서 정점을 꺼내 탐색의 대상이 되며<br/>  3. 목표 정점을 찾을 시 종료 |
|     알고리즘 구현     |                                                              재귀 또는 스택                                                              |                                                                           -                                                                            |
|    정점 기억 공간     |                                                             집합 또는 리스트                                                             |                                                                           큐                                                                           |
| 정점 기억 공간의 요소 |                                      재귀 사용시, 방문한 정점<br/> 스택 사용시, 방문하지 않은 정점                                       |                                                                   방문하지 않은 정점                                                                   |
|         장점          |                                                  비교적 적은 정점을 기억하는 공간 필요                                                   |                                                      시작 정점에서 목표 정점까지 최단 경로를 보장                                                      |
|         단점          |                 최단 경로를 보장하지 않음<br/>  목표에 이르는 경로가 다수일 때, DFS는 경로를 찾으면 탐색을 종료하기 때문                 |                                                  경로가 매우 길 경우, 많은 정점을 기억하는 공간 필요                                                   |  |

</details>

## 문제 리스트

<details>
<summary>1791. Find Center of Star Graph
  <a href="https://leetcode.com/problems/find-center-of-star-graph/">👊</a>
</summary>

### 문제 회고

처음 접근 방법은 인접 행렬을 사용하였다.

행렬에 표시된 간선의 합이 제일 큰 배열의 정점을 구하면 된다고 생각하였다.

하지만 `Time Limit Exceeded`에러가 발생하여서 인접 리스트를 사용하여 해결하였다.

연결 리스트의 size 필드를 활용하면 더 간단히 해결할 수 있었다.

### 문제 풀이

> `src\1791.js`에서 확인할 수 있다.

</details>

<details>
<summary>997. Find the Town Judge
  <a href="https://leetcode.com/problems/find-the-town-judge/">👊</a>
</summary>

### 문제 회고

테스트케이스들을 겪으면서 문제 의도를 이해할 수 있었다.

관련 파일에 명시한 테스트케이스들의 output을 확인하면 문제 의도를 이해할 수 있다.

### 문제 풀이

> `src\997.js`에서 확인할 수 있다.

</details>

</details>

<details>
<summary>1971. Find if Path Exists in Graph
  <a href="https://leetcode.com/problems/find-if-path-exists-in-graph/">👊</a>
</summary>

### 문제 회고

인접 행렬을 사용하니 정점의 수²의 메모리 공간 사용으로 `out of memory`의 런타임 에러가 발생했다.

인접 리스트를 사용하니 연결 리스트를 순회하여 인접한 정점을 가져와서 `Time Limit Exceeded` 에러가 발생했다.

따라서, 절충안으로 인접 행렬을 사용하되 각 정점의 배열에는 인접한 정점을 넣게 하였다.

<dl><dt>
하지만, <code>Time Limit Exceeded</code>에러가 다시 발생되어 해결 중이다.
</dt><dl>

### 문제 풀이

DFS를 사용하였다.

> `src\1971.js`에서 확인할 수 있다.

</details>

<hr/>

## 참고 문헌

[Update Javascript matrix issue](https://stackoverflow.com/questions/64669938/updating-an-element-in-javascript-2d-array-updates-entire-column) ━ *Stack overflow*

[Simple Solution at 1791. Find Center of Star Graph](https://leetcode.com/problems/find-center-of-star-graph/discuss/1108868/JavaScript-Map-%2B-Adjacent-List) ━ *LeetCode*

[DFS 장·단점](https://mjmjmj98.tistory.com/94) ━ *Live passionate*

[BFS 장·단점](https://mjmjmj98.tistory.com/95) ━ *Live passionate*

[Tree 구현](https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/) ━ *GeeksforGeeks*