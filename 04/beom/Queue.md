# Queue

## Queue의 개념
컴퓨터의 기본적인 자료 구조의 한가지로, 먼저 집어 넣은 데이터가 먼저 나오는 FIFO구조로 저장하는 형식

## Queue의 연산
- Queue는 FIFO를 따른다.
  - offer(E e) : 큐의 마지막에 요소를 추가한다.
  - poll() : 큐의 첫 번째 요소를 제거하고 제거 된 요소를 반환한다.
  - peek() : 큐에서 첫 번째 요소를 제거하지 않고 반환한다.

## Queue의 사용 사례
- 데이터가 입력된 시간 순서대로 처리해야 할 필요가 있는 상황에 이용한다.
  - 너비 우선 탐색(BFS, Breadth-First Search) 구현
    - 처리해야 할 노드의 리스트를 저장해야하는 용도로 큐를 사용
    - 노드를 하나 처리할 때마다 해당 노드와 인접한 노드들을 큐에 다시 저장한다.
    - 노드를 접근한 순서대로 처리할 수 있다.
  - 캐시 구현
  - 우선순위가 같은 작업 예약(인쇄 대기열)
  - 선입선출이 필요한 대기열(티켓 카운터)
  - 콜센터 고객 대기시간
  - 프린터의 출력 처리
  - 윈도우 시스템의 메시지 처리기
  - 프로세스 관리

## Queue의 구현체가 ArrayList가 아닌 LinkedList인 이유는?
순차적으로 데이터를 추가/삭제 하는 경우에는 ArrayList를 사용하고, 처음, 중간 데이터를 추가/삭제하는 경우에는 LinkedList를 사용해야한다.

즉, 큐는 항상 첫 번째 저장된 데이터를 삭제하므로, ArrayList와 같은 배열 기반의 자료구조를 사용하게 되면 빈 공간을 채우기 위해서 데이터의 복사가 발생하므로 매우 비효율적이다.


## 배열을 이용한 Queue 코드
```java
package algorithmStudyQueue;

import Interface_form.Queue;

public class ArrayQueue<E> implements Queue<E> {

    private static final int DEFAULT_CAPACITY = 64; //최소 용량 크기

    private Object[] array; //요소를 담을 배열
    private int size; //요소 개수

    private int front; //시작 인덱스를 가리키는 변수(빈 공간임을 유의)
    private int rear; // 마지막 요소의 인덱스를 가리키는 변수

    //생성자
    public ArrayQueue(){
        this.array = new Object[DEFAULT_CAPACITY];
        this.size = 0;
        this.front = 0;
        this.rear = 0;
    }

    public ArrayQueue(int capacity){
        this.array = new Object[capacity];
        this.size = 0;
        this.front = 0;
        this.rear = 0;
    }

    //동적할당을 위한 resize 메소드
    private void resize(int newCapacity){
        int arrayCapacity = array.length; //현재 용량 크기

        Object[] newArray = new Object[newCapacity];

        for(int i=1,j=front+1;i<=size;i++,j++){
            newArray[i] = array[j%arrayCapacity];
        }

        this.array = null;
        this.array = newArray;

        front =0;
        rear = size;
    }

    @Override
    public boolean offer(E item){
        if((rear +1) % array.length ==front){
            resize(array.length*2);
        }

        rear = (rear +1) % array.length; //rear를 rear 다음 위치로 갱신

        array[rear] = item;
        size++;

        return true;
    }

    @Override
    public E poll(){
        if(size ==0){
            return null;
        }

        front = (front +1 ) % array.length;

        @SuppressWarnings("unchecked")
        E item = (E) array[front];

        array[front] = null;
        size--;

        // 용적이 최소 크기(64)보다 크고 요소 개수가 1/4 미만일 경우
        if(array.length > DEFAULT_CAPACITY && size < (array.length / 4)) {

            // 아무리 작아도 최소용적 미만으로 줄이지는 않도록 한다.
            resize(Math.max(DEFAULT_CAPACITY, array.length / 2));
        }

        return item;
    }

    @Override
    public E peek(){
        if(size ==0){
            return null;
        }

        @SuppressWarnings("unchecked")
        E item = (E) array[(front+1) % array.length];
        return item;
    }

    public int size() {
        return size;
    }


    public boolean isEmpty() {
        return size == 0;
    }

    public boolean contains(Object value) {

        int start = (front + 1) % array.length;

        /**
         *  i : 요소 개수만큼만 반복한다.
         *  idx : 원소 위치로, 매 회 (idx + 1) % array.length; 의 위치로 갱신
         */
        for(int i = 0, idx = start; i < size; i++, idx = (idx + 1) % array.length) {
            if(array[idx].equals(value)) {
                return true;
            }
        }
        return false;
    }

    public void clear() {

        for(int i = 0; i < array.length; i++) {
            array[i] = null;
        }

        front = rear = size = 0;
    }
}
```


## 연결리스트를 이용한 Queue 코드
```java
package algorithmStudyQueue;

import Interface_form.Queue;

import java.util.LinkedList;

public class LinkedListQueue<E> implements Queue<E> {
    private Node<E> head;
    private Node<E> tail;
    private int size;

    public LinkedListQueue(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    @Override
    public boolean offer(E value){
        Node<E> newNode = new Node<E>(value);

        if(size ==0){
            head = newNode;
        }
        else{
            tail.next = newNode;
        }

        tail = newNode;
        size++;

        return true;
    }

    @Override
    public E poll(){
        if(size ==0){
            return null;
        }

        E element = head.data;

        Node<E> nextNode = head.next;

        head.data =null;
        head.next = null;

        head = nextNode;
        size--;

        return element;
    }

    @Override
    public E peek(){
        if(size==0){
            return null;
        }
        return head.data;
    }

    public int size() {
        return size;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public boolean contains(Object value) {

        /**
         * head 데이터부터 x가 null이 될 때까지 value랑 x의 데이터(x.data)랑
         * 같은지를 비교하고 같을 경우 true를 반환한다.
         */
        for(Node<E> x = head; x != null; x = x.next) {
            if(value.equals(x.data)) {
                return true;
            }
        }
        return false;
    }

    public void clear() {

        for(Node<E> x = head; x != null; ) {

            Node<E> next = x.next;
            x.data = null;
            x.next = null;
            x = next;
        }
        size = 0;
        head = tail = null;

    }
}

```
