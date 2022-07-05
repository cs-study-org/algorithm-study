# Sliding window 문제 

- [219. Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/)

- [643. Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/)

<details>
<summary> 982269. Find the K-Beauty of a Number</summary>

- 982269. Find the K-Beauty of a Number
    
    ```java
    class Solution {
        public int divisorSubstrings(int num, int k) {
             
            String str = String.valueOf(num);
            int result = 0;
    
            for (int i = 0; i + k - 1< str.length(); i++) {
                String s = str.substring(i, i + k);
                int divisor = Integer.parseInt(s);
                if(divisor !=0 && num%divisor == 0) result++;
            }
            
            return result;
        }
    }
    ```
</details>

- [1763. Longest Nice Substring](https://leetcode.com/problems/longest-nice-substring/)

- [1876. Substrings of Size Three with Distinct Characters](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/)

- [1984. Minimum Difference Between Highest and Lowest of K Scores](https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/)

- [보석 쇼핑](https://programmers.co.kr/learn/courses/30/lessons/67258)