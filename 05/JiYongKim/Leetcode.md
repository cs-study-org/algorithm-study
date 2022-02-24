## < Dequeue >
<details>
    <summary>(백준) 1021번 회전하는 큐</summary>

- (백준) 1021번 회전하는 큐
    
    ## 문제
    
    <img width="678" alt="스크린샷 2022-02-24 오전 3 00 03" src="https://user-images.githubusercontent.com/81874493/155379992-b417c918-60c7-49f4-9d59-593625e64f45.png">

    풀이)
    
    ```java
    // 시간 복잡도 O(n^2) .. n = index.length
    // 공간 복잡도 O(n) ... n = index.length
    public class Rotating_Queue {
        public static int solution(int size, int[] index) {
    
            LinkedList<Integer> list = new LinkedList<>();
            int count = 0;
    
            for (int i = 1; i < size + 1; i++) {
                list.add(i);
            }
    
            for (int i = 0; i < index.length; i++) {
                int num = index[i];
                int idx = list.indexOf(num);
    
                if (idx <= list.size() / 2) {
                    if (idx == 0) {
                        System.out.println("idx==0 ," + list.pop());
                    } else if (idx == 1) {
                        list.addLast(list.pop());
                        count++;
                        list.pop();
                    } else {
                        for (int j = 0; j < idx; j++) {
                            list.addLast(list.pop());
                            count++;
                        }
                        list.pop();
                    }
    
                } else {
                    for (int j = 0; j < list.size() - idx; j++) {
                        list.addFirst(list.pollLast());
                        count++;
                    }
                    list.pop();
                }
            }
            return count;
        }
    
        public static void main(String[] args) {
            // output : 59
            int size = 32;
            int[] index = {27, 16, 30, 11, 6, 23};
    
            System.out.println(solution(size, index));
        }
    }
    ```
</details>

<br>

<details>
    <summary>(백준) 2346번 풍선 터뜨리기</summary>

- (백준) 2346번 풍선 터뜨리기
    
    ## 문제
    
    1번부터 N번까지 N개의 풍선이 원형으로 놓여 있고. i번 풍선의 오른쪽에는 i+1번 풍선이 있고, 왼쪽에는 i-1번 풍선이 있다. 단, 1번 풍선의 왼쪽에 N번 풍선이 있고, N번 풍선의 오른쪽에 1번 풍선이 있다. 각 풍선 안에는 종이가 하나 들어있고, 종이에는 -N보다 크거나 같고, N보다 작거나 같은 정수가 하나 적혀있다. 이 풍선들을 다음과 같은 규칙으로 터뜨린다.
    
    우선, 제일 처음에는 1번 풍선을 터뜨린다. 다음에는 풍선 안에 있는 종이를 꺼내어 그 종이에 적혀있는 값만큼 이동하여 다음 풍선을 터뜨린다. 양수가 적혀 있을 경우에는 오른쪽으로, 음수가 적혀 있을 때는 왼쪽으로 이동한다. 이동할 때에는 이미 터진 풍선은 빼고 이동한다.
    
    예를 들어 다섯 개의 풍선 안에 차례로 3, 2, 1, -3, -1이 적혀 있었다고 하자. 이 경우 3이 적혀 있는 1번 풍선, -3이 적혀 있는 4번 풍선, -1이 적혀 있는 5번 풍선, 1이 적혀 있는 3번 풍선, 2가 적혀 있는 2번 풍선의 순서대로 터지게 된다.
    
    풀이)
    
    ```java
    // 시간 복잡도 O(n*m) ... n = dequeue.length , m = balloon 의 엘레멘트중 가장 큰 값
    // 공간 복잡도 O(n) ... n = balloon.length
    
    public class PopBalloon {
        public static void solution(int[] balloon) {
    
            Deque<Balloon> deque = new ArrayDeque<>();
    
            for (int i = 0; i < balloon.length; i++) {
                deque.add(new Balloon(i, balloon[i]));
            }
    
            while (true) {
                Balloon balloon1 = deque.pollFirst();
                System.out.println(balloon1.index + 1);
    
                if (deque.isEmpty())
                    break;
    
                if (balloon1.data == 1) {
                    deque.addLast(deque.pollFirst());
    
                } else if (balloon1.data > 1) { // +일때
                    for (int i = 0; i < balloon1.data - 1; i++)
                        deque.addLast(deque.pollFirst());
                } else { // - 일때
                    for (int i = 0; i < -balloon1.data; i++)
                        deque.addFirst(deque.pollLast());
                }
    
            }
    
        }
    
        public static void main(String[] args) {
            // 결과 : 1 4 5 3 2
    
            int[] balloon = {3, 2, 1, -3, -1};
    
            solution(balloon);
        }
    
    }
    
    class Balloon {
        int index;
        int data;
    
        public Balloon(int index, int data) {
            this.index = index;
            this.data = data;
        }
    
    }
    ```
</details>

<br>  

<details>
    <summary>(백준) 11003번 최솟값 찾기</summary>

- (백준) 11003번 최솟값 찾기
    
    ## 문제
    
    N개의 수 A1, A2, ..., AN과 L이 주어진다.
    
    Di = Ai-L+1 ~ Ai 중의 최솟값이라고 할 때, D에 저장된 수를 출력하는 프로그램을 작성하시오. 이때, i ≤ 0 인 Ai는 무시하고 D를 구하여 출력하라
    
    풀이)
    
    ```java
    // 시간 복잡도 O(n^2) ... n = N의 값 
    // 공간 복잡도 O(n) ... n = N의 값
    
    public class FindMin {
        public static void solution(int N, int L, int[] A) {
            int[] D = new int[N];
    
            for (int i = 0; i < N; i++) {
                int first = i - L + 1;
                int last = i;
    
                if (first < 0)
                    first = 0;
    
                int min = A[first];
                for (int j = first; j <= last; j++) {
    
                    if (last == A.length)
                        last -= 1;
    
                    min = Math.min(min, A[j]);
                }
                D[i] = min;
            }
    
            //결과 출력
            for (int i = 0; i < D.length; i++) {
                System.out.printf(String.valueOf(D[i]) + " ");
            }
        }
    
        public static void main(String[] args) {
    //        조건식 : D(i) = A(i-L+1) ~ A(i) 중의 최솟값
    //        output : 1 1 1 2 2 2 2 2 3 3 2 2
            int N = 12;
            int L = 3;
            int[] A = {1, 5, 2, 3, 6, 2, 3, 7, 3, 5, 2, 6};
    
            solution(N, L, A);
        }
    }
    ```
</details>

<br>

<details>
    <summary>641. Deseign Circular Deque</summary>

- 641. Design Circular Deque
    ## 문제

Dequeue를 디자인하라

```java
class Node {
    Node rlink;
    Node llink;
    int data;
}

class MyCircularDeque {
    private Node front;
    private Node rear;
    private int k;
    private int size;

    public MyCircularDeque(int k) {
        front = null;
        rear = null;
        this.k = k;
        size = 0;
    }

    public boolean insertFront(int value) {
        if (isFull()) {
            return false;
        }

        Node node = new Node();
        node.data = value;

        if (isEmpty()) {
            front = node;
            rear = node;

            node.rlink = null;
            node.llink = null;
            size++;
            return true;
        } else {

            front.llink = node;
            node.rlink = front;
            node.llink = null;
            front = node;
            size++;
            return true;
        }
    }

    public boolean insertLast(int value) {
        if (isFull()) {
            return false;
        }

        Node node = new Node();
        node.data = value;

        if (isEmpty()) {
            front = node;
            rear = node;

            node.rlink = null;
            node.llink = null;
            size++;
            return true;
        } else {
            rear.rlink = node;
            node.rlink = null;
            node.llink = rear;
            rear = node;
            size++;
            return true;
        }

    }

    public boolean deleteFront() {
        if (isEmpty()) {
            return false;
        } else {

            if (front.rlink == null) {
                front = null;
                rear = null;
            } else {
                front = front.rlink;
                front.llink = null;
            }
            size--;
            return true;
        }

    }

    public boolean deleteLast() {
        if (isEmpty()) {
            return false;
        } else {

            if (rear.llink == null) {
                front = null;
                rear = null;
            } else {
                rear = rear.llink;
                rear.rlink = null;
            }

            size--;
            return true;
        }
    }

    public int getFront() {
        if (isEmpty()) {
            return -1;
        } else {
            return front.data;
        }
    }

    public int getRear() {
        if (isEmpty()) {
            return -1;
        } else {
            return rear.data;
        }

    }

    public boolean isEmpty() {
        return (front == null);
    }

    public boolean isFull() {
        return (size == k);
    }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * MyCircularDeque obj = new MyCircularDeque(k);
 * boolean param_1 = obj.insertFront(value);
 * boolean param_2 = obj.insertLast(value);
 * boolean param_3 = obj.deleteFront();
 * boolean param_4 = obj.deleteLast();
 * int param_5 = obj.getFront();
 * int param_6 = obj.getRear();
 * boolean param_7 = obj.isEmpty();
 * boolean param_8 = obj.isFull();
 */
```
<시공간 복잡도>

공간 복잡도 : O(1)

|  | MyCircularDeque() | insertFront() | insertLast() | deleteFront() | deleteLast() | getFront() | getLast() | isEmpty() | isFull() |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 시간 복잡도 | O(1) | O(1) | O(1) | O(1) | O(1) | O(1) | O(1) | O(1) | O(1) |

</details>
<br>

## < Priority Queue >
<details>
    <summary>1046. Last Stone Weight</summary>

- 1046. Last Stone Weight
    
    ## 문제
    
    주어지는 배열의 stone의 값을 통해 stone game을 진행 후 나머지 값을 반환하라
    
    - 나머지 값이 없을 경우 0을 반환하라.
    
    풀이)
    
    ```java
    // 시간 복잡도 O(n) ... n = stones.length - 2
    // 공간 복잡도 O(n) .... n = stones.length
    
    public static int lastStoneWeight(int[] stones) {
            PriorityQueue<Integer> priorityQueue = new PriorityQueue<>(Collections.reverseOrder());
    
            for (int i = 0; i < stones.length; i++)
                priorityQueue.add(stones[i]);
    
            while (priorityQueue.size() >= 2) {
                Integer first = priorityQueue.poll();
                Integer second = priorityQueue.poll();
                Integer weight = Math.max(first, second) - Math.min(first, second);
    
                if (weight != 0) {
                    priorityQueue.add(weight);
                }
            }
    
            if (priorityQueue.size() == 1) {
                return priorityQueue.poll();
            } else {
                return 0;
            }
        }
    ```
</details>

<br>

<details>
    <summary>703. Kth Largest Element in a Stream</summary>

- 703. Kth Largest Element in a Stream
    
    ## 문제
    
    주어진 배열에서 k번째로 큰 수를 반환하는 Class를 디자인하라.
    
    단, add를 통해 새로운 값을 넣는 메소드 또한 디자인하라
    
    ```java
    // 생성자
    // 시간 복잡도 O(n) ... n = nums.length
    // 공간 복잡도 O(n) .. n = nums.length
    
    // add add 메소드
    // 시간 복잡도 O(n) .. n = k - 1
    // 공간 복잡도 O(n) .. n = k - 1
    
    class KthLargest {
        int k;
        PriorityQueue<Integer> priorityQueue;
    
        public KthLargest(int k, int[] nums) {
            this.k = k;
            priorityQueue = new PriorityQueue<>(Collections.reverseOrder());
            for (int i = 0; i < nums.length; i++)
                priorityQueue.add(nums[i]);
        }
    
        public int add(int val) {
            priorityQueue.add(val);
            return getInteger();
        }
    
        private Integer getInteger() {
            int[] memo = new int[k - 1];
    
            for (int i = 0; i < k - 1; i++)
                memo[i] = priorityQueue.poll();
    
            Integer Kth = priorityQueue.peek();
    
            for (int i : memo) {
                priorityQueue.add(i);
            }
            return Kth;
        }
    }
    ```
    
    ... 현재 Testcode는 성공했지만.. Time Limit Exceeded 가 걸렸다...

</details>

<br>

- [(백준) 7662번 이중 우선순위 큐](https://www.acmicpc.net/problem/7662)
