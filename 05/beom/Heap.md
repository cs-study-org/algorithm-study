# Heap

## 자료구조 Heap이란?
- **완전 이진 트리의 일종**으로 우선순위 큐를 위하여 만들어진 자료구조
- **여러 개의 값들 중에서 최대값이나 최솟값을 빠르게 찾아내도록 만들어진 자료구조이다.**
- 힙은 형제노드 간의 우선순위를 고려하지 않고 부모 노드와 자식 노드의 키 값만 고려한다. 이러한 정렬 상태를 **반정렬 상태** 혹은 **느슨한 정렬 상태** 또는 **약한 힙**이라고 불린다.
- 힙 트리에서는 중복된 값을 허용한다.

## Heap의 종류
- 최대 힙(max heap)
  - 부모 노드의 키값이 자식 노드의 키 값보다 크거나 같은 완전 이진 트리
  - key(부모 노드) >= key(자식 노드)
- 최소 힙(min heap)
  - 부모 노드의 키 값이 자삭 노드의 키 값보다 작거나 같은 완전 이진 트리
  - key(부모 노드) <= key(자식 노드)

![heap](asset/heap.PNG)

## Heap의 구현
- 힙을 저장하는 표준적인 자료구조는 **배열**이다.
- 구현을 쉽게 하기 위하여 배열의 첫 번째 인덱스인 0은 사용되지 않는다. = 시작 인덱스(root)는 1부터 시작한다.
- 특정 위치의 노드 번호(인덱스)는 새로운 노드가 추가되어도 변하지 않는다.(불변)
  - 예를 들어 루트 노드의 오른쪽 노드의 번호는 항상 3이다.
- 배열 힙의 성질
  1. 왼쪽 자식 노드 인덱스 = 부모 노드의 인덱스 * 2
  2. 오른쪽 자식의 노드 인덱스 = 부모 노드의 인덱스 * 2 + 1
  3. 부모 노드의 인덱스 = 자식 노드 인덱스 / 2
![heap구현 예시](asset/heap_index.PNG)

## Heap의 삽입
1. 힙에 새로운 요소가 들어오면, 일단 새로운 노드를 힙의 마지막 노드에 이어서 삽입힌다.
2. 새로운 노드를 부모 노드들과 교환해서 힙의 성질을 만족시킨다.

ex) 아래의 최대 힙에 새로운 요소 8을 삽입 해보자

![heap삽입구현 예시](asset/add_heap.PNG)

## Heap의 삭제
1. 최대 힙에서 최댓값이 루트 노드이므로 루트 노드가 삭제된다.
   - 최대 힙에서 삭제 연산은 최대값을 가진 요소를 삭제하는 것이다.
2. 삭제된 루트 노드에서 힙의 마지막 노드를 가져온다.
3. 힙을 재구성한다.

ex) 아래의 최대 힙에서 최대값을 삭제해보자

![heap삭제구현 예시](asset/delete_heap.PNG)


### Min Heap 구현(배열)
```java
package algorithmStudyPriorityQueue;


import java.util.Arrays;
import java.util.Comparator;
import java.util.NoSuchElementException;

public class Heap<E> {

    private final Comparator<? super E> comparator;
    private static final int DEFAULT_CAPACITY = 10; //최소 용량 크기

    private int size; //요소 개수

    private Object[] array; //요소를 담을 배열

    //생성자
    public Heap(){
        this(null);
    }

    public Heap(Comparator<? super E> comparator){
        this.array = new Object[DEFAULT_CAPACITY];
        this.size = 0;
        this.comparator = comparator;
    }

    public Heap(int capacity){
        this(capacity,null);
    }

    public Heap(int capacity, Comparator<? super E> comparator){
        this.array  = new Object[capacity];
        this.size =0;
        this.comparator = comparator;
    }

    //받은 인덱스의 부모 노드 인덱스를 반환
    private int getParent(int index){
        return index/2;
    }

    //받은 인덱스의 왼족 노드 인덱스 반환
    private int getLeftChild(int index){
        return index*2;
    }

    //받은 인덱스의 오른족 자식 노드 인덱스 반환
    private int getRightChild(int index){
        return index*2+1;
    }

    //동적할당을 위한 resize method
    private void resize(int newCapacity){
        Object[] newArray = new Object[newCapacity];

        for(int i=1;i<-size;i++){
            newArray[i] = array[i];
        }

        this.array = null;
        this.array = newArray;
    }

    public void add(E value){
        if(size+1 == array.length){
            resize(array.length*2);
        }

        siftUp(size+1,value);
        size++;
    }

    private void siftUp(int idx, E target){
        if(comparator != null){
            siftUpComparator(idx, target,comparator);
        }
        else{
            siftUpComparable(idx, target);
        }

    }
    @SuppressWarnings("unchecked")
    private void siftUpComparator(int idx, E target, Comparator<? super E> comp){
        while(idx>1){
            int parent = getParent(idx);
            Object parentVal = array[parent];

            if(comp.compare(target, (E)parentVal)>=0){
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

        while(idx > 1){
            int parent = getParent(idx);
            Object parentVal = array[parent];

            if(comp.compareTo((E)parentVal)>=0){
                break;
            }
            array[idx] = parentVal;
            idx = parent;
        }
        array[idx]= comp;
    }

    @SuppressWarnings("unchecked")
    public E remove(){
        if(array[1] ==null){
            throw new NoSuchElementException();
        }

        E result = (E) array[1];
        E target = (E) array[size];
        array[size] = null;

        siftDown(1,target);

        return result;
    }

    private void siftDown(int idx,E target){
        if(comparator != null){
            siftDownComparator(idx, target, comparator);
        }
        else{
            siftDownComparable(idx, target);
        }
    }

    @SuppressWarnings("unchecked")
    private void siftDownComparator(int idx, E target, Comparator<? super E> comp){
        array[idx] =null;
        size--;

        int parent = idx;
        int child;

        while((child=getLeftChild(parent))<=size){
            int right = getRightChild(parent);

            Object childVal = array[child];

            if(right<=size&&comp.compare((E) childVal, (E) array[right])>0){
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

        if(array.length>DEFAULT_CAPACITY&& size<array.length/4){
            resize(Math.max(DEFAULT_CAPACITY, array.length/2));
        }
    }

    @SuppressWarnings("unchecked")
    private void siftDownComparable(int idx, E target){
        Comparable<? super E> comp = (Comparable<? super E>) target;

        array[idx] = null;
        size--;

        int parent = idx;
        int child;

        while((child = getLeftChild(parent))<=size){
            int right = getRightChild(parent);

            Object childVal = array[child];

            if(right <=size && ((Comparable<? super E>)childVal).compareTo((E)array[right])>0){
                child =right;
                childVal = array[child];
            }

            if(comp.compareTo((E) childVal)<=0){
                break;
            }
            array[parent] = childVal;
            parent = child;
        }
        array[parent] = comp;

        if(array.length>DEFAULT_CAPACITY&& size<array.length/4){
            resize(Math.max(DEFAULT_CAPACITY, array.length/2));
        }
    }

    public int size() {
        return this.size;
    }

    @SuppressWarnings("unchecked")
    public E peek() {
        if(array[1] == null) {
            throw new NoSuchElementException();
        }
        return (E)array[1];
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public Object[] toArray() {
        return Arrays.copyOf(array, size + 1);
    }
}
```