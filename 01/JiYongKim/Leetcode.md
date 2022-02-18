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
        int n = s.length();
        Set<String> dict = new HashSet(wordDict);
        boolean[] memo = new boolean[n+1];
        memo[n] = true;
        for(int i=n-1; i >= 0; i--){
            for(int j=i; j < n; j++){
                if(dict.contains(s.substring(i, j+1)) && memo[j+1]){
                    memo[i] = true;
                    break;
                }
            }
        }
        
        return memo[0];
    }
}
```
설명)
s = "leetcode", wordDict = {"leet", "code"} 일때
1. 문자열 값 하나씩 더해가며 wordDict의 값에 존재하면 새로운 리스트에 저장한다.
2. 새로운 리스트에 저장된 값이 wordDict에 모두 포함되어 있으면 true 반환.

( 현재 해결하지 못하였고 메모이제이션을 이용한 풀이법이다. DP 챕터로 넘어가 다시 풀이해 보아야 할것 같다...)

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