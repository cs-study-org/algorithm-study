# Hash



## HashTable

### HashTable 개념
- Key와 Value를 1:1로 연관지어 저장하는 자료구조( 연관배열 구조)
- Key를 이용하여 Value 도출

### HashTable 기능
- 연관배열 구조와 동일한 기능 지원
- Key, Value가 주어졌을때, 두 값을 저장
- Key가 주어졌을 때, 해당 Key에 연관된 Value 조회
- 기존 Key에 새로운 Value가 주어졌을 때, 기존 Value를 새로운 Value로 대체
- Key가 주어졌을 때, 해당 Key에 연관된 Value 제거

### HashTable 구조
![HashTable 구조](asset/hashtable.PNG)

> Key, Hash Function, Hash, Value, 저장소(Buckey, Slot)로 구성

- Key
  - 고유한 값
  - 저장 공간의 효율성을 위해 Hash Function에 입력하여 Hash로 변경 후 저장
    - Key는 길이가 다양하기 때문에 그대로 저장하면 다양한 길이만큼 저장소 구성이 필요
- Hash Function
  - Key를 Hash로 바꿔주는 역할
  - 해시 충동(서로 다른 Key가 같은 Hash가 되는 경우)이 발생할 확률을 최대한 줄이는 함수를 만드는 것이 중요
- Hash
  - Hash Function의 결과
  - 저장소에서 Value와 매칭되어 저장
  - 저장소에서 Value의 인덱스 값
- Value
  - 저장소에 최종적으로 저장되는 값
  - 키와 매칭되어 저장, 삭제, 검색, 접근 가능

### HashTable 동작 과정
1. Key -> Hash Function -> Hash Function 결과 = Hash
2. Hash를 배열의 Index로 사용
3. 해당 Index에 Value 저장

ex) HashTable 크기가 10이라면 A라는 Key의 Value를 찾을 때 HashFunction("A") % 10 연산을 통해 인덱스 값 계산하여 Value 조회


### Hash 충돌
- 서로 다른 Key가 Hash Function에서 중복 Hash로 나오는 경우
- 충돌이 많아질수록 탐색의 시간 복잡도가 O(1)에서 O(n)으로 증가

### Hash 충돌 해결 방법