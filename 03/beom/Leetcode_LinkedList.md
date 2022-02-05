# LinkedList 리트코드 문제

## 목차
## 1290. Convert Binary Number in a Linked List to Integer



## 1290. Convert Binary Number in a Linked List to Integer

### 문제 요약
LinkedList의 데이터값은 0또는 1이고 이 LinkedList의 수를 나열한 이진수를 10진수로 구해라

### 문제 풀이
1. LinkedList의 헤드를 입력받음 ex) [1,0,1]
2. LinkedList를 for문으로 하나씩 탐색하되 2^연결리스트길이를 곱하여 새로운 변수에 대입


### 코드
```java
public class Solution {

    public static int getDecimalValue(ListNode head) {
        int res = 0;//10진수의 값을 더할 변수
        while(head != null){//ListNode의 끝까지 반복
            res = res*2;//값을 2곱함
            res += head.val;//ListNode의 데이터값을 더함
            head = head.next;//다음 노드로 연결
        }
        return res;
    }
}
```

### 풀이 해설
자바에 내장된 LinkedList를 사용하려고 했으나 LinkNode class를 제공해주어 head를 다음 head로 옮기며 *2를 수행함

### 시간복잡도
O(n)

### 다른 풀이
[연결리스트 값을 문자열로 변환후 2진수를 십진수로 변환](https://jaime-note.tistory.com/168)