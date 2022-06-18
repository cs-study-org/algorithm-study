## 목차






## 506. Relative Ranks
### 문제 요약
랭크는 삽입하세요.

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