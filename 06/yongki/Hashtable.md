# 해시 테이블

- [해시 테이블](#해시-테이블)
  - [이론](#이론)
  - [논제](#논제)
  - [구현 문제 리스트](#구현-문제-리스트)
    - [문제 회고](#문제-회고)
    - [문제 풀이](#문제-풀이)
  - [문제 리스트](#문제-리스트)
    - [문제 회고](#문제-회고-1)
    - [문제 풀이](#문제-풀이-1)
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

    h()라는 해시 함수에 k1과 k2라는 두 개의 키가

    h(k1) === h(k2) 되는 경우를 말한다.    

해시 충돌이 최소화하는 이유는

    해시 충돌이 빈번할 시, 버킷 내부에서 순차 탐색 시간이 길어져 탐색 성능이 저하된다.

    이때, 해시 충돌이 버킷의 슬롯 수보다 빈번하다면,
    
    버킷에 항목을 저장할 수 없으므로, 오버플로우가 발생했다는 의미이다.

해시 충돌을 최소화하려면

    a. 해시 함수를 수정하거나
    b. 해시 테이블의 크기를 적절히 조절해야 한다.

대표적인 해시 충돌 해결 기법 2가지는

1. `Seperate Chaining`

        해시 값이 충돌 된 해시 테이블의 값에는 연결 리스트로 원소가 연결된다.

    장점은

        원소를 무한정 저장할 수 있고,

    단점은

        - Search 행위에 O(n)이 된다.
        - 추가 메모리 할당의 비용이 따른다.


2. `Open Addressing`

        해시 값이 충돌 됬다면, 충돌 되지 않은 해시 테이블의 키를 탐사한다.

    장점은

        해시 테이블의 고정된 사이즈를 보장한다.
        
        즉, 메모리 할당을 조절할 수 있다.

    단점은

        - 원소의 해시 값이 해시 테이블의 키와 다를 수 있다.
        - 고정된 사이즈 또는 로드 팩터(자료형의 임계점)를 넘어서는 경우 리해싱의 비용이 따른다.

</details>

<details>
<summary>2. 해시 함수값이 해시 테이블 주소 영역 내에 고르게 분포되어야 하며,</summary>
<br/>
해시 테이블의 크기를 홀수로 지정하는 이유인데,

직관적인 해시 함수인 `k(키) mod M(해시 테이블의 크기)`에서 

M이 짝수, k가 메모리 기반 키라면, 짝수에만 편향된 해시 함수값이 나온다.
M이 홀수 중 소수, k가 메모리 기반 키라면, k와 1을 약수로 가지는 수들이 해시 함수값으로 분포가 넓기 때문이다.
</details>

<details>
<summary>3. 계산이 빨라야 한다.</summary>
</details>


해시의 일반화는

    정리 정돈을 잘하는 사람이다. 

    물건마다 고유한 위치가 있고, 그 위치에 그 물건을 보관하기 때문이다.

    해시의 사용 예시는 데이터베이스 이다.
    
해싱은

    해시 테이블을 이용한 탐색을 말한다.

    조금 더 풀어쓰면, 어떤 항목의 키만을 가지고 항목이 들어 있는 배열의 인덱스를 탐색할 수 있는 기법이다.

해싱에서 자료 구조는 

    배열을 사용한다.

해시셋과 해시맵의 차이는

|                                          | HashSet                  | HashMap                                                           |
| ---------------------------------------- | ------------------------ | ----------------------------------------------------------------- |
| Duplicates                               | No                       | Yes duplicates values are allowed but no duplicate key is allowed |
| Objects required during an add operation | 1                        | 2                                                                 |
| Null                                     | Have a single null value | Single null key and any number of null values                     |

</details>

## 논제

<details>
<summary>해시함수를 오버라이드 하는 상황은 어떤 상황이 있나 </summary>

    - 메모리 기반 해시함수 / 값 기반 해시함수을 서술하라

    - 값 기반 해시함수의 필요성을 서술하라

    - 해시 테이블로 구현된 주언어의 자료형의 구현 방식을 탐색하라

</details>

<details>
<summary>해시 테이블 시간복잡도가 평균 <code>O(1)</code>이 나오는 이유</summary>

    분할상환분석 기법을 통해 서술하시오.

</details>

## 구현 문제 리스트

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

해시 테이블을 교재에는 배열 자료구조를 사용했지만, 객체를 써보기로 판단했다.

해시 함수는 교재에도 나온 `나눗셈 방식`을 이용했고, 

원소를 처음에 한 두개를 넣고 제거할 시, size에 따라 해시 값이 동일히 나오기 때문에 

해시 충돌을 일으켜 이에 대한 대응도 테스트 해보기 좋았다.

### 문제 풀이

해시 충돌 해결 기법으로 `Seperate Chaining`를 사용해서 

해시 테이블 최악의 시간복잡도가 나왔다.

|       | `add`  | `remove` | `contains` | `_getHash` |
| :---: | :----: | :------: | :--------: | :--------: |
| time  | `O(n)` |  `O(n)`  |   `O(n)`   |   `O(1)`   |
| space | `O(1)` |  `O(1)`  |   `O(1)`   |   `O(1)`   |

체이닝의 연결리스트를 이중 연결리스트로 한 이유는

    스터디를 진행하면서 구현해본 적이 없었기 때문이다.
    
    때문에, 단일 연결리스트로 구현해도 충분하다.

> `src\705.js`에서 확인해볼 수 있다.

<dl><dt>
테스트 케이스 해결중이다.
</dt><dl>

</details>

## 문제 리스트

<details>
<summary>
  Lv1. 완주하지 못한 선수
  <a href="https://programmers.co.kr/learn/courses/30/lessons/42576">👊</a>  
</summary>

### 문제 회고

`705번`과 계기는 동일하다.

### 문제 풀이

문제 풀이의 핵심은 

- 배열 자료형의 `Search`행위의 메소드를 사용하지 않는 것이라 생각한다.

> `src\Lv1.js`에서 확인해볼 수 있다.

<dl><dt>
테스트 케이스 해결중이다.
</dt><dl>

</details>

<hr/>

## 참고 문헌

[Hash table 이론](https://booksr.co.kr/html/book/book.asp?seq=697058) ━ *「C언어로 쉽게 풀어쓴 자료구조[개정3판]」*

[HashSet vs HashMap](https://www.geeksforgeeks.org/difference-between-hashmap-and-hashset/) ━ *GeeksForGeeks*

[Doubly LinkedList 구현](https://github.com/cs-study-org/algorithm-study/blob/master/03/km/707-design-linked-list.py) ━ *GitHub*

[문자열 Hash Function](https://devday.tistory.com/entry/자바스크립트-JavaScript에서-자바-Java-문자열-String-hashCode-구현하기) ━ *개발자의 하루*