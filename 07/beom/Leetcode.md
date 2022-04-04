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

## 997. Find the Town Judge(틀림)
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
        ListGraph listGraph = new ListGraph(n);

        for(int[] i : trust){
            listGraph.insertEdge(i[0],i[1]);
        }

        for(int j=1; j<n+1;j++){
            if(listGraph.getNode(j).size() == 0){
                //System.out.println(j + "는 " + listGraph.getNode(j));
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




## 997. Find the Town Judge
### 문제 요약
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
