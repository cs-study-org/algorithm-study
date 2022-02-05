# Leet Code 문제 


<배열 문제>

<details>
    <summary>35. Search Insert Position</summary>

<br>
난이도 : Easy
    
<br>

문제 : 정수 target과 동일한 값을 정렬된 배열에서 찾아 인덱스를 반환하되 존재 하지 않다면 target이 있어야 할 위치 인덱스를 반환하라
<br>
(조건 : O(log n) 안으로 풀이하라.)
<br>

```java
class Solution {
    public int searchInsert(int[] nums, int target) {
      
        for(int i =0; i<nums.length; i++){
            if(nums[i] == target || nums[i]>target)
                return i;
        }
        return nums.length;
    }
}
```
설명)
<br>

nums = [1,3,5,6], target = 2 일때
1. nums의 길이만 큼 반복하되 nums[i] 와 target이 동일하거나, nums[i]가 target보다 크다면 그 인덱스를 반환한다.
2. 만약 존재하지 않다면 nums의 길이 즉 nums의 맨 뒤의 인덱스 번호를 반환한다.

참고) 이진 탐색을 도입해보면 더 좋은 코드가 나올것 같다.

</details>

<br>

<details>
    <summary>53. Maximum Subarray</summary>

<br>
난이도 : Easy
    
<br>

문제 : 주어진 정수형 배열 내에서 연속되는 엘레멘트 합이 가장 큰 값을 반환하라.

<br>

```java
class Solution {
    public int maxSubArray(int[] nums) {
        if(nums.length == 1)
            return nums[0];
        
        List <Integer> plusList = new ArrayList<>();
        List <Integer> minusList = new ArrayList<>();
        
        int sum =0;
        for(int i =0; i<nums.length; i++){
            int num = nums[i];
            sum += num;
            if(sum<0){
                minusList.add(sum);
                sum=0;
            }
            else
                plusList.add(sum);
        }
        if(plusList.isEmpty())
            return Collections.max(minusList);
        return Collections.max(plusList);
        
    }
}
```
설명
<br>

nums = [-2,1,-3,4,-1,2,1,-5,4] 일때,
1. nums의 요소 하나씩 sum 값에 더하여 0이하일 경우는 minusList에 저장하여 sum값을 초기화 하고 0이상일겨우 plusList에 저장한다.
2. plusList에서 가장 큰값을 반환 하되 만약 isEmpty가 true일 경우 minusList에서 가장 큰값을 반환한다.
   
<br>

</details>

<br>

<details>
    <summary>75. sort colors</summary>

<br>
난이도 : medium
    
<br>

문제 : 요소가 0, 1, 2 만 존재하는 배열에서 오름차순으로 정렬하라
<br>
(조건 : 라이브러리 sort를 사용하지 않고 정렬하고, 자리를 대체하여 정렬하라.)

```java
class Solution {
    public void sortColors(int[] nums) {
        
        int first =0, last = nums.length-1, pointer =0;
        
        while(pointer <= last){
            if(nums[pointer] == 0){
                swap(nums,first++,pointer++);
            }
            else if(nums[pointer] == 2){
                swap(nums, last--, pointer);
            }
            else{
            pointer++;    
            }
            
        }
        
    }
    
    private void swap(int[] nums, int first, int second){
        int temp = nums[first];
        nums[first] = nums[second];
        nums[second] = temp;
        
    }
}
```
설명)
<br>

nums = [2,0,2,1,1,0] 일때,
1. 배열과, 변경할 두 인덱스 번호 값을 인자로 받는 자리변경 메소드를 생성
2. first 와 last인덱스 번호를 통해 pointer 인덱스 자리 값이 0 이면 first와 자리변경 2이면 last와 자리변경 하여 정렬한다.


</details>
