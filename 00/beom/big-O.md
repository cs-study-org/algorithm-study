# 빅오표기법

## 알고리즘에서 중요한 속성

1. 정확성 : 주어진 입력을 모두 처리하며 올바르게 출력해야한다.
2. 효율성 : 문제를 효율적으로 해결해야한다. 두 가지 변수로 측정
   1. 시간 복잡도 : 알고리즘이 얼마나 빠르게 결과를 출력하는지 측정, 입력 크기 n에 대한 시간 함수 T(n)으로 표현
   2. 공간 복잡도 : 원하는 결과를 얻기위해 알고리즘이 얼마나 메모리를 사용하는지 측정, 입력 크기 n에 대한 메모리 사용함수 S(n)으로 표현

## 빅오 표기법(Big-O)
Big-O notation은 알고리즘의 시간 복잡도를 나타내는 표기법이며, `O(f(n))`으로 나타냄</br>

빅오를 표시할 경우 worst-case를 가정함</br>
즉, 가장 오래걸릴 경우의 시간 복잡도를 표기</br>

**최고차항의 차수**로 표현하고 계수와 낮은 차수의 항은 무시한다.</br>
ex) n^2 + n = `O(n^2)`</br>

![bigO 차트](asset/big-o.PNG)

## 시간 복잡도

### 1. 상수시간 O(1)
입력 크기 상관없이 고정된 시간으로 계산한다면 알고리즘이 상수시간(constant time)에 실행된다고 한다.</br>

- 배열의 n번째 원소에 접근
- 스택에 push/pop
- 큐에 삽입/삭제
- 해시 테이블의 원소에 접근

### 2. 선형 시간 O(n)
알고리즘의 실행 시간이 입력 크기에 정비례
- 배열에서 검색, 최솟/최댓값 찾기 등 연산
- 연결 리스트에서 순회, 최솟/최댓값 찾기 등 연산

### 3. 로그 시간 O(logn)
알고리즘의 실행 시간이 입력크기의 로그에 비례
- 이진 탐색 알고리즘

### 4. N 로그 N 시간 O(nlogn)
알고리즘의 실행 시간이 입력 크기와 입력크기의 로그 곱에 비례
- 병합 정렬(merge sort)
- 퀵 정렬(quick sort) - 평균적인 선능, 최악은 `O(n^2)`
- 힙 정렬(heap sort)

### 5. 이차 시간 O(n^2)
알고리즘의 실행 시간이 입력 크기의 제곱에 비례
- 버블 정렬(bubble sort)
- 선택 정렬(selectrion sort)
- 삽입 정렬(insertion sort)

### 지수 시간 O(2^n)
입력 데이터들의 원소들로만 만들 수 있는 모든 부분 집합을 생성

### 계승 시간 O(n!)
입력 데이터의 원소들로 만들 수 있는 모든 순열을 생성

## 알고리즘 속 함수 실행 시간 도출
- 반복문 : `O(n)`
- 중첩 반복문 : `O(n^c)` c는 중첩반목분 수
- if-else 구문 : if나 else중 실행 시간이 더 큰 블록으로 계산
- 로그 구문 : 각 반복마다 일정 크기가 일정하게 감소 `O(logn)`

## 시간 복잡도 예제
```
int sum2(int N){
    sum = 0;

    for (int i=1; i<=N; i++) {
        sum = sum + N;
    }    

    return sum;
}
```
- 시간 복잡도 : `O(N)`
- sum=0 무시

```
int f(int n) {
	int i, m = 0;
    i = 1;
    while (i < n) {
    	m += 1;
        i = i * 2;
    }
    return m;
}
```
- 시간 복잡도 : `O(logn)`
- 문제 공간을 매번 절반으로 나눔

## 공간 복잡도
- 프로그램을 실행 및 완료하는데 필요한 저장공간의 양의 의미
- 총 필요 저장 공간
  - 고정 공간(알고리즘과 무관한 공간): 코드 저장 공간, 단순 변수 및 상수
  - 가변 공간(알고리즘 실행과 관련있는 공간): 실행 중 동적으로 필요한 공간
  - S(P) = c + Sp(n)
    - c : 고정 공간
    - Sp(n) : 가변 공간

### 공간 복잡도 예시
```
int factorial(int n)
{
    if(n > 1) return n * factorial(n - 1);
    else return 1;
}
```
- n이 1이하일 때부까지 함수가 재귀적으로 호출되므로 스택에는 n부터 1까지 모두 쌓이게 된다.
- 공간복잡도 : `O(n)`

```
int factorial(int n)
{
    int i = 0;
    int fac = 1;
    for(i = 1; i <= n; i++)
    {
        fac = fac * i;
    }
    return fac;
}
```
- n의 값에 상관없이 스택에는 n과 i 그리고 fac 변수만 저장됨.
- 공간 복잡도 O(1)

```
int sum(int a[], int n)
{
  int x = 0;		
  for(int i = 0; i < n; i++) {
    x  = x + a[i];
  }
  return(x);
}
```
- int arr[n] : 4*n byte(입력 공간)
- int n : 4 byte (입력 공간)
- int x : 4 byte (보조 공간)
- int i : 4 byte (보조 공간)
- 공간 복잡도 : `O(n)`


## 분할상환분석 기법(Amoritized Analysis)
어떠한 임의의 알고리즘에 대해서, 어떤 연산은 자원적 측면에서 상당한 비용을 소모할 수 있지만, 반면 다른 연산은 그렇게 고비용을 소모하지 않을 수 있다. 분할상환분석 기법은 알고리즘의 **전반적인 연산 집합에 대해 비용이 높은 연산, 그리고 비용이 덜한 연산 모두를 함께 고려하는 기법**이다.</br>
간단한 예를 들어 설명하자면 평소엔 O(1)의 시간이 소요되다가 정말 가끔 O(n)의 시간이 소요되는 알고리즘의 경우, 빅오표기법에서는 O(n)으로 시간 복잡도를 표현한다. 그러나 평균적으로 O(n)은 아주 가끔 발생하므로 그리 성능이 나쁜 알고리즘이 아닐지도 모른다. 이런 점에서 빅오표기법을 사용하면 시간적 부분에서 불공정한 성능 평가가 이루어질 수 있으므로 등장한 것이 분할상환분석 기법이다.</br>
테이블에 item을 입력하는 과정에서 대부분의 테이블의 크기는 일정하다. 그러나 가끔 테이블이 full 상태가 되면 item 모두를 새로운(2배 넓은) 테이블로 옮겨야한다. n개의 item을 2n 크기의 테이블로 옮기는 과정에서 평소보다 많은 시간이 소요된다. 이렇게 **가끔 발생하는 시간 불균형 과정의 모든 단계로 분산해 평준화**시키는 것이 이 알고리즘의 핵심이다.

### 분할상한분석 시간복잡도 계산
**회계 방법(Accounting Method)**</br>
Accounting Method란 연속적인 연산들이 최악의 경우를 만들 때,</br>
그때의 한번의 연산에 대한 **"평균비용"**을 구하는 방법.</br>

**account method의 수식**</br>
`amortized cost = actual cost + accounting cost`
- amortized cost : 평균비용
- actual cost : 실제비용
- accounting cost : 남아있는 비용, 지금 가지고있는 비용

#### accounting Method 예시
#### <Stack>
stack에서의 연산 중 push, pop 연산은 실제비용(actual cost)이다. 이 비용을 1이라고 가정하자</br>
**이때의 1이라는 비용은 Doubling이 일어나지 않은 상태의 actual cost이다.**</br>

만약 Stack이 가득 찾다(Doubling 발생!!!!)</br>

Doubling이 발생하면 Stack의 원소를 옮기는 비용과 옮겨야하는 원소 갯수 비용이 발생한다.</br>
옮기는 비용을 t라고 하고 옮겨야하는 원소 갯수 비용을 n이라고하면 총 **tn**의 비용이 필요하다.</br>
그럼 Doubling이 발생했을 때의 actual cost는 (안넘친 Stack에 요소를 push하는 비용 + 새로운 Stack에 옮기는 비용)으로 계산할 수 있다.
그럼 actcual cost는 1+t*n이 된다.</br>

내일 다시한번 이해해보자</br>
[회계모델](https://8iggy.tistory.com/25)
[더블링](https://zeddios.tistory.com/62)
[풀이](https://zeddios.tistory.com/60)



## 참고문헌

[시간복잡도 관련 문헌](https://codesyun.tistory.com/104)

[공간복잡도 관련 문헌](https://madplay.github.io/post/time-complexity-space-complexity)