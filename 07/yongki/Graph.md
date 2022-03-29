# 그래프

- [그래프](#그래프)
  - [이론](#이론)
  - [문제 리스트](#문제-리스트)
    - [문제 회고](#문제-회고)
    - [문제 풀이](#문제-풀이)
    - [문제 회고](#문제-회고-1)
    - [문제 풀이](#문제-풀이-1)
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

2. 인접 리스트
    그래프 각각의 정점에 인접한 정점들을 연결 리스트로 표시한 것이다.

    장점은

        정점의 Search 행위에 O(1) 소요된다.

    단점은

        간선의 Search 행위에 O(n) 소요된다.

그래프 순회는

    그래프의 각 vertex를 방문하는 과정이다.

    주로, DFS를 많이 사용하며 스택과 재귀로 구현한다.

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

<hr/>

## 참고 문헌

[Update Javascript matrix issue](https://stackoverflow.com/questions/64669938/updating-an-element-in-javascript-2d-array-updates-entire-column) ━ *Stack overflow*
[Simple Solution at 1791. Find Center of Star Graph](https://leetcode.com/problems/find-center-of-star-graph/discuss/1108868/JavaScript-Map-%2B-Adjacent-List) ━ *LeetCode*