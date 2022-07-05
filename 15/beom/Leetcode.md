# Sliding Window

## 목차
## 219. Contains Duplicate II
## 643. Maximum Average Subarray I
## 2269. Find the K-Beauty of a Number
## 1876. Substrings of Size Three with Distinct Characters
## 1763. Longest Nice Substring(틀림)





# 219. Contains Duplicate II

## 코딩테스트 대비 문제 풀기!

[Leetcode 링크](https://leetcode.com/problems/contains-duplicate-ii/)

## 문제 요약

nums의 요소가 같으면서, 인덱스끼리의 차의 절대값이 k보다 작은 수가 있으면 true


## 시간복잡도, 공간복잡도
| time | space |
|------|-------|
| O(n) | O(n)  |


## 내가 푼 코드
```java
class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {

        Map<Integer, Integer> map = new HashMap<>();

        for(int end = 0;end < nums.length;end++){
            if(map.containsKey(nums[end])){
                if(Math.abs(map.get(nums[end]) - end) <= k){
                    return true;
                }
            }
            map.put(nums[end], end);
        }
        return false;
    }
}
```

## 다른 사람의 잘푼 코드
```java
	var containsNearbyDuplicate = function (nums, k) {

		if (nums.length === 1) return false;
		const obj = {};

		for (let i = 0; i < nums.length; i++) {
			if (obj[nums[i]] >= 0 && Math.abs(obj[nums[i]] - i) <= k) {
				return true;
			}
			obj[nums[i]] = i;
		}
		return false;
	};
```


# 643. Maximum Average Subarray I

## 코딩테스트 대비 문제 풀기!

[Leetcode 링크](https://leetcode.com/problems/maximum-average-subarray-i/submissions/)

## 문제 요약

nums에서 k개의 숫자의 평균이 가장 큰 것을 더하세요


## 시간복잡도, 공간복잡도
| time | space |
|------|-------|
| O(n) | O(1)  |


## 내가 푼 코드
```java
class Solution {
    public double findMaxAverage(int[] nums, int k) {
        double sum = 0, max = 0;

        for(int i = 0; i<k; i++){
            sum += nums[i];
        }

        max = sum;

        for(int i=k;i< nums.length;i++){
            sum = sum + nums[i] - nums[i-k];
            max = Math.max(sum, max);
        }

        return max/k;
    }
}
```

# 2269. Find the K-Beauty of a Number

## 코딩테스트 대비 문제 풀기!

[Leetcode 링크](https://leetcode.com/problems/find-the-k-beauty-of-a-number/submissions/)

## 문제 요약

num이 있고 길이를 의미하는 k가 있을 때 num 중 k만큼의 수로 num이 나누어 떨어지는 갯수를 구하시오

## 시간복잡도, 공간복잡도
| time | space |
|------|-------|
| O(n) | O(n)  |


## 내가 푼 코드
```java
class Solution {
    public int divisorSubstrings(int num, int k) {
        int count = 0;

        String strNum = String.valueOf(num);

        for(int i=0;i<strNum.length() - k + 1;i++){
            String str = strNum.substring(i,i+k);
            if(Integer.parseInt(str) == 0){
                continue;
            }

            if(num % Integer.parseInt(str) == 0){
                count++;
            }
        }
        return count;
    }
}

```

# 1876. Substrings of Size Three with Distinct Characters

## 코딩테스트 대비 문제 풀기!

[Leetcode 링크](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/)

## 문제 요약

s에서 중복되지 않는 3개의 문자가 있는 경우를 카운트하세요!

## 시간복잡도, 공간복잡도
| time | space |
|------|-------|
| O(n) | O(1)  |


## 내가 푼 코드
```java
class Solution {
    public int countGoodSubstrings(String s) {
        Set<Character> set = new HashSet<>();
        int start = 0, end = 0;
        int count = 0;

        while (end < s.length()){
            if(!set.contains(s.charAt(end))){
                set.add(s.charAt(end));
                end++;
                if(set.size() == 3){
                    count++;
                    set.remove(s.charAt(start));
                    start++;
                }
            }else{
                set.remove(s.charAt(start));
                start++;
            }
        }

        return count;
    }
}

```


# 1763. Longest Nice Substring(틀림)

## 코딩테스트 대비 문제 풀기!

[Leetcode 링크](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/)

## 문제 요약

정확한 이해는 못함..........

문자의 대문자 소문자가 동시에 나왔을 때 더 긴 문자열 반환??

## 시간복잡도, 공간복잡도
| time | space |
|------|-------|
| O(n^2) | O(n)  |


## 다른 사람의 풀이
```java
class Solution {
    public String longestNiceSubstring(String s) {
        Set<Character> set = new HashSet<>();

        for(int i = 0;i<s.length();i++){
            set.add(s.charAt(i));
        }

        for(int i=0;i<s.length();i++){
            if(set.contains(Character.toUpperCase(s.charAt(i))) && set.contains(Character.toLowerCase(s.charAt(i)))){
                continue;
            }

            String s1 = longestNiceSubstring(s.substring(0,i));
            String s2 = longestNiceSubstring(s.substring(i+1));
            return s1.length()>= s2.length() ? s1 : s2;
        }

        return s;
    }
}

```

