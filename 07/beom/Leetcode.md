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

## 997. Find the Town Judge
### 문제 요약
마을 심판 찾기

n = 사람의 수, trust : 신뢰를 의미하는 이중 배열


### 시간복잡도 공간 복잡도
| time | space |
|------|-------|
| O(n) | O(n)  |


### 코드
```java
import java.util.ArrayList;


class Solution {

    public int findJudge(int n, int[][] trust) {
        ListGraph listGraph1 = new ListGraph(n);
        ListGraph listGraph2 = new ListGraph(n);

        for(int[] i : trust){
            listGraph1.insertEdge(i[0],i[1]);
            listGraph2.insertEdge(i[1],i[0]);
        }

        for(int j=1; j<n+1;j++){
            if(listGraph1.getNode(j).size() == 0 && listGraph2.getNode(j).size() == n-1){
                return j;
            }
        }
        return -1;
    }

    //Graph 클래스 생략 => 해당 클래스 위치 : ADT/ListGraph.java
}
```

### 문제 회고
> Input: n = 3, trust = [[1,3],[2,3]]
> Output: 3

이 테스트 케이스를 통과하지 못했다.

`L67`의 if를 타는데 j를 리턴하지 못한다...

**문제 해결**

위에 문제는 내가 테스트 테이스를 잘못 읽어 발생한 것 이였다.

> Input: n = 3, trust = [[1,2],[2,3]]
> Output: -1

이 테스트 케이스를 돌려놓고 위에 테스트 케이스인줄 알았다.

마을의 심판은 모든 사람에게 신뢰를 받아야 하므로 그래프를 하나더 만들어 그 마을 심판이 모든 사람들에게 신뢰를 받고 있는지를 추가로 검증하여 문제를 해결




## 997. Find the Town Judge
### 문제 요약
그래프에 경로가 있는지 확인

양방향 그래프가 있을 때

n = 정점의 수, edges : 양방향 간선, source : 정점의 시작 번호, destination : 연결되었는지 안되었는지 확인
### 시간복잡도 공간 복잡도
### 코드








## 997. Find the Town Judge
### 문제 요약
### 시간복잡도 공간 복잡도
### 코드






## 997. Find the Town Judge
### 문제 요약
### 시간복잡도 공간 복잡도
### 코드