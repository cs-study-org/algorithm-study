## Sliding Window Algorithm

윈도우 즉 일정한 범위를 가지고 있으며 이를 유지하면서 이동하는 방식의 문제 풀이에서 사용되어 질 수 있는 알고리즘 이다.

<br>

< 언제 사용할까? >

- 배열이나 리스트의 고정된 크기 즉 윈도우 크기가 정해졌을때 사용하며 유용하다.

<br>

< 사용 예시 >

문제 : 연속된 3수의 최대값을 찾는 문제

<br>

<img width="530" alt="스크린샷 2022-07-05 오후 8 13 37" src="https://user-images.githubusercontent.com/81874493/177315392-9a9b89ff-459b-4639-96e8-fd7cacc4bd40.png">

1) 크기가 3인 윈도우 생성

2) 한칸씩 윈도우를 이동하면서 3수의 합을 계산

<br>

* * *
<br>

## 투포인터

배열에 순차적으로 접근해야 할 때 **두 개의 점의 위치를 기록하면서 처리**하는 알고리즘이다.

<br>

< 언제 사용할까? >

- 배열에서 두개의 지점의 위치 변동 즉 두개의 지점 비교가 필요할 경우 유용하다.

<br>

<사용 예시>

문제 : 부분 배열의 합이 M인 경우의 수를 반환하라.

<br>

<img width="538" alt="스크린샷 2022-07-05 오후 8 13 43" src="https://user-images.githubusercontent.com/81874493/177315413-28fc7dca-e132-4e01-8019-9a32af4db4d3.png">

1) 포인터 first 와 second 생성

2) first 유지 , second 증가 하며 부분 배열 합값 확인 

3) 합이 M보다 

- 크면 first ++
- 작으면 second ++
- 동일하면 result + = 1

<br>

* * *

<br>

## 투 포인터 vs 슬라이딩 윈도우

<img width="539" alt="스크린샷 2022-07-05 오후 8 13 48" src="https://user-images.githubusercontent.com/81874493/177315428-26540559-ed21-412a-929c-57dc5d0c677f.png">
