## 목차
- 704. Binary Search






## 704. Binary Search
### 문제 요약
nums배열의 target의 인덱스 값을 찾으시오.

단, 시간복잡도는 log n 을 넘으면 안됩니다.

### 시간복잡도 공간 복잡도
| time | space |
|------|-------|
| O(log n) | O(1)  |

### 코드
```java
class Solution {
    public int search(int[] nums, int target) {
        int low = 0;
        int high = nums.length-1;
        int mid;

        while(low <= high){
            mid = (low + high) / 2;
            if(target == nums[mid]){
                return mid;
            }else if(target > nums[mid]) {
                low = mid + 1;
            }else if(target < nums[mid]){
                high = mid - 1;
            }
        }
        return -1;
    }
}
```
