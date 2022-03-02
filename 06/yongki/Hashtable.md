# 해시 테이블

- [해시 테이블](#해시-테이블)
  - [이론](#이론)
  - [논제](#논제)
  - [구현 문제 리스트](#구현-문제-리스트)
    - [문제 회고](#문제-회고)
    - [문제 풀이](#문제-풀이)
  - [문제 리스트](#문제-리스트)
  - [참고 문헌](#참고-문헌)

## 이론

<details>

    ...

</details>

## 논제

<details>
<summary>해시함수를 오버라이드 하는 상황은 어떤 상황이 있나 </summary>

    메모리 기반 해시함수 / 값 기반 해시함수

    값 기반 해시함수의 필요성

</details>

<details>
<summary>해시 테이블 구현 방식</summary>

    대표적이 해시 충돌 해결 기법 2가지의 트레이드 오프로 정리하시오.

    해시 테이블 시간복잡도가 최악에서 `O(n)`이 나오는 이유와 연계하시오.

</details>

<details>
<summary>해시 테이블 시간복잡도가 평균 `O(1)`이 나오는 이유</summary>

    분할상환분석 기법을 통해 서술하시오.

</details>

## 구현 문제 리스트

<details>
<summary>
  705. Design HashSet
  <a href="https://leetcode.com/problems/design-hashset/">👊</a>  
</summary>

### 문제 회고

빌트인 자료형을 쓰면 금방 해결되니, 일반 객체의 자료구조에

1. 해시 함수를 간단히 구현해보고
2. 충돌 시, 충돌 해결 기법 또한 구현해보기로 하였다.

### 문제 풀이

> src\705.js에서 확인해볼 수 있다.

</details>

## 문제 리스트

    ...

<hr/>

## 참고 문헌

[Hash table 이론](http://wiki.hash.kr/index.php/해시테이블) ━ *해시넷*