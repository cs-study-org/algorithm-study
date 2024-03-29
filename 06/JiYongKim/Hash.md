# Hash

## Hash 란?

Hash 의 정의 : `해시`는 데이터를 다루는 기법

Hash 값 : 다양한 길이를 가진 데이터를 고정된 길이를 가진 데이터로 매핑(mapping)한 값이다

해시를 통한 데이터 저 장에는 **검색과 저장이 아주 빠르게** 진행

아주 빠르게 진행될 수 있는 이유는 데이터를 검색할 때 사용할 key와 실제 데이터의 값이 (value가)  한 쌍으로 존재하고, key값이  인덱스로 변환되기 때문에 검색과 저장의 평균적인 시간 복잡도가 O(1)에 수렴하게 됩니다.
<br>


---

<br>

## Hash 특징

### **무결성**

해시는 특정한 데이터를 이를 상징하는 더 짧은 길이의 데이터로 변환하는 행위를 의미한다. 여기서 상징 데이터는 원래의 데이터가 조금만 달라져도 확연하게 달라지는 특성을 가지고 있어 무결성을 지키는 데에 많은 도움을 준다. 

<br>

Ex)
예를 들어 'A'라는 문자열의 해시와 'B'라는 문자열의 해시는 고작 한 알파벳이 다를뿐이지만 해시 결과값은 완전히 다른 문자열이 나오게 된다.

<br>

### **보안성**

해시는 기본적으로 복호화가 불가능하다는 특징이 있다.

이는 당연히 입력 데이터 집합이 출력 데이터 집합을 포함하고 있으므로, 특정한 출력 데이터를 토대로 입력 데이터를 찾을수 없기 때문이다.

 즉, 동일한 출력 값을 만들어낼 수 있는 입력 값의 가짓수는 수학적으로 무한개라고 볼 수 있다.

<br>

해시는 애초에 복호화를 수행할 수 없도록 설계되었으며, 실제로도 해커가 쉽게 복호화를 할 수 없다는 점에서 강한 보안성을 가진다.

<br>

- 입력값이 일부만 변경되어도 전혀 다른 해시값을 출력한다. [눈사태 효과]
- 입력값 상관없이 고정된 길이의 해시값을 출력한다.
- 복호화 불가능하다. [단방향 암호화 기법의 특징]
- 복잡하지 않은 알고리즘으로 구현되기 때문에 상대적으로 CPU, 메모리 같은 시스템 자원을 덜 소모한다.
- 같은 입력값에 대해서는 같은 출력값을 보장

<br>

---

<br>

## Hashing 이란?

**Hashing 이란?**

키(key)와 값(value)으로 매핑되는 과정 자체를 **해싱(Hashing)** 이라고 한다.

---

## Hash Function 이란?

**Hash 함수란?**

임의의 길이의 데이터를 고정된 길이의 데이터로 매핑하는 함수이다.

해시 함수의 용도로는

해시 테이블이라는 자료구조에서 키(key)를 매핑하는데 사용된다.

<br>

참고)

**만약 충돌이 전혀 발생하지 않는다면?**

- 해시 함수를 통해 인덱스를 찾는 방식의
    - 검색
    - 추가
    - 삭제
    
   > ⇒ 모두 시간복잡도 O(1) 이 된다.

<br>    

**해시 충돌을 피하는 방법 중 한가지 방법**

- 테이블의 크기를 크게하여 충돌 발생을 억제한다.
    - 장점
        - 테이블의 크기가 커짐에 따라 해시함수를 통해 나온 해시값으로 데이터 저장시 중복 저장을 줄일 수 있다.
    - 단점
        - 충돌을 억제 할 수 있지만 사용되지 않는 메모리가 많아져 메모리의 낭비
            
            ⇒ 즉 시간과 공간의 Trade-off
            
        
        >⇒ 그렇기에 해시 테이블 크기 이하의 정수를 되도록 고르게 만들어야 하기 때문에 소수가 좋다고 알려져 있다.
        
<br>

---

<br>

## Hash 이용

### 정렬된 배열에 새로운 값 추가

 <img width="692" alt="스크린샷 2022-03-07 오후 6 51 27" src="https://user-images.githubusercontent.com/81874493/157008420-23043975-9bf1-4ae2-bf0d-5e365866c43d.png">

위의 그림처럼 정렬된 배열에 새로운 값을 추가하게 될 경우

과정)

1. 삽입할 위치를 이진 검색으로 조사한다.
2. 인덱스 번호 6번 인덱스  요소 부터 모두  한칸씩 뒤로 이동한다.
3. 6번째 인덱스에 값을 대입한다.

위와 같은 과정으로 

- 이진 탐색 O(log n)
- 요소 이동 O(n)
    
    ⇒ 결국 O(n) 시간복잡도를 가지게 된다.
    

<br>

### 해시를 통해 새로운 값 추가

해시를 이용하면 

- 데이터를 저장할 위치 검색
- 데이터 추가
- 데이터 삭제
    
    ⇒ 효율적 수행이 가능하다.
    
   <img width="693" alt="스크린샷 2022-03-07 오후 6 51 43" src="https://user-images.githubusercontent.com/81874493/157008460-a81c308c-ede9-40a8-975d-41c228533ead.png">

    과정)
    
    1. 키값을 가지고 해시함수를 통해 해시값을 구한다.
    2. 구한 해시값을 인덱스 위치로 데이터를 추가한다.
    
    해시를 사용함으로써 이전 배열에 데이터를 삽입시 한칸씩 뒤로 옮겨야 하는 과정에 비해 더 빠르게 데이터의 처리를 할 수 있다.
    
    용어정리)
    
    - 해시 : 데이터를 다루는 기법
    - 해싱 : 데이터를 해시함수를 통해 매핑하는 과정
    - 해시값: 해시함수를 통해 얻은 값
    - 버킷 : 테이블의 각 요소(즉 Element)를 버킷 이라고 한다.
    
<br>

---

<br>

# Hash Collision

 <img width="729" alt="스크린샷 2022-03-07 오후 6 51 49" src="https://user-images.githubusercontent.com/81874493/157008498-0e649eb2-ba4e-4414-b903-cdd64a0e2f01.png">

정의 : **충돌(Collision)** 은 서로 다른 문자열이 Hash function을 통해 Hash 한 결과가 같은 경우 (중복되는 경우)이다.

⇒ 위의 그림에서처럼 저장할 버킷이 중복되는 현상을 충돌 이라고 한다.

충돌이 많아질 수록 같은 해시값의 데이터들에서 찾아야할 데이터를 찾는 과정이 추가되어

탐색의 시간 복잡도가 O(1)에서 O(n)에 가까워지기 때문에

⇒ 충돌이 적을 수록 좋은 해시함수가 된다.

충돌의 해결 방안으로 대표적 2가지가 존재

- Chaining : 같은 해시 값을 갖는 데이터를 쇠사슬(chain) 모양으로 연결리스트에서 연결하여 관리하는 방법
    - Linked List, Tree(Red-Black Tree)
- Open addressing.  빈 버킷을 찾을 때까지 해시를 반복하여 관리
    - - Linear Probing, Quadratic Probing, Double hashing

<br>

---

<br>

## Hash 충돌 보안 기법

**Chainig**

    
 <img width="704" alt="스크린샷 2022-03-07 오후 6 51 55" src="https://user-images.githubusercontent.com/81874493/157008511-58fc1501-3b42-4926-943b-bb50ee00b3b2.png">

Chaining : 체이닝 기법은 동일 해시 값을 갖는 데이터를 쇠사슬 모양으로 연결 리스트를 통해 관리하는 방법이다

<br>

**장점**

- 항목을 탐색하거나 저장, 삭제하고자 하면, 계산한 해시 주소에 해당하는 연결 리스트에서 독립적으로 수행하기 때문에, 오버 플로우가 발생해도 수행 시간 면에서 효율적이다.
- 연결 리스트로 구현하기 때문에 메모리 낭비도 없다.

<br>

**단점**

- 해시 함수의 퀄리티에 따라서 한 주소에 쏠림 현상이 발생할 수 있다.

<br>
<br>

Open Addressing
    
 <img width="710" alt="스크린샷 2022-03-07 오후 6 52 01" src="https://user-images.githubusercontent.com/81874493/157008533-ea02e47a-5601-420f-a151-ed1030aa1361.png">

  <br>


Open Addressing : 열린 주소기법은 동일된 해시 값으로 충돌이 날 경우 일정 변수값을 더하여 재해싱을 통해 데이터를 저장하는 방법이다.

**재해싱 종류**

- **선형 탐색(Linear Probing):** 해시충돌 시 다음 버켓, 혹은 몇 개를 건너뛰어 데이터를 삽입한다.
- **제곱 탐색(Quadratic Probing):** 해시충돌 시 제곱만큼 건너뛴 버켓에 데이터를 삽입(1,4,9,16..)
- **이중 해시(Double Hashing):** 해시충돌 시 다른 해시함수를 한 번 더 적용한 결과를 이용함.

<br>

**장점** :

- 체이닝처럼 포인터가 필요 없고, 지정한 메모리 외에 추가적인 공간이 필요 없다.
- 삽입 삭제시 오버헤드가 적다.

<br>

**단점** :

- 최악의 경우 비어있는 버킷을 찾지 못하고 탐색을 시작한 위치까지 되돌아 올 수 있다.
- 특정 위치에만 데이터가 몰리는 현상이 나타날 수 있다.

---
