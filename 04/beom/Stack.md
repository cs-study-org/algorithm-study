# Stack
## Stack 정의
한 쪽 끝에서만 자료를 넣고 뺄 수 있는 LIFO 형식의 자료구조


## Stack의 연산
- 스택은 LIFO를 따른다. 즉, 가장 최근에 스택에 추가한 항목이 가장 먼저 제거될 항목이다.
  - pop(): 스택에서 가장 위에 있는 항목을 제거한다. 
  - push(item) : item 하나를 스택의 가장 윗부분에 추가한다.
  - peek(): 스택의 가장 위에 있는 항목을 반환한다.
  - isEmpty(): 스택이 비어 있을 때에 true를 반환한다.
  - search(Object o) : 스택의 상단부터 탐색하여 지정된 객체가 있는 요소의 위치를 반환, 없을 경우 -1 반환
  - size() : 현재 스택에 있는 요소의 개수 반환
  - clear() : 모든 요소들을 제거
  
### Stack Class 시간복잡도
| push | pop  | Peek | Search |
|------|------|------|--------|
| O(1) | O(1) | O(1) | O(n)   |

### Stack 클래스의 큰 단점 2가지
1. stack 클래스는 synchronized 키워드가 붙어있기 때문에 thread-safe 하다는 특징을 하지고 있다. 즉, 멀티 스레드 한경이 나닐 때 사용하면 lock을 거는 작업 때문에 많은 오버헤드가 발생하게 된다.
2. Stack 클래스는 Vector 클래스를 잘못 확장한 자바의 큰 실수이다. 왜냐하면 Stack은 LIFO 구조를 이용해야 하는데 Vector 클래스를 확장하면 중간에 데이터를 삽입, 삭제 할 수 있게 되기 때문이다.
> ```java
 	import java.util.Stack;
> 
 	public class Test {
     public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();
        stack.push(1);
        stack.push(2);
        stack.push(3);
>
        System.out.println(stack.get(1));            // 해당 인덱스 원소 찾기
        System.out.println(stack.set(1, 1));         // 해당 인덱스에 원소 넣기
        System.out.println(stack.remove(1));         // 해당 인덱스 원소를 삭제
    }
}
>```
  
  
### Stack 클래스 대신 ArrayDeque를 사용하기
ArrayDeque 공식문서를 보면 `스택구조로 사용하면 Stack 클래스보다 빠르고`, `큐 구조로 사용하면 Queue 클래스보다 빠르다`고 되어 있다.(ArrayDeque는 Thread-Safe하지 않기 때문입니다.)
  
따라서 LIFO 구조를 만들기 위해 적합한 클래스는 Deque 인터페이스를 구현하는 ArrayDeque클래스이다.


## 스택의 사용 사례
- 재귀 알고리즘을 사용하는 경우 유용하다.
  - 재귀 알고리즘
    - 재귀적으로 함수를 호출해야 하는 경우에 임시 데이터를 스택에 넣어준다.
    - 재귀함수를 빠져 나와 퇴각 검색(backtrack)을 할 때는 스택에 넣어 두었던 임시 데이터를 빼 줘야한다.
    - 스택은 이런 일련의 행위를 직관적으로 가능하게 해준다.
    - 또한 스택은 재귀 알고리즘을 반복적 형태를 통해서 구현할 수 있게 해준다.
  - 웹 브라우저 방문기록(뒤로가기)
  - 실행 취소(undo)
  - 역순 문자열 만들기
  - 수식의 괄호 검사(연산자 우선순위 표현을 위한 괄호 검사)
    - ex) 올바른 괄호 문자열(VPS, Valid Parenthesis) 판단하기
  - 후위 표기법 계산
  

  
  
## 구현 코드
  
 ```java
 package algorithmStudyStack;

import Interface_form.StackInterface;

import java.util.Arrays;
import java.util.EmptyStackException;

public class Stack<E> implements StackInterface<E> {

    private static final int DEFAULT_CAPACITY = 10; //최소(기본) 용량 크기
    private static final Object[] EMPTY_ARRAY = {}; //빈 배열

    private Object[] array; //요소를 담을 배열
    private int size; //요소 개수

    //생성자
    public Stack(){
        this.array = EMPTY_ARRAY;
        this.size = 0;
    }

    public Stack(int capacity){
        this.array = new Object[capacity];
        this.size = 0;
    }

    //동적할당을 위한 resize 메소드
    private void resize() {
        //빈 배열일 경우(capacity is 0)
        if (Arrays.equals(array, EMPTY_ARRAY)) {
            array = new Object[DEFAULT_CAPACITY];
            return;
        }

        int arrayCapacity = array.length; //현재 용량 크기

        //용량이 가득 창 경우
        if (size == arrayCapacity) {
            int newSize = arrayCapacity * 2;

            //배열 복사
            array = Arrays.copyOf(array, newSize);
            return;
        }

        //용량의 절반 미만으로 요소가 차지하고 있을 경우
        if(size <(arrayCapacity/2)){
            int newCapacity = (arrayCapacity/2);

            //배열 복사
            array = Arrays.copyOf(array,Math.max(DEFAULT_CAPACITY,newCapacity));
            return;
        }
    }

    @Override
    public E push(E item){
        //용량이 꽉 차있다면 용량을 재할당
        if(size ==array.length){
            resize();
        }
        array[size] = item; //마지막 위치에 요소 추가
        size++;

        return item;
    }

    @Override
    public E pop(){
        //만약 삭제할 요소가 없다면 Stack이 비어있다는 의미이므로 예외처리
        if(size ==0){
            throw new EmptyStackException();
        }

        @SuppressWarnings("unchecked")
        E obj = (E) array[size-1];//삭제될 요소를 반환하기 위한 임시 변수

        array[size-1] = null; //요소 삭제
        size--;
        resize();

        return obj;
    }

    @SuppressWarnings("unchecked")
    @Override
    public E peek(){
        if(size==0){
            throw new EmptyStackException();
        }

        return (E) array[size-1];
    }

    @Override
    public int search(Object value){
        for(int idx = size-1;idx>=0;idx--){
            //같은 객체를 찾았을 경우 size-idx값을 반환
            if(array[idx].equals(value)){
                return size-idx;
            }
        }
        return -1;
    }

    @Override
    public int size(){
        return size;
    }

    @Override
    public void clear(){
        for(int i=0;i<size;i++){
            array[i] = null;
        }
        size = 0;
        resize();
    }

    @Override
    public boolean empty(){
        return size ==0;
    }

}
```



