# Stack & Queue

## 목차
## 1381. Design a Stack With Increment Operation
## 622. Design Circular Queue
## 1614. Maximum Nesting Depth of the Parentheses
## 1598. Crawler Log Folder
## 496. Next Greater Element I
## 1700. Number of Students Unable to Eat Lunch
## 2073. Time Needed to Buy Tickets



## 1381. Design a Stack With Increment Operation

### 문제 요약
Stack을 구현하시오

### 시간 복잡도 공간복잡도
|       | push | pop  | increment |
| :---: |:----:|:----:|:---------:|
| time  | O(1) | O(1) |   O(n)    |
| space | O(1) | O(1) |   O(1)    |

### 코드
```java
class CustomStack {
    private final int maxSize;//스택의 용량 수
    private final int[] arr;//스택으로 사용할 빈배열
    private int size;//스택의 요소 개수

    //생성자
    public CustomStack(int maxSize) {
        this.arr = new int[maxSize];
        this.maxSize = maxSize;
        this.size = 0;
    }

    public void push(int x) {
        if (size == maxSize) return;
        arr[size] = x;
        size++;
    }

    public int pop() {
        if (size == 0) {
            return -1;
        }
        int res = arr[--size];//스택의 가장 위에 요소를 빼고 리턴
        return res;
    }

    public void increment(int k, int val) {
        if(k> maxSize) k= maxSize;

        for (int i = 0; i < k; i++) {
            arr[i] += val;
        }
    }
}
```


## 622. Design Circular Queue
### 문제 요약
Queue를 구현하시오

### 시간복잡도 공간 복잡도
|       | enQueue | deQueue | Front | Rear | isEmpty | isFull |
| ----- |---------|---------|-------|------|---------|--------|
| time  | O(1)    | O(1)    | O(1)  | O(1) | O(1)    | O(1)   |
| space | O(1)    | O(1)    | O(1)  | O(1) | O(1)    | O(1)   |


### 코드
```java
class MyCircularQueue {
    class Node{
        Node next;
        int val;

        Node(int val){
            this.val = val;
            this.next = null;
        }
    }

    Node head;
    Node tail;
    int size;
    int max;

    public MyCircularQueue(int k) {
        this.head =null;
        this.tail = null;
        this.max = k;
        this.size = 0;
    }

    public boolean enQueue(int value) {
        Node newNode = new Node(value);
        if(size == max){
            return false;
        }
        else{
            if(size ==0){
                head = newNode;
                tail = newNode;
            }else{
                tail.next = newNode;
                tail = newNode;
            }
            size++;
            return true;
        }
    }

    public boolean deQueue() {
        if(size ==0){
            return false;
        }
        else if(size ==1){
            head = null;
            tail = null;
        }
        else{
            head = head.next;
        }
        size--;
        return true;
    }

    public int Front() {
        if(size ==0){
            return -1;
        }
        else{
            return head.val;
        }
    }

    public int Rear() {
        if(size ==0){
            return -1;
        }
        else{
            return tail.val;
        }

    }

    public boolean isEmpty() {
        if(size ==0){
            return true;
        }
        else{
            return false;
        }
    }

    public boolean isFull() {
        if(size == max){
            return true;
        }
        else{
            return false;
        }
    }
}
```


## 1614. Maximum Nesting Depth of the Parentheses
### 문제 요약
중첩된 괄호의 갯수를 구하시오

### 시간복잡도 공간 복잡도
| time | space |
|------|-------|
| O(n) | O(n)  |

### 코드
```java
class Solution {
    public int maxDepth(String s) {
        int count = 0; // 괄호 카운트
        Stack<Character> stack = new Stack<>();

        for(int i=0;i<s.length();i++){
            if(s.charAt(i) == '('){
                stack.push(s.charAt(i));
            }
            else if(s.charAt(i)==')'){
                stack.pop();
            }
            count = Math.max(count,stack.size());//'('의 갯수를 센다.
        }
        return count;
    }
}
```

## 1598. Crawler Log Folder
### 문제 요약
중첩으로 들어가있는 폴더의 갯수를 구하시오

../ : 폴더 한번 나가기

./ : 폴더 유지

d1/ : `d1`폴더로 들어가기


### 시간복잡도 공간 복잡도
| time | space |
|------|-------|
| O(n) | O(n)  |


### 코드
```java
class Solution {
    public int minOperations(String[] logs) {
        Stack<String> stack = new Stack<>();

        for(String i:logs){
            if(i.equals("../")){
                if(stack.empty()){
                    continue;
                }
                stack.pop();
            }
            else if(i.equals("./")){
                continue;
            }
            else{
                stack.push(i);
            }
        }
        return stack.size();
    }
}
```



## 496. Next Greater Element I
### 문제 요약

해당 값이 같을 때 다음 인덱스의 값이 해당 값보다 크면 다음 인덱스의 값을 넣고 아니면 -1을 넣는다.

### 시간복잡도 공간 복잡도

| time | space |
|------|-------|
| O(n+m) | O(n+m)  |

### 코드
```java
import java.util.HashMap;
import java.util.Stack;

//496. Next Greater Element I
class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        HashMap<Integer, Integer> hashMap = new HashMap<>();
        Stack<Integer> stack = new Stack<>();

        for(Integer num : nums2){
            while(!stack.isEmpty() && stack.peek()<num){
                hashMap.put(stack.pop(),num);
            }
            stack.push(num);
        }

        for(int i=0;i< nums1.length;i++){
            nums1[i] = hashMap.getOrDefault(nums1[i],-1);
        }
        return nums1;
    }
}
```



## 1700. Number of Students Unable to Eat Lunch
### 문제 요약
Student는 queue로 이루어져있고, sandwiches는 stack으로 이루어져있다.

student의 맨 앞에 있는 숫자와 sandwiches의 맨 앞에 있는 숫자와 같으면 두 요소를 삭제 시켜주고, 다르면 student의 맨 앞 요소를 맨 뒤로 보낸다.

위 과정을 반복하고 남아 있는 student의 수를 리턴하시오

### 시간복잡도 공간 복잡도
| time | space |
|------|-------|
| O(nm) | O(nm)  |

### 코드
```java
import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

class Solution {
    public int countStudents(int[] students, int[] sandwiches) {
        Queue<Integer> queue = new LinkedList<>();
        Stack<Integer> stack = new Stack<>();

        for (int i : students) {//학생배열 queue에 삽입
            queue.offer(i);
        }
        for (int i = sandwiches.length - 1; i >= 0; i--) {//샌드위치배열 stack에 삽입
            stack.push(sandwiches[i]);
        }
        int counter = queue.size()* stack.size();//최대 실행 횟수

        for (int i=0;i< counter;i++) {
            if ((!stack.isEmpty())&&queue.peek() == stack.peek())//학생의 맨 앞의 값과 샌드위치의 맨 앞값이 같다면 {
                queue.poll();
                stack.pop();
            } else {//다르다면
                if(queue.size()>0){
                    queue.offer(queue.poll());
                }
                else{
                    return 0;
                }
            }
        }
        return queue.size();
    }
}
```



## 2073. Time Needed to Buy Tickets
### 문제 요약
각자 사고 싶은 티켓의 갯수가 적힌 배열과 알고싶은 인덱스 번호를 입력받는다.

티겟 한장은 사는 걸리는 시간은 1초

k번째 사람이 티켓을 다 사는데 걸리는 시간

티켓을 샀으면 뒤로 가야함

### 시간복잡도 공간 복잡도
| time | space |
|------|-------|
| O(n) | O(1)  |

### 코드
```java
class Solution {
    public int timeRequiredToBuy(int[] tickets, int k) {
        int indexNum = tickets[k];//k번째의 사야할 표 갯수
        int time = 0;//k번째 사람이 티켓을 다사는데 걸리는 시간
        int i=0;//tickets의 인덱스로 사용될 변수

        while(indexNum!=0) {
            if (tickets[i] > 0) {
                tickets[i]--;
                time++;
            }
            i++;
            if (i > tickets.length - 1)
                i = 0;
        }
        return time;
    }
}
```

해당 코드는 Time Limit Exceeded 나온다.

n^2을 억지로 n으로 바꿨지만 더 줄여야하는 것 같다...


```java
public int timeRequiredToBuy(int[] tickets, int k) {
        int timeTakenForK = 0;
       
        for(int i = 0; i < tickets.length; i++){
            if(i < k) timeTakenForK+=Math.min(tickets[k], tickets[i]);
            if(i > k) timeTakenForK+=Math.min(tickets[k] - 1, tickets[i]);
            if(i == k)timeTakenForK+=tickets[k];}
  
        return timeTakenForK;}
```

해당 코드는 Discuss의 코드이다. ticket.length의 반복만으로 문제를 풀어야하는 것 같다.