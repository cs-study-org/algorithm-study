# 정렬

## 이론 및 구현

정렬 알고리즘을 평가하는 시간 복잡도는

    a. 비교 연산(swap)의 횟수와

    b. 이동 연산(move)의 횟수이다.

swap의 횟수와 move의 횟수는 서로 비례하지 않는다.

    비교 연산의 횟수는 > 이동 연산의 횟수
    
    그 반대도 가능하다.

> 본 스터디에서는 이 횟수를 계산하여 평가하지는 않는다.

### 안정 vs 불안정

<center>
<img width="50%" src="assets/stable-unstable-sort.png">
</center>

안정 정렬은

    중복된 값을 입력 순서와 동일하게 정렬한다.

불안정 정렬은

    중복된 값을 입력 순서와 동일하지 않게 정렬한다.

in-place한 방법은

    추가 메모리 공간을 사용하지 않는다.

즉, 앞으로 기술할 정렬 알고리즘이 안정적이냐 in-place 하냐에 해당한다면 장점이 된다.

<details>
<summary>안정 정렬</summary>
<br/>

빅오는 다음과 같다.

|       |  버블   |  삽입   |     병합     | 병합(연결리스트) | 퀵 정렬(not in-place) |
| :---: | :-----: | :-----: | :----------: | :--------------: | :-------------------: |
| 최선  | `O(n)`  | `O(n)`  | `O(n log n)` |   `O(n log n)`   |     `O(n log n)`      |
| 평균  | `O(n²)` | `O(n²)` | `O(n log n)` |   `O(n log n)`   |     `O(n log n)`      |
| 최악  | `O(n²)` | `O(n²)` | `O(n log n)` |   `O(n log n)`   |     `O(n log n)`      |
| 공간  | `O(1)`  | `O(1)`  |    `O(n)`    |      `O(1)`      |        `O(n)`         |

### 버블 정렬

    인접한 요소를 비교하여 크기가 큰 쪽을 오른쪽으로 교환하여 맨 끝부터 정렬하는 방식이다.

특징으로는

    매 회전마다 맨 끝 요소의 위치가 정해진다.

장점은

    단순한 알고리즘이다.

단점은

    정렬된 값에도 비교연산이 이루어진다.

    즉, 요소가 많을 수록 적합하지 않다.

    🤔 최종 정렬 위치가 [ _, _, 3, _, _ ] 인데,

    이것이 A과정에서 정해졌다가 B과정에서 다른 곳으로 갔다가

    최종 C과정에서 최종 정렬 위치가 된다는 말인가

### 삽입 정렬

    배열의 모든 요소를 앞에서부터 차례대로 비교하여, 자신의 위치를 찾아 삽입한다.    

장점은

    최선의 경우, 가장 빠른 알고리즘 이다.

    버블 정렬과 비교하여, 삽입 정렬은 비교연산을 줄일 수 있다.

    cf. 비교 연산 N - 1

단점은

    정렬이 되어있지 않는 경우이다.    
    
    즉, 요소가 많을 수록 적합하지 않다.

### 병합 정렬

<center>
<img width="40%" src="assets/merge-sort-process.png">
</center>

어떻게 분할하는가?

    1. 같은 크기의 2개의 리스트로 분할한다.

    2. 분할 리스트를 정렬한다. 분할 리스트가 충분히 작지 않다면 다시 분할한다.
        충분히 작지 않다는 의미는 2이상의 갯수를 가진다는 말이다.

    3. 정렬된 분할 리스트를 비교해서 다시 결합한다.

장점은

    배열 요소의 분포도의 영향을 받지 않아 동일한 시간 복잡도를 보장한다.

단점은

    분할 리스트라는 임시 공간이 필요하다.
    
    즉, 요소가 많을 수록 적합하지 않다.

### 퀵 정렬 (not in-place)

장점은

    안정적인 퀵 정렬이다.

단점은

    in place 하지 않은 퀵 정렬이다.

</details>

<details>
<summary>불안정 정렬</summary>
<br/>

빅오는 다음과 같다.

|       |  선택   | 퀵(in-place) |      힙      |
| :---: | :-----: | :----------: | :----------: |
| 최선  | `O(n²)` | `O(n log n)` | `O(n log n)` |
| 평균  | `O(n²)` | `O(n log n)` | `O(n log n)` |
| 최악  | `O(n²)` |   `O(n²)`    | `O(n log n)` |
| 공간  | `O(1)`  |  `O(log n)`  |    `O(n)`    |

### 선택 정렬

**in-place 하지 않은 방법**

    1. 왼쪽 리스트에는 정렬이 완료된 요소들이, 오른쪽 리스트에는 정렬되지 않은 요소들이 들어 있다.

        초기 상태에 왼쪽 리스트는 비어 있다.

    2. 오른쪽 리스트에서 최소값을 선택하여 왼쪽 리스트로 이동하는 작업을 되풀이 한다.

**in-place한 방법**

    1. 리스트에서 최소값을 선택한 다음, 이 최소값을 리스트의 첫번째 요소와 교환한다.

    2. 첫번째 요소를 제외한 나머지 요소들 중에서 위 작업을 되풀이 한다.

특징으로는

    매 회전마다 n번째 데이터의 위치가 정해진다.        

장점은

    교환이 많이 이루어져야 하는 배열에 효율적이다.

    cf. 역순 정렬

단점은

    정렬된 값에도 비교연산이 이루어진다.

    이미 정렬된 상태에서 적은 요소가 추가되어 재정렬할 때 비효율적이다.

### 퀵 정렬 (in-place)

<center>
<img width="40%" src="assets/quick-sort-process.png">
</center>

어떻게 분할하는가?

    하나의 축(pivot)을 정하여 
    
    이 축의 값보다 작은 값은 왼쪽에 큰 값은 오른쪽으로 위치시킨다.

    왼쪽과 오른쪽의 요소들은 다시 각각의 축으로 나누어져 축값이 1이 될 때까지 정렬한다.

장점은

    한번 결정된 축이 추후 연산에서 제외된다.

단점은

<table>
    <tr>
        <th>최선 시나리오</th>
        <th>최악 시나리오</th>
    </tr>
    <tr>
        <td>
            <img src="assets/quick-best-case.jpg">
        </td>
        <td>
            <img src="assets/quick-worst-case.jpg">
        </td>
    </tr>
</table>

    불균형 분할에서 최악으로 발생하며

    이미 정렬된 경우나 역순을 재정렬하는 경우 발생한다.

    축을 랜덤으로 설정하는 랜덤화된 퀵 정렬로 극복한다.    

### 힙 정렬

> 지난 10주차 힙 주제의 [md 링크](https://github.com/cs-study-org/algorithm-study/tree/main/10/yongki/Heap.md)를 첨부한다.

</details>

<hr/>

## 참고 문헌

[정렬 알고리즘 특징 및 장단점](https://coding-factory.tistory.com/615) ━ *Tistory*

[정렬 알고리즘 시간 복잡도](https://velog.io/@good159897/안정-정렬-VS-불안정-정렬-파이썬-알고리즘-인터뷰) ━ *velog*

[퀵 정렬 특징](https://im-developer.tistory.com/135) ━ *tistory*

[퀵 정렬 구현](https://stackabuse.com/quicksort-in-javascript/) ━ *StackAbuse*

[퀵 정렬 공간복잡도](https://en.wikipedia.org/wiki/Quicksort) ━ *StackAbuse*

[버블/삽입/선택 정렬 특징](https://im-developer.tistory.com/133?category=846746) ━ *Wikipedia*

[퀵 정렬 vs 버블 정렬](https://www.interviewbit.com/tutorial/quicksort-algorithm/) ━ *InterviewBit*

[Merge sort a linked list](https://learnersbucket.com/examples/algorithms/merge-sort-a-linked-list/) ━ *LearnersBucket*