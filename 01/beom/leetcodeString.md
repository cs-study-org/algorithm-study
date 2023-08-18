# 문자열 문제 모음

## 목차
## 1672. Richest Customer Wealth
## 20. Valid Parentheses
## 3. Longest Substring Without Repeating Characters
## 763. Partition Labels
## 139. Word Break


## 1672. Richest Customer Wealth
### 풀이서술
1. 2차원 배열을 입력받고
2. 2차원 배열의 for문 안에 sum을 구해 변수에 넣고 Math.max로 비교
3. 가장 큰값 출력

### 코드
```java
class Solution {
    public static int maximumWealth(int[][] accounts) {
        int res = 0;
        int m = accounts.length;
        int n = accounts[0].length;

        for(int i=0; i<m;i++){
            int tmp = 0;

            for(int j=0;j<n;j++){
                tmp = tmp + accounts[i][j];
            }
            res = Math.max(res,tmp);
        }
        System.out.println(res);
        return res;
    }

    public static void main(String[] args) {
        int[][] account = {{9,8},{5,7},{2,3}};
        maximumWealth(account);
    }
}
```

## 20. Valid Parentheses

### 풀이 서술
1. 문자열을 입력받고
2. 스택 자료구조를 사용
3. ([{ 으로 시작하면 push
4. 아니면 )}]인 경우이므로 stack의 가장 위에 값이 맞는 괄호라면 pop

### 코드
```java
import java.util.Stack;

class Solution {
    public static boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for(int i=0;i<s.length();i++){
            if(s.charAt(i) == '('||s.charAt(i) == '{'||s.charAt(i) == '['){
                stack.push(s.charAt(i));
            }
            else{
                if(stack.size()==0) return false;
                if(s.charAt(i)==')'){
                    if(stack.peek() =='('){
                        stack.pop();
                    }
                    else return false;
                }
                else if(s.charAt(i)=='}'){
                    if(stack.peek() =='{'){
                        stack.pop();
                    }
                    else return false;
                }
                else if(s.charAt(i)==']'){
                    if(stack.peek() =='['){
                        stack.pop();
                    }
                    else return false;
                }
            }
        }
        if(stack.size()==0) return true;
        else return false;
    }

    public static void main(String[] args) {
        isValid("{}[");
    }
}
```


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
