# 문자열 문제 모음

## 목차
## 3. Longest Substring Without Repeating Characters
## 763. Partition Labels
## 139. Word Break




## 3. Longest Substring Without Repeating Characters

### 풀이 서술
1. 문자열 s를 한 글자씩 배열에 넣는다.
2. for문을 통해 앞에 배열에 동일한 값이 나오면 break
3. 하위 문자열을 잘모르겠다. 아스키 코드를 사용하는 건가?


### 코드
```java
import java.util.Scanner;

class Solution {
    public static int lengthOfLongestSubstring(String s) {
        int len = s.length();
        int res = 0;

        for(int i=0;i<len;i++){
            boolean[] visited = new boolean[256];

            for(int j=i;j<len;j++){
                if(visited[s.charAt(j)]==true){
                    break;
                }
                else{
                    res = Math.max(res,j-i+1);
                    visited[s.charAt(j)] = true;
                }
            }
            visited[s.charAt(i)] =false;
        }
        System.out.println(res);
        return res;
    }


    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        lengthOfLongestSubstring(str);
    }
}
```
