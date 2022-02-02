# 배열 문제 모음

## 목차
## 1. Two Sum
## 15. 3Sum





## 1. Two Sum
### 풀이 서술
1. 배열과 타겟넘버를 입력받는다.
2. 이중 for문을 이용하여 모든 배열의 요소의 합을 타겟 넘버와 비교하여 값을 찾는다.

### 코드
```java
class Solution {
    public static int[] twoSum(int[] nums, int target) {
        for(int i=0;i<nums.length-1;i++){
            for(int j=i+1;j<nums.length;j++){
                if(nums[j]+nums[i]==target){
                    System.out.println(new int[]{i,j});
                    return new int[]{i,j};
                }
            }
        }
        return new int[2];
    }

    public static void main(String[] args) {
        twoSum(new int[]{2,7,11,15},9);
    }
}
```

### 시간 복잡도
O(n^2)

### 추가 자료
[1. Two Sum 참고 자료](https://johnmarc.tistory.com/80)

위 링크에서 HashMap 부분 참고!


## 15. 3Sum
### 풀이 서술
1. 2sum과 같이 삼중 for문을 활용하여 i,j,k의 합이 0이면 return
2. 위 방법밖에 떠오르지 않는다...


### 코드(잘못된)
```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {
    public static List<List<Integer>> threeSum(int[] nums) {
        int nums_len = nums.length;
        List<List<Integer>> result = new ArrayList<>();

        if(nums_len ==0||nums_len<3) {return result;}

        Arrays.sort(nums);

        for(int i=0;i<nums_len-2;i++){
            for(int j=i+1;j<nums_len-1;j++){
                for(int k = i+2;k<nums_len;k++){
                    if(nums[i]+nums[j]+nums[k]==0){
                        result.add(Arrays.asList(nums[i],nums[j],nums[k]));
                    }
                }
            }
        }
        return result;
    }
}
```

Wrong Answer이 났다.

이유는 중복값을 제거하지 않아서엿다.

```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {
    public static List<List<Integer>> threeSum(int[] nums) {
        int nums_len = nums.length;
        List<List<Integer>> result = new ArrayList<>();

        if(nums_len ==0||nums_len<3) {return result;}

        Arrays.sort(nums);

        for(int i=0;i<nums_len-2;i++){
            if(i>0&&nums[i]==nums[i-1]) continue;
            for(int j=i+1;j<nums_len-1;j++){
                if(j>i+1&&nums[j]==nums[j-1]) continue;
                for(int k = j+1;k<nums_len;k++){
                    if(k>j+1&&nums[k]==nums[k-1]) continue;
                    if(nums[i]+nums[j]+nums[k]==0){
                        result.add(Arrays.asList(nums[i],nums[j],nums[k]));
                    }
                }
            }
        }
        return result;
    }
}
```

중복 값을 제거했더니

Time Limit Exceeded가 떳다...

[3sum 풀이](https://mosqidiot.gitbooks.io/leetcode-answer-java/content/3sum.html)

첫번째 for문의 값을 음수로 변환해 -i = j + k를

활용하여 좌측 값과 우측 값을 추출하는 방식...
 




