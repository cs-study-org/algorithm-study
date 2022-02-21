# Space Complexity

## 목차
- 공간복잡도란?
- 공간복잡고 계산법
	- 예제1
    - 예제2
    - 예제3
    - 예제4
- 참고문헌

## 공간복잡도란?
공간복잡도(Space Complexity)란 프로그램의 성능을 분석하는 방법 중 하나로, **작성한 프로그램이 얼마나 많은 공간(메모리)을 차지하느냐를 분석하는 방법**

## 공간복잡도 계산법(Big-O)
### 예제1

```
int a = 10;
```

| time | space |
|------|-------|
| O(1) | O(1)  |


### 예제2
```
int get_factorial(int n)
{
    int i = 0;
    int result = 1;
    
    for(i = 1; i <= n; i++)
    {
        result = result * i;
    }
    return result;
}
```
지역변수 `i`, `result`는 반복문과 상관없이 한번만 생성되니까 1+1이다.

| time | space |
|------|-------|
| O(n) | O(1)  |

### 예제3
```
int get_factorial(int n)
{
    if(n > 1) return n * factorial(n - 1);
    else return 1;
}
```

함수 내부에 n이 1이하일때까지 팩토리얼을 구하는 함수가 재귀적으로 호출되므로 스택에는 n부터 1까지 모두 쌓이며 위의 공간 복잡도는 O(n)이다.

| time | space |
|------|-------|
| O(n) | O(n)  |

### 예제4
```
public int sum(int a[], int n){
    int result =0;          
    for(int i=0; i<n ; i++){
        result += a[i];
    }
    
    return result;
}
```
사용되는 변수는 `a[]`, `n`, `result`, `i`이다.

이때 `a[]`의 n개의 원소를 저장할 공간이 필요하다. 그럼으로 공간복잡도는 O(n)이다.

| time | space |
|------|-------|
| O(n) | O(n)  |


## 참고 문헌
[공간복잡도 참고문헌](https://coding-factory.tistory.com/609)