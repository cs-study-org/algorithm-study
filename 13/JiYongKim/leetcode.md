# Binary Search

<details>
<summary>704. Binary Search</summary>

- 704. Binary Search
    
    ```java
    // 시간 복잡도 : O(log(n)) ... n = nums.length
    // 공간 복잡도 : O(1)
    class Solution {
        public int search(int[] nums, int target) {
            int result = binarySearch(target, nums);
            if (nums[result] == target) {
                return result;
            }
            return -1;
        }
            public static int binarySearch(int key, int arr[]) {
            int mid = 0;
            int left = 0;
            int right = arr.length - 1;
    
            while (right >= left) {
                mid = (right + left) / 2;
    
                if (key == arr[mid]) {
                    return mid;
                }
                if (key < arr[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            return mid;
        }
    }
    ```

</details>

<br>

~~[35. Search Insert Position](https://leetcode.com/problems/search-insert-position/)~~

<br>

<details>
<summary>349. Intersection of Two Arrays</summary>

- 349. Intersection of Two Arrays
    
    ```java
    // 시간 복잡도 : O( m^2 + n log(m) ) ... m = nums2.length , n = nums1.length
    // 공간 복잡도 : O( n + m ) ... m = nums1의 set값 변환 값 수 , n = nums1,nums2 중복 값 수
    class Solution {
        public int[] intersection(int[] nums1, int[] nums2) {
             List<Integer> result = new ArrayList<>();
    
            Set<Integer> set = new HashSet<>();
            for (int i = 0; i < nums1.length; i++) {
                set.add(nums1[i]); 
            }
    
            Arrays.sort(nums2); 
    
            for (int i : set) { 
                if(binarySearch(i ,nums2))
                    result.add(i);
            }
    
            return result.stream().mapToInt(
                    Integer::intValue).toArray();
        }
         public static Boolean binarySearch(int key, int arr[]) {
            int mid;
            int left = 0;
            int right = arr.length -1;
    
            while(right >= left){
                mid = (right + left) / 2;
    
                if (key == arr[mid]) {
                    return true;
                }
    
                if(key < arr[mid]){
                    right = mid - 1;
                }else{
                    left = mid + 1;
                }
            }
            return false;
        }
    
    }
    ```
</details>

<br>

<details>
<summary>350. Intersection of Two Arrays II</summary>

- 350. Intersection of Two Arrays II
    
    ```java
    // 시간 복잡도 : O( m^2 + n log(m) ) ... m = nums2.length , n = nums1.length
    // 공간 복잡도 : O( n ) .... n = nums1 과 nums2의 중복값 갯수
    class Solution {
        public int[] intersect(int[] nums1, int[] nums2) {
            
                   List<Integer> list = new ArrayList<>();
    
                Arrays.sort(nums2);
    
                for (int i = 0; i < nums1.length; i++) {
                    if(binarySearch(nums1[i],nums2)){
                        list.add(nums1[i]);
                        Arrays.sort(nums2);
                    }
                }
    
            return list.stream().mapToInt(
                    Integer::intValue).toArray();;
            
        }
        
         public static Boolean binarySearch(int key, int arr[]) {
            int mid;
            int left = 0;
            int right = arr.length -1;
    
            while(right >= left){
                mid = (right + left) / 2;
    
                if (key == arr[mid]) {
                    arr[mid] = -1;
                    return true;
                }
    
                if(key < arr[mid]){
                    right = mid - 1;
                }else{
                    left = mid + 1;
                }
            }
            return false;
        }
    }
    ```
</details>

<br>

<details>
<summary>1346. Check If N and Its Double Exist</summary>

- 1346. Check If N and Its Double Exist
    
    ```java
    // 시간 복잡도 : O(n^2 + n +log(n) ) ... n = arr.length
    // 공간 복잡도 : O(1)
    class Solution {
        public boolean checkIfExist(int[] arr) {
            
            Arrays.sort(arr); // n^2
            for (int i = 0; i < arr.length; i++) { //n
                if(arr[i] == 0){
                    if(arr[i+1] == 0){
                        return true;
                    }
                    continue;
                }
    
                if (arr[i] % 2 == 0) {
                    if(binarySearch(arr[i]/2,arr)){ //log n
                        return true;
                    }
                }
    
            }
            return false;
            
        }
        public static Boolean binarySearch(int key, int arr[]) {
            int mid;
            int left = 0;
            int right = arr.length -1;
    
            while(right >= left){
                mid = (right + left) / 2;
    
                if (key == arr[mid]) {
                    return true;
                }
    
                if(key < arr[mid]){
                    right = mid - 1;
                }else{
                    left = mid + 1;
                }
            }
            return false;
        }
    }
    ```
</details>

<br>

<details>
<summary>1608. Special Array With X Elements Greater Than or Equal X</summary>

- 1608. Special Array With X Elements Greater Than or Equal X
    
    ```java
    //시간 복잡도 : O(n^2 - n) ... n = nums.length
    //공간 복잡도 : O(1)
    class Solution {
        public int specialArray(int[] nums) {
            
            int n = nums.length;
            int result = -1;
            
            for(int i=1; i<=n; i++){ 
                int count = 0;
                for(int j=0; j<n; j++){
                    if(nums[j] >= i){
                        count++;
                    }
                }
                if(count == i){
                    return count;
                }
            }
            
            return result;
        }
    }
    ```
</details>

<br>

<details>
<summary>2089. Find Target Indices After Sorting Array</summary>

- 2089. Find Target Indices After Sorting Array
    ```java
    //시간 복잡도 : O(n^2 + n) ... n = nums.length
    //공간 복잡도 : O(n) ... n = result.length
    class Solution {
        public List<Integer> targetIndices(int[] nums, int target) {
            
            List<Integer> result = new ArrayList<>();
            Arrays.sort(nums);

            for (int i = 0; i < nums.length; i++) {
                if (nums[i] == target) {
                    result.add(i);
                }
            }


            return result;
            
        }
    }
    ```
</details>

