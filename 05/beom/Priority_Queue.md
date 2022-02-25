# Priority Queue

## Priority Queue의 정의
- FIFO 구조
- 먼저 들어온 순서대로 나가는 것이 아닌 우선순위를 먼저 결정하고 그 순위가 높은 엘리먼트가 먼저 나가는 자료구조
- array, LinkedList, Heap으로 구현이 가능하나 Heap으로 구현하는 것이 일반적이다.
- 내부 구조가 힙으로 구성되어 이진트리 구조를 가진다.
- 삽입 시 -> 마지막 노드에 삽입 후 부모 노드와 비교하여 Swap
- 삭제 시 -> 우선 순위가 가장 높은 루트 노드를 삭제 후 마지막 노드를 루트 노드에 올린 후 자식 노드들과 비교하며 Swap

## JAVA PriorityQueue 클래스 특징
- null 값을 허용하지 않는다.
- 비교할 수 없는 객체를 허용하지 않는다.
- Threa-safe 하지 않는다.
  - 멀티스레드 환경에서는 Prioriy Blocking Queue를 사용하면 된다.
- iterator() 메소드로 순회했을 때 순서를 보장하지 않는다.
- DEFAULT_INITINAL_CAPACITY = 11 이다.(기본 초기 용량)


## Priority Queue의 시간복잡도
| offer | peek | poll | size |
|------|-------|---|---|
| O(log n) | O(1)  | O(log n)  | O(1)  |


## LinkedList Queue vs Priority Queue
자바에서 Queue를 구현할 경우에 LinkedList를 사용하여 구현할 수 있고 Priority Queue를 사용하여 구현할 수 있다.

> 여기서 큐는 FIFO 방식의 자료구조이다.</br>
> 그래프의 넓이 우선 탐색(BFS)에서 사용된다.

**< LinkedList 구현 특징 >**

- add             : O(1)
- remove          : O(1)
- get             : O(n)
- Contains        : O(n)
- iterator.remove : O(1)
- java 1.2에 추가, thread-safe 보장 안함
- 특징 : 데이터를 저장하는 각 노드가 이전 노드와 다음 노드의 상태만 알고 있다.
   - 데이터 추가/삭제시 빠름
   - 데이터 검색시 처음부터 노드를 순화해야 되기 때문에 느림

**< priorityQueue 구현 특징 >**

- offer(입력)   : O(log n)
- peek(get)     : O(1)
- poll(반환)    : O(log n)
- size          : O(1)
- natural order : JVM에서 제공하는 일반적인거와 다를수 있음 순서 ex) 문자는 ASCII 순서로 정렬
- java 1.5 에서 나옴
- 특징 : 일반적은 큐는 FIFO의 구조를 가지지만 자연 네추럴 오더에 따라 정렬
  - Null을 허용하지 않는다.

## Priority Queue 구현
```java
package algorithmStudyPriorityQueue;

import Interface_form.Queue;

import java.security.PublicKey;
import java.util.Comparator;
import java.util.NoSuchElementException;

public class PriorityQueue<E> implements Queue<E> {

    private final Comparator<? super E> comparator;
    private static final int DEFAULT_CAPACITY = 10;

    private int size;
    private Object[] array;

    //생성자
    public PriorityQueue(){
        this(null);
    }

    public PriorityQueue(Comparator<? super E> comparator){
        this.array = new Object[DEFAULT_CAPACITY];
        this.size =0;
        this.comparator = comparator;
    }

    public PriorityQueue(int capacity){
        this(capacity,null);
    }

    public PriorityQueue(int capacity,Comparator<? super E> comparator){
        this.array = new Object[capacity];
        this.size =0;
        this.comparator = comparator;
    }

    private int getParent(int index){
        return index /2;
    }

    private int getLeftChild(int index){
        return index *2;
    }

    private int getRightChild(int index){
        return index * 2+1;
    }


    private void resize(int newCapacity){
        Object[] newArray = new Object[newCapacity];

        for(int i=1;i<=size;i++){
            newArray[i] = array[i];
        }

        this.array = null;
        this.array = newArray;
    }

    @Override
    public boolean offer(E value){
        if(size+1 == array.length){
            resize(array.length*2);
        }

        siftUp(size+1,value);
        size++;
        return true;
    }

    private void siftUp(int idx,E target){
        if(comparator != null){
            siftUpComparator(idx, target, comparator);
        }
        else {
            siftUpComparable(idx, target);
        }
    }

    @SuppressWarnings("unchecked")
    private void siftUpComparator(int idx,E target, Comparator<? super E> comp){

        while(idx>1){
            int parent = getParent(idx);
            Object parentVal = array[parent];

            if(comp.compare(target,(E) parentVal)>=0){
                break;
            }

            array[idx] = parentVal;
            idx = parent;
        }

        array[idx] = target;
    }

    @SuppressWarnings("unchecked")
    private void siftUpComparable(int idx, E target){
        Comparable<? super E> comp = (Comparable<? super E>) target;

        while(idx > 1 ){
            int parent = getParent(idx);
            Object parentVal = array[parent];

            if(comp.compareTo((E)parentVal)>= 0){
                break;
            }

            array[idx] = parentVal;
            idx = parent;
        }
        array[idx] = comp;
    }

    @Override
    public E poll(){
        if(array[1] ==null){
            return null;
        }

        return remove();
    }

    @SuppressWarnings("unchecked")
    public E remove(){
        if(array[1] ==null){
            throw new NoSuchElementException();
        }


        E result = (E) array[1];
        E target = (E) array[size];

        array[size] =null;
        size--;
        siftDown(1,target);

        return result;
    }

    private void siftDown(int idx, E target){
        if(comparator != null){
            siftDownComparator(idx, target, comparator);
        }
        else{
            siftDownComparable(idx,target);
        }
    }


    @SuppressWarnings("unchecked")
    private void siftDownComparator(int idx, E target, Comparator<? super E> comp){
        array[idx] = null;

        int parent = idx;
        int child;

        while((child = getLeftChild(parent))<=size){
            int right = getRightChild(parent);
            Object childVal = array[child];

            if(right <= size && comp.compare((E) childVal, (E) array[right])>0){
                child = right;
                childVal = array[child];
            }

            if(comp.compare(target,(E) childVal)<=0){
                break;
            }

            array[parent] = childVal;
            parent = child;
        }
        array[parent] = target;

        if(array.length > DEFAULT_CAPACITY && size < array.length / 4) {
            resize(Math.max(DEFAULT_CAPACITY, array.length / 2));
        }
    }

    public int size() {
        return this.size;
    }

    @Override
    @SuppressWarnings("unchecked")
    public E peek() {
        if(array[1] == null) {	// root 요소가 null일 경우 예외 던짐
            throw new NoSuchElementException();
        }
        return (E)array[1];
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public boolean contains(Object value) {
        for(int i = 1; i <= size; i++) {
            if(array[i].equals(value)) {
                return true;
            }
        }
        return false;
    }

    public void clear() {
        for(int i = 0; i < array.length; i++) {
            array[i] = null;
        }

        size = 0;
    }
}
```

## 참고 문헌
[Priority Queue 구현](https://st-lab.tistory.com/219)
