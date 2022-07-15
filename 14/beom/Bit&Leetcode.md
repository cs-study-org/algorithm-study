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

2진수 앞에 0을 붙히는 과정에서 처음에 `String.format`을 사용하였더니 시간을 초과했다.
String.format는 문자열 전체를 도는 작업이라는 것을 알았다!


## 2개 이하로 다른 비트(틀)

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/77885)

### 문제 요약
수를 비트로 바꿨을 때 수보다 크면서 비트의 다른 수가 2개 이하인 수 찾기

### 시간복잡도 공간 복잡도
| time | space |
|------|-------|
| O(n^3) | O(n)  |

### 코드
```java
class Solution {
    public long[] solution(long[] numbers) {
        long[] answer = new long[numbers.length];

        for(int i = 0; i < numbers.length; i++){
            if(numbers[i] % 2 == 0){
                answer[i] = numbers[i]+1;
            }else {
                long func = numbers[i]+1;
                while(true){
                    String str = Long.toBinaryString(numbers[i] ^ func);
                    int count = 0;
                    for(int j = 0; j < str.length(); j++){
                        if(str.charAt(j) == '1'){
                            count++;
                        }
                        if(count > 2){
                            break;
                        }
                    }
                    if(count <= 2){
                        answer[i] = func;
                        break;
                    }
                    func++;
                }
            }
        }
        return answer;
    }
}
```


### 다른 사람의 맞은 코드
```java
class Solution {
    public long[] solution(long[] numbers) {
        int len = numbers.length;
        long[] answer = new long[len];
        for(int i=0; i<len; i++) {
            answer[i] = getBigChgBit(numbers[i]);
        }
        return answer;
    }

    public long getBigChgBit(long num) {
        if(num % 2 == 0 || num == 1) return num+1;
        
        String binary = Long.toBinaryString(num);
        StringBuilder sb = new StringBuilder(binary);
        
        if(sb.indexOf("0") < 0) {
            sb.insert(0,'0');
        }
        
        for(int i=binary.length()-1;i>=0;i--) {
            if(sb.charAt(i) == '0') {
                sb.setCharAt(i, '1');
                if(i!=binary.length()-1) {
                    sb.setCharAt(i+1, '0');
                }
                break;
            }
        }
        return Long.valueOf(sb.toString(), 2);
    }
    
}
```

### 회고
다른 풀이들을 보았는데 XOR 연산을 대부분 사용하지 않았다...

내가 너무 XOR연산을 해야한다는 고정관념 때문에 틀렸나...

후...