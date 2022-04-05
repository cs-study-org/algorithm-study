# 최단 경로

## 이론

<!-- <details> -->
<br/>

최단 경로 알고리즘은 대표적으로 2가지가 있다.

1. 다익스트라 알고리즘    

    <img width="50%" src="assets/dijkstra.png"/>

    그래프는 인접 행렬을 사용하는데, 간선을 나타내는 자료구조를 
    
    정점 수 만큼의 고정 배열이 아닌 

        {
          'A': [0, 4, 1, Infinity, Infinity],
          'B': [Infinity, 0, Infinity, Infinity, 4],
          'C': [Infinity, 2, 0, 4, Infinity],
          'D': [Infinity, Infinity, Infinity, 0, 4],
          'E': [Infinity, Infinity, Infinity, Infinity, 0]
        }
        
    인접한 정점만 나타낸 객체를 사용하였다.

        {
          A: { B: 4, C: 1 },
          B: { E: 4 },
          C: { B: 2, D: 4 },
          D: { E: 4 },
          E: {}
        }

    고정 배열을 사용할 경우 인덱스로 정점을 유추하기 어려웠기 때문이다.

</details>

<hr/>

## 참고 문헌

[Dijkstra 구현](https://levelup.gitconnected.com/finding-the-shortest-path-in-javascript-dijkstras-algorithm-8d16451eea34) ━ *Level Up Coding*