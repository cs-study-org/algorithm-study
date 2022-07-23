## 목차
- 506. Relative Ranks
- 1337. The K Weakest Rows in a Matrix




## 506. Relative Ranks
### 문제 요약
score의 수가 가장 높은 순서대로 등수이다.

1등에게는 Gold Medal

2등에게는 Silver Medal

3등에게는 Bronze Medal

4등에게는 4

이런식으로 문자열을 넣어서 반환해라

### 시간 복잡도 공간복잡도
| time | space |
|------|-------|
| O(n log n) | O(1)  |


### 코드
```java
import java.util.Collections;
import java.util.HashMap;
import java.util.PriorityQueue;

class Solution {
    public String[] findRelativeRanks(int[] score) {
        PriorityQueue<Integer> priorityQueue = new PriorityQueue<>(Collections.reverseOrder());

        for(int i:score){
            priorityQueue.add(i);
        }

        HashMap<Integer,String> map = new HashMap<>();
        int index =1;
        while(!priorityQueue.isEmpty()){
            if(index==1){
                map.put(priorityQueue.poll(),"Gold Medal");
            }else if(index ==2){
                map.put(priorityQueue.poll(),"Silver Medal");
            } else if (index == 3) {
                map.put(priorityQueue.poll(),"Bronze Medal");
            }else{
                map.put(priorityQueue.poll(),Integer.toString(index));
            }
            index++;
        }
        
        String[] result = new String[score.length];
        for(int i=0;i< score.length;i++){
            result[i] = map.get(score[i]);
        }
        return result;
    }
}
```



## 1337. The K Weakest Rows in a Matrix
### 문제 요약
2차원 배열에서 1은 군인이고 0은 사람이다. 군인은 가장 앞에 있어야 한다.

군인이 가장 적은 배열이 있는 인덱스를 반환하자.

k개 까지만 인덱스를 반환하면 된다.

### 시간 복잡도 공간복잡도
| time | space |
|------|-------|
| O(n^2) | O(1)  |


### 내가 푼 코드(틀림)

> 해당 코드는 key값을 배열에 넣어야하는데 value값으로 ke값을 조회해야하는 문제로 막힘....


```java
import java.util.HashMap;
import java.util.PriorityQueue;

class Solution {
    public int[] kWeakestRows(int[][] mat, int k) {
        HashMap<Integer, Integer> map = new HashMap<>();
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        int total =0;
        int[] result = new int[k];

        for(int i=0;i<mat.length;i++){
            for(int j=0;j<mat[i].length;j++){
                total += mat[i][j];
            }
            map.put(i,total);
            total = 0;
        }

        for(int i : map.keySet()){
            pq.add(map.get(i));

        }

        for(int i=0;i<k;i++){
            int a = pq.remove();
            result[i] = map.get(a);
        }
        return result;
    }
}
```

### 다른 사람의 잘푼 코드
```java
public int[] kWeakestRows(int[][] mat, int k) {
        
        Queue<Integer> queue = new PriorityQueue<>();
            
        int count = 0;
        for(int i=0;i<mat.length;i++){
            count = 0;
            for(;count<mat[0].length;count++){
                if(mat[i][count] == 0){
                    break;
                }
            }
            
			//since max length of array is 100
            queue.add(count * 100000 + i);
        }
        
        int[] ans = new int[k];
        
        for(int i=0;i<k;i++){
            ans[i] = queue.remove() % 100000;
        }
        
        return ans;
    }
```
