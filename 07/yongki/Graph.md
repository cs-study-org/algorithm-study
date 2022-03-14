# 그래프

- [그래프](#그래프)
  - [이론](#이론)
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

        간선의 Search 행위에 O(1) 소요된다.        

    단점은

        간선의 수와 무관하게 n²개의 메모리 공간이 필요하다.

2. 인접 리스트

그래프 순회는

    그래프의 각 vertex를 방문하는 과정이다.

    주로, DFS를 많이 사용하며 스택과 재귀로 구현한다.

</details>

## 참고 문헌

[Update Javascript matrix issue](https://stackoverflow.com/questions/64669938/updating-an-element-in-javascript-2d-array-updates-entire-column) ━ *Stack overflow*