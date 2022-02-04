# Leet Code 문제 

<문자열 문제>
<details>
    <summary>139. Word Break (미완)</summary>
<br>
난이도 : medium
    
<br>

문제 : 주어진 문자열 s가 wordDict 리스트의 엘레먼트 값으로 조합이 가능하는 지에 대해 Boolean값으로 반환하라.
<br>    
(조건 : wordDict 엘레먼트는 중복 사용 조합이 가능하다.)

<br>

```java
class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        String word ="";
        
        String[] words = s.split("");
        List <String> list = new ArrayList<>();
        for(int i =0; i<words.length; i++){
            word += words[i];
            if(wordDict.contains(word)){
                list.add(word);
                word ="";   
            }
        }
        if(word !="")
            list.add(word);
        
        for(String w : list){
            if(!wordDict.contains(w))
                return false;
        }
        return true;
        
    }
}    
```
설명)
s = "leetcode", wordDict = {"leet", "code"} 일때
1. 문자열 값 하나씩 더해가며 wordDict의 값에 존재하면 새로운 리스트에 저장한다.
2. 새로운 리스트에 저장된 값이 wordDict에 모두 포함되어 있으면 true 반환.
   
(위의 코드는 현재 s=aaaaaaa, wordDict={"aaa","aaaa"} 테스트 케이스를 통과하지 못함)

</details>

<br>

<details>
    <summary>763. Partition Labels</summary>
<br>
난이도 : medium
    
<br>

문제 : 주어진 문자열 s가 반복 문자 없이 가장 긴 문자열로 파티션을 나누어 각 파티션의 길이를 반환하라.
<br>

``` java
class Solution {
    public List<Integer> partitionLabels(String s) {
        
        int[] indexAlpha = new int[26];
        List <Integer> result = new ArrayList<>();
        
        for(int i =0; i<s.length();i++)
            indexAlpha[s.charAt(i)-'a'] = i;
            
        int start = 0;
        int lastIndex = 0;
        
        for(int i =0; i<s.length(); i++){
            lastIndex = Math.max(lastIndex, indexAlpha[s.charAt(i)-'a']);
            
            if(lastIndex == i){
                result.add(lastIndex - start +1);
                start = i+1;
            }
        }
        
        return result;
        
    }
}
```
설명)
s = "ababcbacadefegdehijhklij" 일때
1. 문자열 s에서 나온 알파벳을 indexAlpah 배열에 a-z까지 마지막에 나온 요소 인덱스를 집어넣는다.
ex)
s="cab"
indexAlpha = [1,2,0]

2. 반복문을 통해 문자열을 순회하며 중복 문자 사이 길이가 가장 긴 길이를 찾아 result 리스트에 저장하고, 다음 반복 문자 사이 가장 긴 길이를 찾는다.

3. result 반환
   

</details>

<br>

* * *
<br>

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
