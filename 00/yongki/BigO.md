# 빅오

- [빅오](#빅오)
  - [빅오 표기 예시](#빅오-표기-예시)
  - [빅오 계산 규칙](#빅오-계산-규칙)
  - [분할상환분석 기법](#분할상환분석-기법)
    - [동적 배열](#동적-배열)
  - [참고문헌](#참고문헌)

**빅오 표기법은**

    알고리즘을 처리하는 실제 시간을 표시하는 것이 아니다.

    데이터나 사용자의 증가율에 따른 알고리즘의 성능을 예측하기 위해 사용한다.

<img width="70%" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvUg08%2FbtqUwzoAoZq%2FkYesfwtXNMJg7frkvQgV2k%2Fimg.png">

## 빅오 표기 예시

<details>
<summary><code>O(1)</code></summary>

<div markdown="1">
<br/>
입력 데이터의 크기에 상관없이 일정한 시간이 걸리는 알고리즘을 표현할 때 사용한다.

```javascript
const example = [1,2,3,4,5]; 

function findO1(example) { 
  console.log(example[0]); // O(1) 
  console.log(example[1]); // O(1) 
} 

findO1(example);
```
이 코드는 배열이 5개 요소가 있어도, 함수에서 0과 1 인덱스의 요소만 찾고 있다.

이 작업은 단 한번만 이루어지면 되므로 `O(1)`로 표기한다.

</div>
</details>

<details>
<summary><code>O(n)</code></summary>

<div markdown="1">
<br/>
입력 데이터의 크기에 비례해서 처리시간도 늘어나는 알고리즘을 표현할 때 사용한다.

```javascript
const people = ['epitone', 'junggyun', 'sangsu', 'soonhee', 'hansik']; 
const findPerson = array => { 
  for (let i = 0; i < array.length; i++) { 
    if (array[i] === 'hansik') { 
      console.log("Found hansik"); 
    } 
  } 
}; 
findPerson(people)
```
</div>
</details>

<details>
<summary><code>O(n^2)</code></summary>

<div markdown="1">
<br/>

입력 데이터의 크기의 제곱만큼 처리시간이 걸리는 알고리즘을 표현할 때 사용한다.

```javascript
const people = ['epitone', 'junggyun', 'sangsu', 'soonhee', 'hansik']; 
const findPerson = array => { 
  for (let i = 0; i < array.length; i++) { 
    for (let k = 0; k < array.length; k++) { 
      console.log(array[i], array[k]); 
    }
  } 
}; 
findPerson(people)
```
people 배열의 크기가 늘어날수록, 반복하는 횟수가 비례해서 늘어난다.

</div>
</details>

<details>
<summary><code>O(2^n)</code></summary>

<div markdown="1">
<br/>

![fibonacci](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FLgzug%2FbtqUEz2nHV0%2FExBNpbd8BiNPqTzDo0K7AK%2Fimg.png)

```javascript
function fibonacci(n){
  if(n <= 0){
    return 0;
  }else if(n === 1){
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```
대표적으로 피보나치 수열을 구하는 재귀 함수를 예시로 들 수 있다.

함수를 호출할 때마다 바로 전 숫자와 전전 숫자를 알아야 숫자를 더하면서 앞으로 나올 숫자를 파악할 수 있다.

이렇게 매번 함수가 호출될 때마다 두 번씩 호출하므로, 트리의 높이만큼 반복한다.
</div>
</details>

<details>
<summary><code>O(log n)</code></summary>

<div markdown="1">
<br/>
  
```javascript
let arr = []; 
function log(key, start, end){ 
  for(let i = start; i <= end; i++){ 
    arr.push(i); 
    let middle = (start + end) / 2; 

    if(arr[middle] === key){ 
      console.log(middle) 
    } else if(arr[middle]> key){ 
      return log(key, start, middle - 1); 
    } else{ 
      return log(key, middle + 1, end) 
    } 
  } 
}
```
대표적으로 이진 탐색을 예시로 들 수 있다.

정렬된 배열에서 특정 숫자를 찾을 때, 이진 검색을 이용한다면 배열의 `middle` 값과 `key` 값을 비교한다.

만약 배열의 `middle` 값이 `key` 값보다 작다면, `key` 값보다 작은 값들은 볼 필요가 없다.

그러면 다시 없어진 배열 값을 제외한 요소 중에서 중간값을 찾아서 `key` 값과 비교한다.

이렇게 한번 처리할 때마다 검색해야 하는 데이터의 양이 절반씩 떨어지는 알고리즘을 말한다.

</div>
</details>

## 빅오 계산 규칙

<details>
<summary>1. 항상 최악의 상황을 고려하라.</summary>
<div markdown="1">

```javascript
const people = ["epitone", "junggyun", "hansik", "sangsu", "soonhee"]; 

const findPerson = (array) => { 
for (let i = 0; i < array.length; i++) { 
  if (array[i] === "hansik") {
    return console.log("Found hansik");
  } 
} 
}; 
findPerson(people);
```
이 코드는 people 배열에서 조건에 맞는 값을 찾은 뒤, return으로 실행을 중지하였다.

하지만 빅오 계산할 때는 의미가 없다. 빅오는 원하는 조건이 맨 마지막에 있는 경우를 생각한다.

즉, 위 경우는 `O(n)` 이다.
</div>
</details>

<details>
<summary>2. 상수를 제거하라.</summary>
<div markdown="1">

```javascript
function printItems(items) { 
  console.log(items[0]); // O(1)

  let middleIndex = Math.floor(items.length / 2); 
  let index = 0; 
  
  while (index < middleIndex) { // O(n/2) 
    console.log(items[index]); 
    index++; 
  } 

  for (let i = 0; i < 100; i++) { // O(100) 
    console.log('hi'); 
  } 
}
```
이 코드를 빅오로 계산하면 `O(1 + n/2 + 100)`이다. 

`items`의 배열이 1억이 된다면, 1억을 2로 나누거나 100을 더하는 상황으로 크게 달라지지 않을 것이다.

즉, 위 경우는 상수를 제거해서 `O(n)`으로 표기한다.
</div>
</details>

<details>
<summary>3. 함수의 인자 값이 서로 다른 경우를 계산해야한다.</summary>
<div markdown="1">

```javascript
function compareBoxes(boxes, boxes2) { 
    boxes.forEach(function(boxes) { // O(a) 
    console.log(boxes); 
  }); 
    boxes2.forEach(function(boxes2) { // O(b) 
    console.log(boxes); 
  }); 
}
```
이 코드는 각 인자의 크기에 따라 작업 횟수가 달라진다.

인자 값이 다를 경우에는 따로 계산을 해줘야하기 때문에 `O(a + b)`가 된다.
> 인자가 배열임을 알 수 있으니, `O(n)`이 되겠다.

</div>
</details>

## 분할상환분석 기법

알고리즘의 최악의 경우만을 살펴보는 것은 정확하지 않다.

**정의**

    알고리즘의 전반적인 연산 집합에 대해

    비용이 높은 연산, 또는 덜한 연산 모두를 함께 고려하는 기법이다.

**추산 대상**

- 다른 종류의 입력
- 입력의 길이
- 연산에 사용된 자료구조의 시퀀스(`Access`, `Search`, `Insertion`, `Deletion`)
- 그 외 알고리즘의 성능에 영향을 미치는 다른 요인

위를 전부 고려한 연산의 평균을 구한다.

이를 통해, 알고리즘에서 사용된 자료구조의 하나의 시퀀스의 연산 비용이 비싸도 다른 요인들을 고려해보면 비용이 작아짐을 도출할 수 있다.

**추산 비대상**

- 확률

### 동적 배열

![dynamic array](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/AmortizedPush.png/300px-AmortizedPush.png)

- 어떤 동적 배열의 용량이 4일때,

      arr = [10, 20, 30, 40, 50]

- `n` 배열에 `n + 1` 요소를 배열 끝에 삽입하는 연산은 `상수 시간`이 소요된다.

      arr ← 60

- 하지만, `n + 1` 요소는 `n` 배열에 자리가 없기 때문에 
  큰 용량을 새롭게 확보한 다음 기존 요소를 옮겨야 하기 때문에 비교적 많은 시간이 소요된다.
  <br/>

- 용량이 부족할 때 두 배로 용량을 늘린다면,
  8의 공간을 확보한 다음 
  기존 배열에 저장되었던 요소들을 새 배열에 옮기는 작업을 해야한다.

즉,

`n` 배열 내의 요소를 삽입할 때 `상수 시간`이 소요되지만,

`n + 1` 요소를 다루게 되어 n 배열이 늘어나면, `O(n) 시간`이 소요된다.

이는 고비용이 가끔 발생하지만 전체적으로 비용이 높지 않다는 말이다.


<hr/>

## 참고문헌

[시간복잡도 with JavaScript](https://overcome-the-limits.tistory.com/entry/자료구조-시간복잡도-with-JavaScript) -- const_p

[분할상환분석 기법](https://ko.wikipedia.org/wiki/분할상환분석) -- 위키백과