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

해시(`=해시 값(hash code)`) 란

    임의 크기 원소를 고정 크기 값(hash)으로 매핑한 것이다.
        
    해시 함수는 이를 수행하는 역할이다.

해싱은

    해시 테이블에 인덱싱하기 위해 해시 함수를 사용하는 것을 말한다.

여기서 인덱싱은,

    해시 테이블의 키(값 기반 or 메모리 기반)에 해시 값을 사용한여 원소를 저장하는 행위라 해석하였다.    

해시의 특징은

    1. 해시 함수 값 충돌의 최소화
    2. 쉽고 빠른 연산
    3. 해시 테이블에 해시 값이 균일하게 분포

Javascript의 해시 테이블 기반 자료형(모든 Javascript native 객체)은 다음과 같다고 한다.

<dl><dt>
In JavaScript, all non-scalar objects behave as associative arrays, a mapping from property keys to values.
</dt><dl>

여기서 associative arrays는 index-based arrays와 다르다.

associativie arrays는

    key-value 쌍으로 저장하는 자료형을 말한다.

    이들은 추적되지 않는다고 하는데, 길이 속성이 없다는 뜻이다.

    단, Object 객체를 제외한 Set, Map 등의 몇몇 객체는 길이 속성이 있는데, 
    통념보다는 편의상 넣게 된 건지 이유는 확실하게 알지 못한다.

Javascript의 해시 테이블 기반 자료형 중 Set 객체를 헤시셋, Map 객체를 해시맵이라고 생각한다.

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
<summary>해시 테이블 구현 방식</summary>
<br/>

해시 충돌을 최소화하는 일이 중요하다.

해시 충돌은 

    비둘기집 원리로 설명이 가능하다.
    
    n개 아이템을 m개 컨테이너에 넣는데, n > m이라면
    적어도 하나의 컨테이너에는 반드시 2개 이상의 아이템이 들어 있다는 원리이다.

    또한, 확률적으로 해시 충돌의 가능성은 매우 높다. 


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

|       | `add`  | `remove` | `contains` | `_getHashCode` |
| :---: | :----: | :------: | :--------: | :------------: |
| time  | `O(n)` |  `O(n)`  |   `O(n)`   |     `O(1)`     |
| space | `O(1)` |  `O(1)`  |   `O(1)`   |     `O(1)`     |

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

[Hash table 이론](http://wiki.hash.kr/index.php/해시테이블) ━ *해시넷*

[Javascript의 Hash table 기반 자료형의 구현 형태](https://www.mojavelinux.com/articles/javascript_hashes.html) ━ *MojaveLinux*

[non-scalar의 의미](https://www.quora.com/What-does-it-mean-with-data-is-non-scalar) ━ *Quora*

[HashSet vs HashMap](https://www.geeksforgeeks.org/difference-between-hashmap-and-hashset/) ━ *GeeksForGeeks*

[Doubly LinkedList 구현](https://github.com/cs-study-org/algorithm-study/blob/master/03/km/707-design-linked-list.py) ━ *GitHub*

[문자열 Hash Function](https://devday.tistory.com/entry/자바스크립트-JavaScript에서-자바-Java-문자열-String-hashCode-구현하기) ━ *개발자의 하루*