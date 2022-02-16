# Stack & Queue

## 목차
## 1381. Design a Stack With Increment Operation






## 1381. Design a Stack With Increment Operation

### 문제 요약
Stack을 구현하시오

### 시간 복잡도 공간복잡도
|       | push | pop  | increment |
| :---: |:----:|:----:|:---------:|
| time  | O(1) | O(1) |   O(n)    |
| space | O(1) | O(1) |   O(1)    |

### 코드
```java
class CustomStack {
    private final int maxSize;//스택의 용량 수
    private final int[] arr;//스택으로 사용할 빈배열
    private int size;//스택의 요소 개수

    //생성자
    public CustomStack(int maxSize) {
        this.arr = new int[maxSize];
        this.maxSize = maxSize;
        this.size = 0;
    }

    public void push(int x) {
        if (size == maxSize) return;
        arr[size] = x;
        size++;
    }

    public int pop() {
        if (size == 0) {
            return -1;
        }
        int res = arr[--size];//스택의 가장 위에 요소를 빼고 리턴
        return res;
    }

    public void increment(int k, int val) {
        if(k> maxSize) k= maxSize;

        for (int i = 0; i < k; i++) {
            arr[i] += val;
        }
    }
}
```


