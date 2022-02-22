# 덱 & 우선순위 큐 백준 문제

## 목차
- Deque
  - 1021. 회전하는 큐



# Deque
## 1021. 회전하는 큐

### 문제 요약
해당 큐는 세가지 기능을 가지고 있다.

1. 첫번째 원소를 뽑는다.
2. 왼쪽으로 한칸 이동시킨다.
3. 오른쪽으로 한칸 이동킨다.

큐에서 선택한 숫자를 뽑는데 **2,3번기능을 최소**로 해야한다.

2,3기능이 동작하느 횟수를 반환하시오

### 시간복잡도 공간복잡도
| time | space |
|------|-------|
| O(n^2) | O(n)  |


### 코드
```java
import java.util.LinkedList;
import java.util.Scanner;

public class Baekjoon {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        LinkedList<Integer> deque = new LinkedList<>();

        int count = 0;//2,3번 연산 횟수

        int capacity = in.nextInt();//덱의 크기
        int Num = in.nextInt();//고르는 수의 갯수

        int[] pickNum = new int[Num]; //고르고자하는 수를 담은 배열

        for(int i=0;i<capacity;i++){
            deque.offer(i+1);
        }

        for(int i=0;i<Num;i++){
            pickNum[i] = in.nextInt();
        }

        for(int i=0;i<Num;i++){
            int targetIndex = deque.indexOf(pickNum[i]);
            int halfIndex = deque.size()/2;

            if(targetIndex>halfIndex){
                while(pickNum[i]!=deque.getFirst()){
                    deque.offerFirst(deque.pollLast());
                    count++;
                }
            }
            else{
                while (pickNum[i]!=deque.getFirst()){
                    deque.offerLast(deque.pollFirst());
                    count++;
                }
            }
            deque.pollFirst();
        }
        
        System.out.println(count);

    }
}
```




### 문제 요약

### 시간복잡도 공간복잡도

### 코드






### 문제 요약

### 시간복잡도 공간복잡도

### 코드









# Priority Queue


### 문제 요약

### 시간복잡도 공간복잡도

### 코드