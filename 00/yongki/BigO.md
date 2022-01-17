# 빅오

- [빅오](#빅오)
  - [빅오 계산 규칙](#빅오-계산-규칙)
  - [참고문헌](#참고문헌)

빅오 표기법은 

    알고리즘을 처리하는 실제 시간을 표시하는 것이 아니다.

    데이터나 사용자의 증가율에 따른 알고리즘의 성능을 예측하기 위해 사용한다.

![big-o](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvUg08%2FbtqUwzoAoZq%2FkYesfwtXNMJg7frkvQgV2k%2Fimg.png)

## 빅오 계산 규칙

1. 항상 최악의 상황을 고려하라.
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
    <br/>

2. 상수를 제거하라.        
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

3. 함수의 인자 값이 서로 다른 경우를 계산해야한다.

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

<hr/>

## 참고문헌

[시간복잡도 with JavaScript](https://overcome-the-limits.tistory.com/entry/자료구조-시간복잡도-with-JavaScript) -- const_p