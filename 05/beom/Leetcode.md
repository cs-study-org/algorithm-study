# 덱 & 우선순위 큐 리트코드 문제

## 목차
- Deque
  - 641. Design Circular Deque
- PriorityQueue
  - 1046. Last Stone Weight
  - 703. Kth Largest Element in a Stream


# Deque

## 641. Design Circular Deque
### 문제 요약
CircularDeque클래스를 구현하시오

### 시간복잡도 공간복잡도
|       | `insertFront` | `insertLast` | `deleteFront` | `deleteLast` | `getFront` | `getRear` | `isEmpty` | `isFull` |
| :---: | :-----------: | :----------: | :-----------: | :----------: | :--------: | :-------: | :-------: | :------: |
| time  |    `O(1)`     |    `O(1)`    |    `O(1)`     |    `O(1)`    |   `O(1)`   |  `O(1)`   |  `O(1)`   |  `O(1)`  |
| space |    `O(1)`     |    `O(1)`    |    `O(1)`     |    `O(1)`    |   `O(1)`   |  `O(1)`   |  `O(1)`   |  `O(1)`  |

### 코드
    class MyCircularDeque {
        int[] deque; //요소를 담을 배열
        int front;//첫번째 요소의 인덱스를 가르키는 변수
        int rear;//마지막 요소의 인덱스를 가르키는 변수
        int size;//배열의 크기 예외처리를 위한 사이즈 변수


        public MyCircularDeque(int k) {
            this.deque = new int[k];
            this.front = 0;//0번째 인덱스 front
            this.rear = 1;//1번째 인덱스 rear
            this.size = 0;
        }

        public boolean insertFront(int value) {
            if(size == deque.length){
                return false;
            }
            deque[front] = value;
            front = (front-1+ deque.length) % deque.length;//front를 앞으로 한칸 이동
            size++;
            return true;
        }

        public boolean insertLast(int value) {
            if(size == deque.length){
                return false;
            }
            deque[rear] = value;
            rear = (rear+1)%deque.length;//rear를 뒤로 한칸 이동
            size++;
            return true;
        }

        public boolean deleteFront() {
            if(size ==0){
                return false;
            }
            front = (front+1)%deque.length;
            size--;
            return true;
        }

        public boolean deleteLast() {
            if(size ==0){
                return false;
            }
            rear = (rear-1+deque.length)% deque.length;
            size--;
            return true;
        }

        public int getFront() {
            if(size ==0){
                return -1;
            }
            int val = deque[(front+1)%deque.length];
            return val;
        }

        public int getRear() {
            if(size ==0){
                return -1;
            }
            int val = deque[(rear-1+deque.length)% deque.length];
            return val;
        }

        public boolean isEmpty() {
            if(size ==0){
                return true;
            }
            return false;
        }

        public boolean isFull() {
            if(size ==deque.length){
                return true;
            }
            return false;
        }
    }



# Priority Queue

## 1046. Last Stone Weight
### 문제 요약
배열이 주어지는데 그 배열에서 가장 큰 값을 두개 뽑아 뺀 수를 다시 배열에 넣는다. 이 과정을 배열의 요소가 하나가 남을 때까지 해라

### 시간복잡도 공간복잡도
| time | space |
|------|-------|
| O(n log n) | O(n)  |


### 코드
```java
import java.util.Collections;
import java.util.PriorityQueue;

class Solution {
    public int lastStoneWeight(int[] stones) {
        PriorityQueue<Integer> queue = new PriorityQueue<>(Collections.reverseOrder());

        for(int i:stones){
            queue.offer(i);
        }
        while(queue.size() > 1){
            int firstMax = queue.poll();
            int secondMax = queue.poll();
            int newValue = firstMax - secondMax;
            queue.offer(newValue);
        }
        return queue.peek();
    }
}
```

## 703. Kth Largest Element in a Stream
### 문제 요약
kthLargest 클래스를 구현하는데 kthLargest는 k와 nums를 매개변수로 하고 k=k번째 수, nums = 데이터를 의미한다. add 메소드는 k번째로 큰 수를 리턴한다.

### 시간복잡도 공간복잡도

|  | time | space  |
|------|-------|---|
| KthLargest | O(n log m) | O(1) |
| add        |  O(log m)  | O(1) |

### 코드
```java
import java.util.PriorityQueue;

class KthLargest {
    PriorityQueue<Integer> queue = new PriorityQueue<>();
    int k;

    public KthLargest(int k, int[] nums) {
        this.k = k;
        for(int i=0;i < nums.length;i++){
            queue.add(nums[i]);
            if(queue.size() > k){
                queue.poll();
            }
        }
    }

    public int add(int val) {
        queue.add(val);
        if(queue.size() > k){
            queue.poll();
        }
        return queue.peek();
    }
}
```



## 참고문헌

