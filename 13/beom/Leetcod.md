## 목차
- 704. Binary Search
- 349. Intersection of Two Arrays
- 350. Intersection of Two Arrays II
- 1346. Check If N and Its Double Exist
- 1608. Special Array With X Elements Greater Than or Equal X
- 2089. Find Target Indices After Sorting Array
- 1385. Find the Distance Value Between Two Arrays


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



## 2089. Find Target Indices After Sorting Array

[Leetcode 링크](https://leetcode.com/problems/find-target-indices-after-sorting-array/)

## 문제 요약
정렬한 nums배열에서 target과 같은 값이 있는 인덱스를 list에 넣어서 반환해라

## 시간복잡도, 공간복잡도
| time | space |
|------|-------|
| O(n log n) | O(n)  |


## 내가 푼 코드
```java
class Solution {
    public List<Integer> targetIndices(int[] nums, int target) {
        Arrays.sort(nums);
        List<Integer> result = new ArrayList<>();
        
        for(int i = 0; i< nums.length;i++){
            if(nums[i] == target){
                result.add(i);
            }
        }
        return result;
    }
}
```

## 다른 사람의 잘푼 코드
```java
```class Solution {
    public List<Integer> targetIndices(int[] nums, int target) {
        int len = nums.length;
        quicksort(nums, 0, len-1);
       // Arrays.sort(nums);
        // int x = binarysearch(  nums, target , 0,len-1 );
        List<Integer> list = new ArrayList<> ();
         for(int i =0; i < len; i++)
         {
             if(nums[i] == target )
             {
                 list.add(i);
             }
             if(list.size() > 0 && nums[i] != target)
             {
                 return list;
             }
         }
        return list;
    }
    
    int partition(int [] nums , int left , int right){
        int piviot = nums[left];
        int i = left;
        int j= right;
        
        while( i <j)
        {
            while(i<= right-1 && nums[i] <= piviot) i++;
            while(j>= left  && nums[j] > piviot) j--;
        
            if(i < j)
                swap (nums, i , j);
         }
        swap(nums, left , j);
        return j;
    }
    
    void swap(int nums[],  int i , int j)
    {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    
    void quicksort(int nums[] , int left , int right)
    {
        if(left < right){
        int piviot =  partition(nums ,  left ,  right);
        
        quicksort(nums,left , piviot-1);
        quicksort(nums, piviot+1, right);
        }
     
    }
}
```

quick sort로 구현했다.

sort메소드 말고 더 효율적인 탐색 알고리즘을 사용하도록 노력해보자



## 1385. Find the Distance Value Between Two Arrays

[Leetcode 링크](https://leetcode.com/problems/find-the-distance-value-between-two-arrays/)

## 문제 요약
|arr[i]-arr2[j]| <= d를 만족하지 않는 arr1[i]의 요소 갯수를 구하시오.

## 시간복잡도, 공간복잡도
| time | space |
|------|-------|
| O(n^2) | O(1)  |


## 내가 푼 코드
```java
class Solution {
    public int findTheDistanceValue(int[] arr1, int[] arr2, int d) {
        int count = arr1.length;

        for(int  i: arr1){
            for(int j: arr2){
                if(Math.abs(i-j) <= d){
                    count--;
                    break;
                }
            }
        }
        return count;
    }
}
```

## 다른 사람의 잘푼 코드
```java
class Solution {
    public int findTheDistanceValue(int[] arr1, int[] arr2, int d) {
        int n = arr1.length, m = arr2.length, res = 0;
        Arrays.sort(arr2);
		
		// We will just search if there exist any number between range x-d & x+d in arr2 using binary search
        for(int x : arr1){
            if(!binarySearch(x-d, x+d, m, arr2)) res++;
        }
        return res;
    }
    
    public boolean binarySearch(int r1, int r2, int n, int[] arr){
        int l = 0, r = n-1;
        while(l<=r){
            int mid = l + (r-l)/2;
            if(arr[mid] >= r1 && arr[mid]<=r2) return true;
            else if(arr[mid] < r1) l = mid + 1;
            else r = mid - 1;
        }
        return false;
    }
    
}
```

음수와 양수를 처리할 때는 &&를 사용하여 처리해주자!