## 목차
- 704. Binary Search
- 349. Intersection of Two Arrays



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


## 349. Intersection of Two Arrays
### 문제 요약
num1과 num2배열에서 교집합을 반환해라.

중복된 값은 제거한다.

### 시간복잡도 공간 복잡도
| time | space |
|------|-------|
| O(n) | O(1)  |

### 코드
```java
class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        TreeSet<Integer> treeSet = new TreeSet<>();
        ArrayList<Integer> arrayList = new ArrayList<>();

        for(int i: nums1){
            treeSet.add(i);
        }
        for(int i: nums2){
            if(treeSet.contains(i)){
                arrayList.add(i);
                treeSet.remove(i);
            }
        }

        int[] result = new int[arrayList.size()];
        for(int i=0;i<arrayList.size();i++){
            result[i] = arrayList.get(i);
        }
        return result;
    }
}
```

### 다른 사람의 잘푼 코드
```java
class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        List<Integer> list = new ArrayList<>();
        int[] count = new int[1001];
        // point out the variables present in nums1;
        for (int n : nums1) {
            ++count[n];
        }
        
        for (int n : nums2) {
            // if nums2 variable is already present in nums1, add it to the ans
            if (count[n] > 0) {
                list.add(n);

                count[n] = -1; // marked the position as it is already in the Answer List
            }
        }

        //convert List into int[];
        int[] ans = new int[list.size()];
        int i = 0;
        for (int n : list) {
            ans[i++] = n;
        }
        return ans;
    }
}
```

Treeset을 하나로 줄이는 것도 힘들었는데... 더 노력하자...

