# HashTable

## 목차
## 705. Design HashSet





## 705. Design HashSet
### 문제 요약
내장된 해시 테이블 라이브러리를 사용하지 않고 해시 세트를 만드시오.

### 시간 복잡도 공간복잡도
|       | add | remove  | contains |
| :---: |:----:|:----:|:---------:|
| time  | O(n) | O(n^2) |   O(n)    |
| space | O(1) | O(1) |   O(1)    |

### 코드
```java
class MyHashSet {
    ArrayList<Integer> hashset;

    public MyHashSet() {
        this.hashset = new ArrayList<>();
    }

    public void add(int key) {
        if(hashset.contains(key)){
            return;
        }
        else{
            hashset.add(key);
        }
    }

    public void remove(int key) {
        for(int i=0;i<hashset.size();i++){
            if(hashset.get(i) == key){
                hashset.remove(i);
            }
        }
    }

    public boolean contains(int key) {
        if(hashset.contains(key)){
            return true;
        }
        else{
            return false;
        }
    }
}
```






## 706. Design HashMap
### 문제 요약
내장된 해시 테이블 라이브러리를 사용하지 않고 해시맵을 만드시오.

### 시간 복잡도 공간복잡도
|       | put | get | remove |hash |
| ----- |---------|---------|-------|------|
| time  | O(n)    | O(n)    | O(n)  | O(1) |
| space | O(1)    | O(1)    | O(1)  | O(1) |


### 코드
```java
class Node
{
    Node next;
    int key;
    int value;

    public Node(int key, int value){
        this.key = key;
        this.value = value;
    }
}

class MyHashMap {
    int size = 500;
    Node[] Buckets = new Node[size];

    public MyHashMap() {

    }

    public void put(int key, int value) {
        int index = hash(key);
        Node temp = Buckets[index];
        if(temp ==null){
            Buckets[index] = new Node(key, value);
            return;
        }
        Node prev = temp;
        while(temp != null){
            if(temp.key == key){
                temp.value = value;
                return;
            }
            prev = temp;
            temp = temp.next;
        }
        prev.next = new Node(key,value);
    }

    public int get(int key) {
        int index = hash(key);
        Node temp = Buckets[index];
        while(temp != null){
            if(temp.key == key){
                return temp.value;
            }
            temp = temp.next;
        }
        return -1;
    }

    public void remove(int key) {
        int index = hash(key);
        Node temp = Buckets[index];
        if(temp == null){
            return;
        }
        if(temp.key == key){
            Buckets[index] = Buckets[index].next;
        }
        while(temp.next != null){
            if(temp.next.key == key){
                temp.next = temp.next.next;
                return;
            }
            temp = temp.next;
        }
    }
    
    public int hash(int key){
        return key % size;
    }
}
```






## 705. Design HashSet
### 문제 요약

### 시간 복잡도 공간복잡도

### 코드