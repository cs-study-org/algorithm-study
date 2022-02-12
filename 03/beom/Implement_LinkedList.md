# Singly LinkedList
Node.java와 SLinkedList.java 구 클래스로 구현하였다.


## 구현 코드
```java
package algorithmStudyLinkedList;

public class Node<E>{
    E data;
    Node<E> next; //다음 노드객체를 가리키는 래퍼런스 변수

    Node(E data){
        this.data = data;
        this.next = null;
    }
}
```

```java
package algorithmStudyLinkedList;

import Interface_form.List;

public class SLinkedList<E> implements List<E> {

    private Node<E> head; //노드의 첫부분
    private Node<E> tail; //노드의 마지막 부분
    private int size; //요소 개수

    //생성자
    public SLinkedList(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    //특정 위치의 노드를 반환하는 메소드
    private Node<E> search(int index){
        //범위 밖일 경우 예외 처리
        if(index<0||index >= size){
            throw new IndexOutOfBoundsException();
        }

        Node<E> x = head; // head가 가리키는 노드부터 시작

        for(int i = 0; i<index; i++){
            x = x.next;//x노드의 다음 노드를 x에 저장한다.
        }
        return x;
    }

    //노드의 가장 앞부분에 추가하는 메소드
    public void addFirst(E value){
        Node<E> newNode = new Node<E>(value); //새노드 생성
        newNode.next = head; //새 노드 다음 노드로 head노드 연결
        head = newNode; //head가 가르키는 노드를 새노드로 설정

        if(head.next ==null){
            tail = head;
        }
    }

    //데이터를 추가하는 메소드
    @Override
    public boolean add(E value){
        addLast(value);
        return true;
    }

    //데이터를 마지막에 넣는 경우
    public void addLast(E value) {
        Node<E> newNode = new Node<E>(value); //새 노드 생성

        if(size ==0){ //처음 노드에 넣을때
            addFirst(value);
            return;
        }

        tail.next = newNode;
        tail = newNode;
        size++;
    }

    //중간에 넣는 메소드
    @Override
    public void add(int index, E value){
        //잘못된 인덱스를 참조할 경우
        if(index>size||index<0){
            throw new IndexOutOfBoundsException();
        }

        //추가하려는 index가 가장 앞이면 addFirst로 처리
        if(index ==0){
            addFirst(value);
            return;
        }
        //추가하려는 index가 가장 마지막이면 addLast처리
        if(index ==size) {
            addLast(value);
            return;
        }
        Node<E> prev_Node = search(index -1); //추가하려는 위치의 이전 노드
        Node<E> next_Node = prev_Node.next; //추가하려는 위치의 노드
        Node<E> newNode = new Node<E>(value);//추가하려는 노드

        prev_Node.next =null;
        prev_Node.next = newNode;
        newNode.next = next_Node;
        size++;

    }

    public E remove(){
        Node<E> headNode = head;

        if(headNode==null)
            throw new IndexOutOfBoundsException();

        E element = headNode.data;

        Node<E> nextNode = head.next;

        head.data = null;
        head.next=null;

        head = nextNode;
        size--;

        if(size==0){
            tail = null;
        }
        return element;

    }

    @Override
    public E remove(int index){
        if(index ==0){
            return remove();
        }

        if(index>=size||index<0){
            throw new IndexOutOfBoundsException();
        }

        Node<E> prevNode = search(index -1);
        Node<E> removeNode = prevNode.next;
        Node<E> nextNode = removeNode.next;

        E element = removeNode.data;

        prevNode.next = nextNode;

        if(prevNode.next ==null)
            tail = prevNode;

        removeNode.next = null;
        removeNode.data = null;
        size--;

        return element;
    }

    @Override
    public boolean remove(Object value){
        Node<E> prevNode = head;
        boolean hasValue = false;
        Node<E> x = head;

        for(;x!=null;x=x.next){
            if(value.equals(x.data)){
                hasValue = true;
                break;
            }
            prevNode = x;
        }

        if(x==null){
            return false;
        }

        if(x.equals(head)){
            remove();
            return true;
        }
        else {
            prevNode.next = x.next;
            if(prevNode ==null){
                tail = prevNode;
            }
            x.data = null;
            x.next =null;
            size--;
            return true;
        }
    }

    @Override
    public E get(int index){
        return search(index).data;
    }

    @Override
    public void set(int index, E value){
        Node<E> replaceNode = search(index);
        replaceNode.data = null;
        replaceNode.data = null;
    }

    @Override
    public int indexOf(Object value){
        int index = 0;

        for(Node<E> x = head;x != null;x = x.next){
            if(value.equals(x.data)){
                return index;
            }
            index++;
        }
        return -1;
    }

    @Override
    public boolean contains(Object item){
        return indexOf(item) >= 0;
    }

    @Override
    public int size(){
        return size;
    }

    @Override
    public boolean isEmpty(){
        return size == 0;
    }

    @Override
    public void clear(){
        for(Node<E> x =head;x!=null;){
            Node<E> nextNode = x.next;
            x.data = null;
            x.next = null;
            x = nextNode;
        }
        head = tail = null;
        size = 0;
    }
}
```