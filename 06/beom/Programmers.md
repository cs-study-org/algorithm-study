# HashTable

## 목차
## 주차 요금 계산




## 주차 요금 계산
### 문제 요약
**프로그래머스 문제들은 모두 링크로 문제 요약을 대신함**

[프로그래머스 주차요금계산 링크](https://programmers.co.kr/learn/courses/30/lessons/92341?language=java)


### 시간 복잡도 공간복잡도
| time | space |
|------|-------|
| O(n(a+b)+m) | O(n)  |


### 코드
```java
import java.util.*;

class Solution {
    public int[] solution(int[] fees, String[] records) {
        int lastTime = getMin("23:59");
        //현재 파킹 중인 차들
        Map<String, Integer> parking = new HashMap<>();
        //차들의 누적 파킹시간
        Map<String, Integer> times = new HashMap<>();
        //차들 list
        List<String> cars = new ArrayList<>();

        //time = O(n(a+b))  Space = O(n)
        for(String record : records){
            String[] rc = record.split(" ");//rc[0] = 시간, rc[1] = 차량 번호, rc[2] = 출입여부
            int time = getMin(rc[0]);
            String car = rc[1];

            //새로운 차 등장
            if(!cars.contains(car)){
                cars.add(car);
                times.put(car, 0);
            }

            if(parking.containsKey(car)){
                //현재 파킹이 되어 있다면 출차다
                times.put(car,times.get(car)+(time-parking.get(car)));
                parking.remove(car);
            } else{
                //파킹이 안되어 있다면 입차다
                parking.put(car,time);
            }
        }
        int[] ret = new int[cars.size()];
        //차번 순으로 정렬
        //Time = O(m)
        Collections.sort(cars);

        //Time = O(m)  Space = O(1)
        for(int i=0;i<cars.size();i++){
            //기본 요금
            ret[i] = fees[1];
            String car = cars.get(i);
            //누적 시간중 기본요금 시간 제외
            int time = times.get(car)-fees[0];
            //아직 출차가 안되었다면 마지막시간으로 정산
            if(parking.containsKey(car)){
                time = time + (lastTime-parking.get(car));
            }
            //요금 정산
            if(time>0) ret[i] += (Math.ceil(time/(fees[2]*1.0))*fees[3]);
        }
        return ret;

    }

    //시간 String에서 Integer로 변환
    public int getMin(String time){
        String[] t = time.split(":");//t[0] = 23, t[1] = 59
        return Integer.valueOf(t[0])*60+Integer.valueOf(t[1]);//23*60+59
    }
}
```





## 완주하지 못한 선수
### 문제 요약

[완주하지 못한 선수 문제 링크](https://programmers.co.kr/learn/courses/30/lessons/42576)

### 시간 복잡도 공간복잡도
| time | space |
|------|-------|
| O(n+m+k) | O(1)  |

### 코드
```java
import java.util.*;

class Solution {
    public String solution(String[] participant, String[] completion) {
        String answer ="";
        Map<String, Integer> completionMaraton = new HashMap<>();
        //time : O(n)   Space : O(1)
        for(String i :participant){
            //참여한 마라톤 선수의 이름이 안왓다면
            if(completionMaraton.get(i)==null){
                completionMaraton.put(i,1);
            }else{
                completionMaraton.put(i,completionMaraton.get(i)+1);
            }
        }

        //time : O(m)   Space : O(1)
        for(String j:completion){
            completionMaraton.put(j,completionMaraton.get(j)-1);
        }
        
        //time : O(k)   Space : O(1)
        for(String key : completionMaraton.keySet()){
            //값이 0이상이면 완주를 못한 것
            if(completionMaraton.get(key)>0){
                answer = key;
                break;
            }
        }
        return answer;
    }
}
```





## 전화번호 목록
### 문제 요약
[전화번호 목록 문제 링크](https://programmers.co.kr/learn/courses/30/lessons/42577)

### 시간 복잡도 공간복잡도
| time | space |
|------|-------|
| O(n+m) | O(1)  |

### 코드
```java
import java.util.*;

class Solution {
    public boolean solution(String[] phone_book) {
        boolean answer = true;
        int minLength =1000000;
        ArrayList<String> arrayList = new ArrayList<>();
        Set<String> set = new HashSet<>();
        for(String i : phone_book){
            if(minLength > i.length()){
                minLength = i.length();
            }
        }

        for(String j : phone_book){
            arrayList.add(j.substring(0,minLength));
        }

        for(String k : arrayList){
            set.add(k);
        }

        if(set.size() != arrayList.size()){
            answer = false;
        }
        
        return answer;
    }
}
```





## 주차 요금 계산
### 문제 요약

### 시간 복잡도 공간복잡도

### 코드










## 참고 문헌
[주차요금계산 링크](https://velog.io/@ujone/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%A3%BC%EC%B0%A8-%EC%9A%94%EA%B8%88-%EA%B3%84%EC%82%B0-JAVA)