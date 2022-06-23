## 목차
- 704. Binary Search
- 349. Intersection of Two Arrays
- 350. Intersection of Two Arrays II
- 1346. Check If N and Its Double Exist
- 1608. Special Array With X Elements Greater Than or Equal X


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



## 350. Intersection of Two Arrays II
### 문제 요약
num1과 num2배열에서 교집합을 반환해라.

중복은 허용하나 한번 교집합이 난 것들은 제거해준다.

### 시간복잡도 공간 복잡도
| time | space |
|------|-------|
| O(n^2) | O(1)  |

### 코드
```java
class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        ArrayList<Integer> arrayList1 = new ArrayList<>();
        ArrayList<Integer> arrayList2 = new ArrayList<>();

        for(int i: nums2){
            arrayList1.add(i);
        }

        for (int i: nums1){
            if (arrayList1.contains(i)) {
                arrayList2.add(i);
                for(int j=0;j<arrayList1.size();j++){
                    if(Objects.equals(arrayList1.get(j), i)){
                        arrayList1.remove(j);
                        break;
                    }
                }
            }
        }

        int[] result = new int[arrayList2.size()];
        for(int i=0;i<arrayList2.size();i++){
            result[i] = arrayList2.get(i);
        }
        return result;
    }
}
```

### 다른 사람의 잘푼 코드
```java
public int[] intersect(int[] nums1, int[] nums2) {
    Arrays.sort(nums1);
    Arrays.sort(nums2);
    List<Integer> res = new ArrayList<>();
    int i=0, j=0;
    while (i<nums1.length && j<nums2.length) {
        if (nums1[i] == nums2[j]) {
            res.add(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] > nums2[j]) {
            j++;
        } else {
            i++;
        }
    }
    int count[] = new int[res.size()];
    for (i =0; i< res.size(); i++) {
        count[i] = res.get(i);
    }
    return count;
}
```

## 1346. Check If N and Its Double Exist

### 문제 요약
arr의 한 요소(N)와 다른 요소(M)가 `N=M*2`를 만족하면 `True` 아니면 `False`를 반환하세요.

### 시간복잡도, 공간복잡도
| time | space |
|------|-------|
| O(n log n) | O(n)  |


### 내가 푼 코드
```java
class Solution {
    public boolean checkIfExist(int[] arr) {
        Arrays.sort(arr);
        for(int i=0;i<arr.length;i++){
            int exist = 2*arr[i];

            int low = 0, high = arr.length-1;
            while(low <= high){
                int mid = (low + high)/2;
                if(arr[mid] == exist && i != mid){
                    return true;
                }
                else if(arr[mid] < exist){
                    low = mid+1;
                }
                else{
                    high = mid-1;
                }
            }
        }
        return false;
    }
}
```


## 1608. Special Array With X Elements Greater Than or Equal X

### 문제 요약
nums라는 배열이 주어지고, 특별한 수 X가 있다. 이 X는 배열의 요소보다 작거나 같은 경우의 수와 X가 동일하다면 X를 return한다.

X가 존재하지 않는다면 -1을 리턴한다.

### 시간복잡도, 공간복잡도
| time | space |
|------|-------|
| O(n^2) | O(1)  |


### 내가 푼 코드
```java
class Solution {
    public int specialArray(int[] nums) {
        for(int i = 0; i< nums.length+1;i++){
            int count = 0;
            for(int j : nums){
                if(i <= j){
                    count++;
                }
            }
            if(count == i){
                return i;
            }
        }
        return -1;
    }
}
```

### 다른사람의 잘푼 코드
```java
class Solution {      
     public int specialArray(int[] nums) {
         Arrays.sort(nums);
         for(int i = 0, len = nums.length; i < len; i++) {
             int x = len - i;                          
             if(nums[i] >= x && (i == 0 || nums[i - 1] < x)) return x;             
         }
         return -1;
    }
}
```

내가 원했던 코드인 것같다..