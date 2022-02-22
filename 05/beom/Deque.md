# Deque

## 정의
![deque자료구조](asset/deque.PNG)

`Deque`는 `Queue` 인터페이스를 확장하고 있는 인터페이스이다. `Queue`는 한쪽 방향에서만 삽입, 삭제를 할 수 있지만, `Deque`는 양쪽 끝에서 삽입, 삭제가 가능하다.
즉, 스택처럼도 사용 가능하고 큐 처럼도 사용할 수 있는 자료구조이다.


## ArrayDeque vs LinkedList Deque


### 배열을 이용한 Deque
```java
package algorithmStudyDeque;
import Interface_form.Queue;

import java.util.NoSuchElementException;

public class ArrayDeque<E> implements Queue<E> {
    private static final int DEFAULT_CAPACITY = 64;//최소 용량 크기

    private Object[] array; //요소를 담을 배열
    private int size; //요소 개수

    private int front; //시작 인덱스를 가리키는 변수(빈 공감임)
    private int rear; //마지막 요소의 인덱스를 가리키는 변수

    //생성자
    public ArrayDeque(){
        this.array = new Object[DEFAULT_CAPACITY];
        this.size = 0;
        this.front =0;
        this.rear =0;
    }

    public ArrayDeque(int capacity){
        this.array = new Object[capacity];
        this.size = 0;
        this.front =0;
        this.rear =0;
    }

    //동적할당을 위한 resize 메소드
    private void resize(int newCapacity){
        int arrayCapacity = array.length;//현재 용량 크기

        Object[] newArray = new Object[newCapacity]; //용량을 변경한 배열

        for(int i=1,j=front+1;i<=size;i++,j++){
            newArray[i] = array[j%arrayCapacity];
        }

        this.array = null;
        this.array = newArray; //새 배열을 기존 array의 배열로 덮어 씌움

        front = 0;
        rear = size;
    }

    //삽입 메소드
    @Override
    public boolean offer(E item){
        return offerLast(item);
    }

    public boolean offerLast(E item){
        //용량이 가득 차면
        if((rear+1)% array.length == front){
            resize(array.length*2);
        }

        rear = (rear+1)% array.length;

        array[rear] = item;
        size++;

        return true;
    }

    public boolean offerFirst(E item){
        if((front -1+ array.length) % array.length == rear){
            resize(array.length*2);
        }

        array[front] = item;
        front = (front-1+ array.length) % array.length;
        size++;

        return true;
    }

    @Override
    public E poll(){
        return pollFirst();
    }

    public E pollFirst(){
        if(size==0){
            return null;
        }

        front = (front+1) % array.length;

        @SuppressWarnings("unchecked")
        E item = (E) array[front];
        array[front] =null;
        size--;

        if(array.length>DEFAULT_CAPACITY && size<(array.length/4)){
            resize(Math.max(DEFAULT_CAPACITY,array.length/2));
        }

        return item;
    }

    public E remove(){
        return removeFirst();
    }

    public E removeFirst(){
        E item = pollFirst();

        if(item ==null){
            throw new NoSuchElementException();
        }

        return item;
    }

    public E pollLast(){
        if(size ==0){
            return null;
        }

        @SuppressWarnings("unchecked")
        E item = (E) array[rear];
        array[rear] =null;

        rear = (rear-1+array.length)% array.length;
        size--;

        if(array.length > DEFAULT_CAPACITY && size < (array.length / 4)) {
            resize(Math.max(DEFAULT_CAPACITY, array.length / 2));
        }
        return item;
    }

    public E removeLast(){
        E item = pollLast();

        if(item == null){
            throw new NoSuchElementException();
        }
        return item;
    }

    @Override
    public E peek(){
        return peekFirst();
    }

    public E peekFirst(){
        if(size==0){
            return null;
        }

        @SuppressWarnings("unchecked")
        E item = (E) array[(front+1)% array.length];
        return item;
    }

    public E peekLast(){
        if(size==0){
            return null;

        }

        @SuppressWarnings("unchecked")
        E item = (E) array[rear];
        return item;
    }

    public E element() {
        return getFirst();
    }

    public E getFirst() {
        E item = peek();

        // 앞의 원소가 null 이라면(size = 0) 예외를 던진다.
        if(item == null) {
            throw new NoSuchElementException();
        }
        return item;
    }

    public E getLast() {
        E item = peekLast();

        // 앞의 원소가 null 이라면(size = 0) 예외를 던진다.
        if(item == null) {
            throw new NoSuchElementException();
        }
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
```


## 연결리스트를 이용한 Deque
```java
package algorithmStudyDeque;

import Interface_form.Queue;

import java.util.NoSuchElementException;

public class LinkedListDeque<E> implements Queue<E>{
    private Node<E> head; //가장 앞에 있는 노드를 가르키는 변수
    private Node<E> tail; //가장 뒤에 있는 노드를 가리키는 변수
    private int size; //노드의 개수

    //생성자
    public LinkedListDeque(){
        head = null;
        tail = null;
        size =0;
    }

    public boolean offerFirst(E value){
        Node<E> newNode = new Node<E>(value); //새 노드 생성
        newNode.next = head; //새 노드의 다음 노드로 head 노드를 연결

        if(head != null){
            head.prev = newNode;
        }

        head = newNode;
        size++;

        if(head.next ==null){
            tail = head;
        }
        return true;
    }

    @Override
    public boolean offer(E value){
        return offerLast(value);
    }

    public boolean offerLast(E value){
        if(size ==0){
            return offerFirst(value);
        }

        Node<E> newNode = new Node<E>(value);

        tail.next = newNode;
        newNode.prev = tail;
        size++;

        return true;
    }

    @Override
    public E poll(){
        return pollFirst();
    }

    public E pollFirst(){
        if(size ==0){
            return null;
        }

        E element = head.data;
        Node<E> nextNode = head.next;

        head.data = null;
        head.next =null;

        if(nextNode != null){
            nextNode.prev = null;
        }
        head = null;
        head = nextNode;
        size--;

        if(size ==0){
            tail = null;
        }

        return element;
    }

    public E remove(){
        return removeFirst();
    }

    public E removeFirst(){
        E element = poll();

        if(element ==null){
            throw new NoSuchElementException();
        }
        return element;
    }

    public E pollLast(){
        if(size==0){
            return null;
        }

        E element = tail.data;
        Node<E> prevNode = tail.prev;

        tail.data = null;
        tail.prev =null;

        if(prevNode!=null){
            prevNode.next =null;
        }

        tail =null;
        tail = prevNode;
        size--;

        if(size ==0){
            head = null;
        }
        return element;
    }

    public E removeLast(){
        E element = pollLast();

        if(element ==null){
            throw new NoSuchElementException();
        }
        return element;
    }

    @Override
    public E peek(){
        return peekFirst();
    }

    public E peekFirst(){
        if(size ==0){
            return null;
        }
        return head.data;
    }

    public E peekLast(){
        if(size ==0){
            return null;
        }
        return tail.data;
    }

    public E element() {
        return getFirst();
    }

    public E getFirst(){
        E item = peek();

        if(item ==null){
            throw new NoSuchElementException();
        }
        return item;
    }

    public E getLast() {
        E item = peekLast();
        
        if(item == null) {
            throw new NoSuchElementException();
        }
        return item;
    }

    public int size() {
        return size;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public boolean contains(Object value) {
        for(Node<E> x = head; x != null; x = x.next) {
            if(value.equals(x.data)) {
                return true;
            }
        }
        return false;
    }

    public void clear() {
        for (Node<E> x = head; x != null;) {
            Node<E> next = x.next;
            x.data = null;
            x.next = null;
            x.prev = null;
            x = next;
        }
        size = 0;
        head = tail = null;
    }
}
```