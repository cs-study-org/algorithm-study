# Sliding Window

## 목차
## 219. Contains Duplicate II
## 643. Maximum Average Subarray I




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
