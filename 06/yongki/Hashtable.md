# 해시 테이블

- [해시 테이블](#해시-테이블)
  - [이론](#이론)
  - [논제](#논제)
  - [구현 문제 리스트](#구현-문제-리스트)
    - [문제 회고](#문제-회고)
    - [문제 풀이](#문제-풀이)
    - [문제 풀이](#문제-풀이-1)
  - [문제 리스트](#문제-리스트)
    - [문제 회고](#문제-회고-1)
    - [문제 풀이](#문제-풀이-2)
  - [문제 회고](#문제-회고-2)
  - [문제 풀이](#문제-풀이-3)
  - [참고 문헌](#참고-문헌)

## 이론

<details>
<br/>

해시란

    임의 크기 원소(키) → 고정 크기 값(해시값)으로 매핑한 것이다.

해시 함수란

    키를 입력받아 해시 주소를 생성하고, 이 해시 주소를 해시 테이블의 인덱스로 사용한다.

해시 함수에는 조건이 있는데,

<details>
<summary>1. 충돌이 적어야 하며,</summary>
<br/>

해시 충돌은 

    h라는 해시 함수에 k1과 k2라는 두 개의 키가

    h(k1) === h(k2) 되는 경우를 말한다.

해시 충돌이 빈번하면,

    버킷 내부에서 순차 탐색 시간이 길어져 탐색 성능이 저하된다.

    이때, 해시 충돌이 버킷의 슬롯 수보다 빈번하다면,
    
    버킷에 항목을 저장할 수 없으므로, 오버플로우가 발생했다는 의미이다.

해시 충돌을 최소화하려면

    a. 해시 함수를 수정하거나
    b. 해시 테이블의 크기를 적절히 조절해야 한다.

대표적인 해시 충돌 해결 기법 2가지는

1. `Seperate Chaining`

        해시 값이 충돌 된 해시 테이블의 버킷에는 연결 리스트로 원소가 연결된다.

    장점은

        원소를 무한정 저장할 수 있고,

    단점은

        - Search 행위에 O(n)이 된다.
        - 추가 메모리 할당의 비용이 따른다.

2. `Open Addressing`

        해시 값이 충돌 됬다면, 충돌 되지 않은 해시 테이블의 해시 주소를 탐사한다.

    장점은

        해시 테이블의 고정된 사이즈를 보장한다.
        
        즉, 메모리 할당을 조절할 수 있다.

    단점은

        - 원소의 해시 값이 해시 테이블의 키와 다를 수 있다.
        - 고정된 사이즈 또는 로드 팩터(자료형의 임계점)를 넘어서는 경우 리해싱의 비용이 따른다.

</details>
<br/>

<details>
<summary>2. 해시 함수값이 해시 테이블 주소 영역 내에 고르게 분포되어야 하며,</summary>
<br/>

해시 테이블의 크기를 홀수로 지정하는 이유인데,

직관적인 해시 함수인 `k(키) mod M(해시 테이블의 크기)`에서 

M이 짝수이고 k가 메모리 기반 키라면, 짝수에만 편향된 해시 함수값이 나온다.

M이 홀수 중 소수이고 k가 메모리 기반 키라면, k와 1을 약수로 가지는 수들이 해시 함수값이 됨으로 해시 주소의 분포가 넓다.
</details>
<br/>

<li>3. 계산이 빨라야 한다.</li>
<br/>
    
해싱은

    해시 테이블을 이용한 탐색을 말한다.

    조금 더 풀어쓰면, 어떤 항목의 키만을 가지고 항목이 들어 있는 배열의 인덱스를 탐색할 수 있는 기법이다.

해싱의 일반화는

    정리 정돈을 잘하는 사람이다. 

    물건마다 고유한 위치가 있고, 그 위치에 그 물건을 보관하기 때문이다.

    해시의 사용 예시는 데이터베이스 이다.

해싱에서 자료 구조는 

    배열을 사용한다.

    ...

</details>

## 논제

<details>
<summary>해시함수를 오버라이드 하는 상황은 어떤 상황이 있나 </summary>
<br/>

- 메모리 기반 키와 값 기반 키를 서술하라

      메모리 기반 키는 h(Object(key))

      값 기반 키는 h(key)이다.

- 값 기반 키의 필요성을 서술하라

      메모리 기반은 h(Object(key1)) !== h(Object(key1)) 이다.

      값 기반은 h(key1) === h(key1)을 보장한다.

</details>

## 구현 문제 리스트

해시셋과 해시맵의 차이는

|                                          | HashSet                  | HashMap                                                           |
| ---------------------------------------- | ------------------------ | ----------------------------------------------------------------- |
| Duplicates                               | No                       | Yes duplicates values are allowed but no duplicate key is allowed |
| Objects required during an add operation | 1                        | 2                                                                 |
| Null                                     | Have a single null value | Single null key and any number of null values                     |

<details>
<summary>
  705. Design HashSet
  <a href="https://leetcode.com/problems/design-hashset/">👊</a>  
</summary>

### 문제 회고

빌트인 자료형을 쓰면 금방 해결되는 문제다.

때문에 
   1. 해시 함수를 간단히 구현해보고
   2. 충돌 시, 충돌 해결 기법 또한 구현해보기로 하였다.

숫자를 키로 받는 해시 함수는 교재에도 나온 `나머지 방식`을 이용했다.
    
    key % this.maxSize

나머지 방식은 테이블이 배열일 때

    해시 함수값을 그대로 인덱스로 사용하는 것보다 배열의 크기를 줄여주는 효과를 주며

또는 테이블이 객체이면서 `maxSize`를 key의 자릿수보다 높게 측정시

    maxSize = 10^3
    key     = 10^2

    key와 동일한 해시 함수값으로 변환해주는 효과를 준다.

### 문제 풀이

해시 충돌 해결 기법으로 `Seperate Chaining`를 사용했지만,

버킷의 슬롯에서 탐색은 해시 테이블 크기만큼 탐색하지 않기 때문에 상수라 정의하였다.

때문에 해시 테이블 평균의 시간복잡도가 나왔다.

|       | `add`  | `contains` | `remove` | `_getHash` |
| :---: | :----: | :--------: | :------: | :--------: |
| time  | `O(1)` |   `O(1)`   |  `O(1)`  |   `O(1)`   |
| space | `O(1)` |   `O(1)`   |  `O(1)`  |   `O(1)`   |

> `src\705.js`에서 확인해볼 수 있다.

</details>

<details>
<summary>
  706. Design HashMap
  <a href="https://leetcode.com/problems/design-hashmap/">👊</a>  
</summary>

### 문제 풀이

|       | `put`  | `get`  | `remove` | `_getHash` |
| :---: | :----: | :----: | :------: | :--------: |
| time  | `O(1)` | `O(1)` |  `O(1)`  |   `O(1)`   |
| space | `O(1)` | `O(1)` |  `O(1)`  |   `O(1)`   |

> `src\706.js`에서 확인해볼 수 있다.

</details>

## 문제 리스트

<details>
<summary>
  Lv1. 완주하지 못한 선수
  <a href="https://programmers.co.kr/learn/courses/30/lessons/42576">👊</a>  
</summary>

### 문제 회고

일반적인 HashTable을 구현해보고 사용해보았다.

문자열을 키로 둔 해시 함수를 만들어야 했는데, 일반적인 `Horner's method`를 사용하였다.

    문자의 아스키 코드 값을 해시 주소로 사용하는데,

    cup나 puc일 때 생기는 해시 충돌을 줄이도록

    문자의 순서도 해시 주소를 만드는데 사용한다.

    고정된 해시 주소를 위해 32자릿수의 인덱스를 사용하며,     

        c * 31
        u * 30
        p * 29

### 문제 풀이

> `src\Lv1.js`에서 확인해볼 수 있다.

</details>

<details>
<summary>
  Lv2. 전화번호 목록
  <a href="https://programmers.co.kr/learn/courses/30/lessons/42577">👊</a>  
</summary>

## 문제 회고

문제 제출 에디터가 Javascript 언어 컴파일을 지원하지 않아 제출을 해볼 순 없었다.

빌트인 자료형의 해시 테이블 기반 자료형을 사용했으면 언어 구분없이 제출을 할 수 있었지만, 

구현한 자료구조를 사용하기 위해서이다.

처음 접근으로는 문자열 조작으로 해결했으나 주제에 맞지 않았다. 문제 풀이에서도 제외하였다.

    time:   O(n²)
    space:  O(1)

풀이는 `다른 사람의 풀이`로 참고할 수 있었다.

해시를 사용하니 공간은 늘어났지만 시간을 줄일 수 있었다.

    time:   O(ab)
    space:  O(a)

## 문제 풀이

> `src\Lv2.js`에서 확인해볼 수 있다.

</details>

<hr/>

## 참고 문헌

[Hash table 이론](https://booksr.co.kr/html/book/book.asp?seq=697058) ━ *「C언어로 쉽게 풀어쓴 자료구조[개정3판]」*

[HashSet vs HashMap](https://www.geeksforgeeks.org/difference-between-hashmap-and-hashset/) ━ *GeeksForGeeks*

[문자열 Hash Function](https://devday.tistory.com/entry/자바스크립트-JavaScript에서-자바-Java-문자열-String-hashCode-구현하기) ━ *개발자의 하루*

[Hash code with memory](https://okky.kr/article/443194) ━ *Okky*

[Simple Solution at Lv2. 전화번호 목록](https://programmers.co.kr/learn/courses/30/lessons/42577/solution_groups?language=java) ━ *Programmers*