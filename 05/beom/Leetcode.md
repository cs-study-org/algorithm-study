# 덱 우선순위 큐 리트코드 문제

## 목차
- Deque
  - 641. Design Circular Deque


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


### 문제 요약

### 시간복잡도 공간복잡도

### 코드




### 문제 요약

### 시간복잡도 공간복잡도

### 코드








## 참고문헌

