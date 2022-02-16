# Stack & Queue

## 목차
## 1381. Design a Stack With Increment Operation
## 622. Design Circular Queue
## 1614. Maximum Nesting Depth of the Parentheses




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
| O(n) | O(1)  |

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


