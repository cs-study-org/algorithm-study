# 비트 연산

## 개념 참고문헌

[참고문헌](https://vmpo.tistory.com/106)

[참고문헌2](http://www.tcpschool.com/java/java_operator_bitwise)


## 코딩 테스트

## 카카오 2018 블라인드(비밀지도)

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/17681)

### 문제 요약
비밀 지도를 반환(링크 참조 ㅎ.ㅎ)

### 시간복잡도 공간 복잡도
| time | space |
|------|-------|
| O(n^2) | O(1)  |

### 코드
```java
class Solution {
    public String[] solution(int n, int[] arr1, int[] arr2) {
        String[] answer = new String[n];

        for(int i = 0; i < n; i++){
            answer[i] = Integer.toBinaryString(arr1[i] | arr2[i]);
            if(answer[i].length() != n){
                while (answer[i].length() != n){
                    answer[i] = "0" + answer[i];
                }
            }
            answer[i] = answer[i].replaceAll("1", "#");
            answer[i] = answer[i].replaceAll("0"," ");
        }
        return answer;
    }
}
```

### 회고
```java
if(answer[i].length() != n){
  while (answer[i].length() != n){
    answer[i] = "0" + answer[i];
    }
}  

```java
if(answer[i].length() != n){
  if(answer[i].length() != n){
    answer[i] = String.format("%0" + n +"d", Integer.parseInt(answer[i]));
  }
}
```
2진수 앞에 0을 붙히는 과정에서 처음에
