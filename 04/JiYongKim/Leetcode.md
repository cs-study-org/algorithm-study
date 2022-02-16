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

</details>

<br>

* * *

<br>

< Queue >

- [1700. Number of Students Unable to Eat Lunch](https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/)
- [2073. Time Needed to Buy Tickets](https://leetcode.com/problems/time-needed-to-buy-tickets/)
- [622. Design Circular Queue](https://leetcode.com/problems/design-circular-queue/)