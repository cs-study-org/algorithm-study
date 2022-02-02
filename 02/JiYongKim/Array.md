# 배열 개념 정리

자료구조는 크게 메모리 공간 기반의 

- 연속 방식 (Contiguous)
- 연결 방식(Link)
    
    으로 나뉜다.
    

>⇒ 배열은 이중 연속 방식의 가장 기본이 되는 자료형 이다.

<br>

* * *

<br>

## 배열이란?

배열은 크기를 지정하고 해당 크기 만큼의 <U>**연속된 메모리 공간**</U>을 할당받는 작업을 수행하는 자료형을 말한다

<br>

Ex)
<br>

<img width="264" alt="스크린샷 2022-01-29 오후 5 07 56" src="https://user-images.githubusercontent.com/81874493/151656566-0272875f-e23b-403d-98d5-586e10a49212.png">


배열을 정수형 int로 선언했을때

- 메모리의 접근은 바이트 단위로 접근한다.
- 하나의 인덱스 즉 배열의 각 엘리먼트는 4바이트로 구성되게 된다.
- 4번째 요소에 접근시
    - 3(인덱스 번호) * 4(바이트크기) = 12
        
        >⇒ 0x00부터 시작하여 12만큼 증가한 16진수 0x0C가 된다
        
        >⇒ 0x0C 주소로 찾으면 해당 메모리에 배치되어있는 ‘0’ 값을 읽어 올 수 있다.
        
- 배열에 인덱스로 조회는 O(1)의 시간 복잡도를 갖는다.

<br>

* * *

<br>

## 동적 배열이란?

이전 배열은 고정된 크기만큼의 연속된 메모리 할당이였다.

>⇒ 하지만 실제 데이터는 전체 크기를 가늠하기 힘들때가 많다.

<br>

- 배열에 너무 작은 크기를 할당 ⇒ 데이터 저장할 공간 부족
- 배열에 너무 큰 크기를 할당 ⇒ 사용하지 않는 공간으로 인한 낭비
        
    >⇒ 이러한 문제를 해결하고자
    
    >⇒ 크기를 지정하지 않고 자동으로 resizing하는 동적 배열이 등장하게 됨
    
<br>

**프로그래밍 언어의 동적 배열 지원**

- Java 에서는 ArrayList
- C++ 에서는 std::vector

<br>

**동적 배열의 원리**

1. 초기 값을 작게 잡아 배열을 생성
2. 데이터가 추가되다 꽉 채워지면, 더큰 배열을 생성하고 이전 배열을 모두 복사한다.
    
    >⇒ 여기서 더 큰 배열 생성시 어느정도의 크기 즉 기준에  따라 동적 배열을 구현하냐에 대한 여러 방식이 존재
    
    >⇒ 그 중 하나가 더블링(Doubling)

<br>

**더블링(Doubling)**

더블링은 배열이 꽉 채워지면 더 큰 배열 생성시 그 크기를 2배씩 늘려가게 된다

>⇒ 하지만 모든 언어가 항상 2배씩 늘리는 것은 아니며 각 언어마다 늘려가는 비율은 상이하다.

- 파이썬 1.125 배
- 자바 ArryaList 1.5배
- C++ std::vector 나 루비 같은 언어는 2배씩

<br>

**동적 배열**

- 정적 배열과 달리 크기를 지정할 필요가 없어 매우 편리하게 활용 가능
- 조회 또한 기존 배열과 동일하게 O(1) 시간 복잡도를 갖는다.

- 더블링 발생시
    - 새로운 메모리 공간에 더 큰 크기의 배열을 할당
    - 기존 데이터를 복사하는 작업이 필요
        
        >⇒ O(n) 비용이 발생한다.
        
        <br>
    
    즉 최악의 경우 item 삽입시 O(n)이 되지만
    
    >⇒ 더블링이 매번 일어나는 것이 아니기 때문에
    
    >⇒ 분할 상환 분석에 따른 item 삽입시의 시간복잡도는 O(1)이다.
    
    >.. 참고) 위와 같이 분할 상환 분석에 따른 시간 복잡도 설명하는 대표적인 자료형이 동적 배열이다.

## 교제 문제

<details>
    <summary>Two-Sum</summary>

- Two-Sum
    문제 : 두 수를 더하여 target을 만들 수 있는 수의 인덱스를 반환하라
    <부루트 포스 계산>
    
    부루트 포스 계산 : 일일 모든 조합을 확인해보는 방식
    
    ```java
    class Solution {
        public int[] twoSum(int[] nums, int target) {
            
            for(int i=0; i<nums.length; i++)
                for(int j=i+1 ; j<nums.length; j++)
                    if(nums[i] + nums[j] == target)
                        return new int[] {i,j};
            
            
            return null;
        }
    }
    ```
    
    시간 복잡도 : O(n^2)
    
    <br>

    <투 포인터 계산>
    
    ```java
    class Solution {
        public int[] twoSum(int[] nums, int target) {
            int left = 0;
            int right = nums.length -1;
    
           while (left != right){
               int sum = nums[left] + nums[right];
               if( sum > target)
                   right -=1;
               else if(sum < target)
                   left+=1;
               else{
                   return new int[]{left, right};
               }
           }
           return null;
            
        }
    }
    ```
    
    시간복잡도 : O(n)

</details>


<details>
    <summary>Trapping-rain-water</summary>

- Trapping-rain-water
    문제 : 높이를 입력받아 쌓일 수 있는 물의 양을 계산하라.
    <투 포인트>
    
    ```java
    class Solution {
        public int trap(int[] height) {
            int left = 0, right = height.length-1;
            int volum =0;
            int leftMax =height[left], rightMax=height[right];
            
            while(left<right){
            
            leftMax = Math.max(leftMax, height[left]);
            rightMax = Math.max(rightMax, height[right]);
            
            if(leftMax >= rightMax){
                volum += rightMax - height[right];
                right-=1;
            }else{
                volum += leftMax - height[left];
                left+=1;
            }
            
            }
            return volum;
        }   
    }
    시간 복잡도 O(n)
    ```
</details>



<details>
    <summary>3sum</summary>

- 3Sum
    문제 : 배열을 입력받아 세수의 합이 0을 만들수 있는 세 엘리먼트를 반환하라.
<브루트 포스>

    ```java
    class Solution {
        public List<List<Integer>> threeSum(int[] nums) {
            List <List<Integer>> list = new ArrayList();
            Arrays.sort(nums);
            
            for(int i=0; i<nums.length-2; i++){
                if(i>0 && nums[i] == nums[i-1])
                    continue;
                for(int k=i+1; k<nums.length-1; k++){
                    if(k>i+1 && nums[k] == nums[k-1])
                        continue;
                    
                    for(int j=k+1; j<nums.length; j++){
                        if(j>k+1 && nums[j] == nums[j-1])
                        continue;
                        if(nums[i]+nums[k]+nums[j]==0)
                        list.add(new ArrayList(Arrays.asList(nums[i],nums[j],nums[k])));
                        
                    }
                }
                    
                
                
            }
            
            
            return list;
            
        }
    }
    // 시간복잡도 O(n^3)
    ```

<br>

<투포인터>

    ```java
    class Solution {
        public List<List<Integer>> threeSum(int[] nums) {
           Arrays.sort(nums);
            List <List<Integer>> result = new ArrayList<>();
            
            for(int i=0; i<nums.length-2 ; i++){
                
                if(i>0 && nums[i] == nums[i-1])
                    continue;
                
                int left = i+1, right =nums.length-1;
                while(left<right){
                    int sum = nums[i]+nums[left]+nums[right];
                    if(sum < 0)
                        left+=1;
                    else if(sum > 0)
                        right-=1;
                    else{
                        result.add(new ArrayList(Arrays.asList(nums[i],nums[left],nums[right])));
                        
                    while(left<right && nums[left] == nums[left+1])
                        left+=1;
                    
                    while(left<right && nums[right] == nums[right-1])
                        right-=1;
                        
                    left+=1;
                    right-=1;
                    }
                        
                }
                
            }
            
            
            return result;
            
        }
    }
    // 시간 복잡도 O(n^2)
    ```
</details>

<details>
    <summary>Array Partition I</summary>
    
- Array Partition I
    문제 : n개의 페어를 이용한 min(a,b)의 합으로 만들 수 있는 가장 큰 수를 반환하라.
    
    ```java
    class Solution {
        public int arrayPairSum(int[] nums) {
            int result = 0;
            Arrays.sort(nums);
            
            for(int i =0; i<nums.length; i+=2){
            result += Math.min(nums[i],nums[i+1]);    
            }
            return result;
        }
    }
    // 시간복잡도 O(n)
    ```
</details>



<details>
    <summary>Best Time to buy and sell stock</summary>

- Best Time to buy and sell stock
    문제 : 한번에 거래로 낼 수 있는 최대 이익을 산출하라.
    
    ```java
    class Solution {
        public int maxProfit(int[] prices) {
            int bestPrice =0;
            
            int min = prices[0];
            
            for(int i =0; i<prices.length ; i++){
            
                min = Math.min(min,prices[i]);
                best = Math.max(best, prices[i]-min);
                
            }
            
            return bestPrice;
            
        }
    }
    // 시간 복잡도 O(n)
    ```
</details>