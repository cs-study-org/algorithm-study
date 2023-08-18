# 문자열 조작

## 문자열 처리 관련 알고리즘이 사용되는 분야
1. 정보 처리 분야 : 어떤 키워드로 웹 페이지를 탐색할 경우
2. 통신 시프템 분야 : 문자메시지나 이메일을 보낼 경우
3. 프로그래밍 시스템 분야 : 컴파일이나 인터프리터가 문자열을 해석하고 처리하여 기계어로 변환하는 경우

## 1. 유효한 팰린드롬(Valid Palindrome)
팰랜드롬 : 앞뒤가 똑같은 단어나 문장으로, 뒤집어도 같은 말이 되는 단어 또는 문장

### 풀이 서술
1. 대소문자를 구분하지 않기 때문에 lower() 사용
2. 뛰어 쓰기를 없어주어야함
3. 자료구조 Dequeue에 넣고
4. 앞 뒤 를 비교하여 다 맞으면 true 틀리면 false

### 코드
- 코딩 미숙으로 예제 코드를 인용함

```python3
from collections import deque

def Palindrome(s:str) -> bool:
    strs = deque()

    for char in s:
        if char.isalnum():
            strs.append(char.lower())

    while len(strs) > 1:
        if strs.popleft() != strs.pop():
            print(False)
            return False

    print(True)
    return True

a = input()

Palindrome(a)
```

