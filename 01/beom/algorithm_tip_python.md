# 파이썬 코딩 테스트 Tip!
파이썬 코딩 테스트를 위해 사전작업


## 리스트 원소를 출력할 떄 join 사용하기
```python3
# 안좋은예: + 로 string 잇기
mymsg=[‘line1’,’line2’] 
for msg in mymsg :
	word += msg+ ' '

# 더 나은 선택
mymsg=[‘line1’,’line2’] 
‘ ’.join(mymsg)
```

## 문자열에 + 연산자 피하기
```python3
# 안좋은 예
msg = ’hello’ + mymsg + ’world’

# 더 나은 선택
msg = f'hello {mymsg} world'
```

## 제너레이터(Generaotr) 사용하기
- Generator : iterator 를 생성해 주는 함수 
	- iterator : next() 메서드를 이용해 데이터에 순차적으로 접근이 가능한 객체

**제너레이터 사용이유**
1. 메모리를 효율적으로 사용 #list에 경우 사이즈가 커질수록 메모리 사용량이 늘어남. 반면, generator의 경우 사이즈가 커져도 차지하는 메모리 사이즈는 동일
2. Lazy Evaluation 효과를 볼 수 있다. #Lazy Evaluation: 계산 결과값이 필요할 때까지 계산을 늦추는 효과

```python3
def generator(n):
    i = 0
    while i < n:
        yield i
        i += 1

for x in generator(5):
    print(x)

# 출력
0
1
2
3
4
```

[제너레이터 링크](https://milhouse93.tistory.com/159)

## 파이썬에서 코드 성능 확인하는 법
- cProfile 및 프로파일과 같은 프로파일링 모듈 사용

```python3
python -m cProfile [-o output_file][-s sort_order](-m module | myscript.py)
```

## 풀제풀이에 도움되는 메서드
```python3
# 소수점 내림, 올림
from math floor, ceil
floor(), ceil() 

# comparator 함수로 정렬 조건을 정함
from functools import cmp_to_key
sorted(lst, key=cmp_to_key(comparator))
# 정렬 조건이 두 개일때 이렇게도 가능하다
lambda x : (x[0], -x[1])

# out of index 피하는 방법
if a[-1:] == [i]:

# 진수 변환, 문자열 반환
format(42, 'b')

# 문자열 알파벳 모두 소문자로, 대문자로 변경, 반전
islower(), isupper(), swapcase()

# 아스키->문자, 문자->아스키
chr(), ord()

# permutations : 순열, 중복 허용 X
# product : 순열, 중복 허용 O
# combinations : 조합, 중복 허용 X
# combinations_with_replacement : 조합, 중복 허용 O
from itertools import permutations, combinations, product
p = list(permutations(lst, 2))
p = list(product(lst, repeat=2))
p = list(combinations(lst, 2))
p = list(combinations_with_replacement(lst, 2))

# (몫, 나머지) 튜플 리턴
divmod(나눠지는 수, 나누는 수)

# 알파벳으로만 되어있는지, 숫자로만 되어있는지 참,거짓 반환
isalpha(), isdigit()

# 자리 수(인자 값) 만큼 0으로 채움 
"123".zfill(5) 은 "00123" 반환
# 자리 수(첫번째 인자 값) 만큼 두번째 인자값으로 채움 
"123".rjust(5, "a") 은 "aa123" 반환
# 위와 같은 방법으로 왼쪽 정렬, 가운데 정렬
ljust(), center()

# 덱을 생성할 때 최대 길이를 설정할 수 있다.
from collections import deque
# 스택 구현
append(), pop()
# 큐 구현
appendleft(), pop(), append(), popleft()
# deque 확장
extend(), extendleft()
# list 처럼 사용, remove는 왼쪽부터 제거
insert(), remove()
dq.insert(0, 'K')
# 내용 반전
reverse()

# 요소들의 개수를 세서 딕셔너리 형태로 담아줌
from collections import Counter
# 가장 많이 출현한 키를 n개 까지 찾아준다
most_common(n) 
# 덧셈 뺄셈이 가능, &(교집합)과 |(합집합)도 가능
# 뺄셈의 경우 사라지지 않고 마이너스로 표현하고 싶을 경우
a.subtract(b) 마이너스로도 나타내줌
# 카운터 숫자만큼 요소들 반환
elements()

# 순서가 있는 딕셔너리
from collections import OrderedDict
# 인자 X 혹은 last=true 라고 주면 마지막 값을 리턴하고 제거
ordered_dict.popitem()     
# last=False 라고 주면 첫번째 값을 리턴하고 제거
ordered_dict.popitem(last=False)    
# 한꺼번에 딕셔너리 생성
od = OrderedDict.fromkeys('red') 으로 생성하면 OrderedDict([('r', None), ('e', None), ('d', None)]) 
# 'r'키값을 제일 마지막으로 이동
od.move_to_end('r')  
# 'r'키값을 제일 처음으로 이동
od.move_to_end('r', last=False) 

# %s 에 'Bob'을 넣음
'Hello %s' % 'Bob'

# 문자열의 첫글자만 대문자로 변경, 문자열의 모든 단어들의 첫글자를 대문자로 변경
capitalize(), title()

# 문자열 대치 'a'를 'b'로 바꾸는데 2번째까지만 바꿈
replace('a','b',2)

# 재귀 제한 늘리기
import sys
sys.setrecursionlimit(10**6)

# 날짜 관련
from datetime import datetime, timedelta
dt = datetime.strptime('2018/02/22 10:56','%Y/%m/%d %H:%M:%S.%f')
another_year = timedelta(weeks=40, days=84, hours=23, minutes=50, seconds=600)
d.strftime('%Y-%m-%d %H:%M:%S')  # 날짜/시간 객체를 문자열로 만들기
```

## 테스트 케이스 입력 방법
```python3
input()

import sys
sys.stdin.readline().rsplit('\n')
```
1. input과 sys.stdin.readline().rsplit('\n') 두가지 방법으로 테스트 케이스를 입력하는데 후자가 더 빠름

**정수를 입력 받을 경우**
```python3
a, b = map(int, input().split())
```

[참고 링크](https://phil-baek.tistory.com/entry/%EC%BD%94%ED%85%8C-%ED%8C%8C%EC%9D%B4%EC%8D%AC-Use-case-%EC%A0%95%EB%A6%AC)

## 시간, 공간 복잡도 관련 팁
```python3
import time
start_time = time.time()

# 프로그램 작성
end_time = time.time()
print("time :", end_time - start_time)
```

[참고 링크](https://kih0902.tistory.com/35)




## 참고 문헌
[코드 성능 확인까지의 참고문헌](https://velog.io/@swhan9404/%ED%8C%8C%EC%9D%B4%EC%8D%AC-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EA%B4%80%EB%A6%AC%EA%B3%BC-%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9D%B8-%EC%BD%94%EB%93%9C)