# Graph

## 목차
## 1791. Find Center of Star Graph


## 1791. Find Center of Star Graph
### 문제 요약
별모양 그래프가 만들어진다.

즉, 중심 정점이 있고 중심 정점과 다른 정점은 모두 간선이 존재한다.


### 시간복잡도 공간 복잡도
| time | space |
|------|-------|
| O(1) | O(1)  |


### 코드
```java
class Solution {
    public int findCenter(int[][] edges) {
        int edge1_x = edges[0][0];//간선1의 x
        int edge1_y = edges[0][1];//간선2의 y

        int edge2_x = edges[1][0];//간선2의 x
        int edge2_y = edges[1][1];//간선2의 y

        if(edge1_x == edge2_x || edge1_y == edge2_x){
            return edge2_x;
        }
        else{
            return edge2_y;
        }
    }
}
```