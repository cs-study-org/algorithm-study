# LeetCode 문제

< Stack >

<details>
    <summary>1614. Maximum Nesting Depth of the Parentheses</summary>

- 1614. Maximum Nesting Depth of the Parentheses
    
    ```java
    // 시간 복잡도 : O(n) .. n = 문자열의 길이 
    // 공간 복잡도 : O(n) .. n = split 배열의 크기
    class Solution {
        public int maxDepth(String s) {
          if (s == "") {
                return 0;
            }
    
            int result = 0;
            int depth = 0;
            String[] split = s.split("");
    
            for (int i = 0; i < split.length; i++) {
    
                if (split[i].equals("(")) {
                    depth++;
                }
                if (depth != 0 && split[i].equals(")")) {
                    depth--;
                }
    
                if (result < depth) {
                    result = depth;
                }
            }
    
            return result;
        }
    }
    ```
</details>

<br>

<details>
    <summary>1598. Crawler Log Folder</summary>

- 1598. Crawler Log Folder
    
    ```java
    // 시간 복잡도 O(n) ... n = logs의 길이
    // 공간 복잡도 O(1)
    class Solution {
        public int minOperations(String[] logs) {
           if (logs.length == 0) {
                return 0;
            }
    
            int depth = 0;
    
            for (int i = 0; i < logs.length; i++) {
                if (logs[i].equals("../")) {
                    if (depth == 0) {
                        continue;
                    } else {
                        depth--;
                    }
                } else if (logs[i].equals("./")) {
                    continue;
                } else {
                    depth++;
                }
            }
    
            return depth;
        }
    }
    ```
</details> 

<br>

<details>
    <summary>496. Next Greater Element I</summary>

- 496. Next Greater Element I
    
    ```java
    // 시간복잡도 O(nm) .. n= nums1의 길이 , m = nums2의 길이 - nums1의 값과 일치하는 nums2값의 인덱스 번호
    // 공간복잡도 O(n+m) .. n = nums1의 크기 , m = nums2의 크기
    class Solution {
        public int[] nextGreaterElement(int[] nums1, int[] nums2) {
    
            int[] result = new int[nums1.length];
            for (int i = 0; i < result.length; i++) {
                result[i] = -1;
            }
            HashMap<Integer, Integer> map = new HashMap<>();
    
            for (int i = 0; i < nums2.length; i++) {
                map.put(nums2[i], i);
            }
            int num = 0;
            for (int i = 0; i < nums1.length; i++) {
                num = nums1[i];
    
                for (int j = map.get(nums1[i]) + 1; j < nums2.length; j++) {
                    if (nums2[j] > num) {
                        result[i] = nums2[j];
                        break;
                    }
                }
            }
            return result;
        }
    }
    ```
</details>

<br>

<details>
    <summary>1381. Design a Stack With Increment Operation</summary>

- 1381. Design a Stack With Increment Operation
    
    ```java
    
    class CustomStack {
        int top;
        int stackSize;
        int arrStack[];
    
        public CustomStack(int maxSize) {
            top = -1;
            this.stackSize = maxSize;
            arrStack = new int[maxSize];
        }
    
        public void push(int x) {
            if (top != this.stackSize - 1) {
                arrStack[++top] = x;
            }
        }
    
        public int pop() {
            if (top == -1) {
                return -1;
            } else {
                return arrStack[top--];
            }
        }
    
        public void increment(int k, int val) {
            int min = Math.min(k, arrStack.length);
            if (min >= 0) {
                for (int i = 0; i < min; i++)
                    arrStack[i] += val;
            }
        }
    }
    
    /**
     * Your CustomStack object will be instantiated and called as such:
     * CustomStack obj = new CustomStack(maxSize);
     * obj.push(x);
     * int param_2 = obj.pop();
     * obj.increment(k,val);
     */
    ```
    <시공간 복잡도>

* 공간 복잡도 : O(n) ... n = maxSize

<br>

* 시간 복잡도  
  
    |  | CustomStack() | push() | pop() | increment |
    | --- | --- | --- | --- | --- |
    | 시간 복잡도 | O(1) | O(1) | O(1) | O(n) |

</details>

<br>

* * *

<br>

< Queue >
<br>
<details>
<summary>1700. Number of Students Unable to Eat Lunch</summary>

- 1700. Number of Students Unable to Eat Lunch
    
    ```java
    // 시간 복잡도 : O(n)
    // 공간 복잡도 : O(1)
    class Solution {
        public int countStudents(int[] students, int[] sandwiches) {
            int[] freq = new int[2];
    
            for(int s : students) freq[s]++;
    
            for(int i = 0; i < sandwiches.length; i++) {
                if(--freq[sandwiches[i]] < 0) 
                    return sandwiches.length - i;
            }
            
            return 0;
        }
    }
    ```
    
    설명 ) 
    
    1. freq 배열의 학생의 배열의 값 0,1 의 수를 담는다.
    2. sandwiches 크기 만큼 반복을 돈다.
        1. sandwiches 값 0,1 에 맞춰 freq 의 값을 줄이며 0 이하가 되면 그때의 시점의 sandwiches의 크기 반환
        2. 아닐시 0 반환

</details>

<br>

<details>
<summary>2073. Time Needed to Buy Tickets</summary>

- 2073. Time Needed to Buy Tickets
    
    ```java
    // 시간 복잡도 O(n) ...n = tickets[k] 크기
    // 공간 복잡도 O(1) 
    public class Solution {
        public static int solution(int[] tickets, int k) {
            int count = 0;
            int num = 0;
            while (tickets[k] != 0) {
                if (num % tickets.length != k
                        && tickets[num % tickets.length] == 0) {
                    num++;
                    continue;
                } else {
                    tickets[num % tickets.length]--;
                }
                num++;
                count++;
            }
            return count;
        }
    ```
    
    설명) 
    
    1. tickets의 k번째 값이 0 이 될때까지 반복을 돌며 줄여간다.
    2. 반복문이 도는 횟수를 count에 저장하여 반환한다.

</details>

<br>

<details>
    <summary>622. Design Circular Queue</summary>

- 622. Design Circular Queue

```java

class MyCircularQueue {
    class Node {
        Node next;
        int val;

        Node(int val) {
            this.val = val;
            this.next = null;
        }
    }

    Node head;
    Node tail;
    int size;
    int max;

    public MyCircularQueue(int k) {
        this.head = null;
        this.tail = null;
        this.max = k;
        this.size = 0;
    }

    public boolean enQueue(int value) {
        Node node = new Node(value);
        if (size == max) {
            return false;
        } else {
            if (size == 0) {
                head = node;
                tail = node;
            } else {
                tail.next = node;
                tail = node;
            }
            size++;
            return true;
        }
    }

    public boolean deQueue() {
        if (size == 0) {
            return false;
        } else if (size == 1) {
            head = null;
            tail = null;
        } else {
            head = head.next;
        }
        size--;
        return true;
    }

    public int Front() {
        if (size == 0) {
            return -1;
        } else {
            return head.val;
        }
    }

    public int Rear() {
        if (size == 0) {
            return -1;
        } else {
            return tail.val;
        }
    }

    public boolean isEmpty() {
        if (size == 0) {
            return true;
        } else {
            return false;
        }
    }

    public boolean isFull() {
        if (size == max) {
            return true;
        } else {
            return false;
        }
    }
}
```
<시공간 복잡도>

* 공간 복잡도 : O(1)

<br>

* 시간 복잡도

    |  | MyCircularQueue() | enqueue() | dequeue() | front() | rear() | isEmpty() | isFull() |
    | --- | --- | --- | --- | --- | --- | --- | --- |
    | 시간 복잡도 | O(1) | O(1) | O(1) | O(1) | O(1) | O(1) | O(1) |

</details>