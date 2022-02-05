# LinkedList

## 연결리스트(LinkedList)란
연결리스트(Linkedlist)는 각 노드가 데이터와 포인터를 가지고 한줄로 연결되어 있는 방식의 자료구조이다.

중간에 데이터를 추가나 삭제하더라도 전체의 인덱스가 한 칸씩 뒤로 밀리거나 당겨지는 일이 없기에 ArrayList에 비해서 데이터의 추가나 삭제가 용이하나, 인덱스가 없기에 특정 요소에 접근하기 위해서는 순차 탐색이 필요로 하여 탐색 속도가 떨어진다는 단점이 있다.
그러므로 **탐색 또는 정렬**을 자주 하는 경우엔 **배열**을 사용하고 **데이터의 추가/삭제**가 많은 경우 **연결리스트**를 사용하는 것이 좋다.

## LinkedList 사용법-Java
### LinkedList 선언

```java
LinkedList list = new LinkedList();//타입 미설정 Object로 선언
LinkedList<Student> members = new LinkedList<Student>();//타입 설정 Student객체만 사용가능
LinkedList<Integer> num = new LinkedList<Integer>();//타입 설정 int타입만 사용가능
LinkedList<Integer> num2 = new LinkedList<>();//new에서 타입 파라미터 생략가능
LinkedList<Integer> list2 = new LinkedList<Integer>(Arrays.asList(1,2));//생성시 값추가
```

**주의할 점**
- 초기의 크기 설정 x
- <제네릭스> 안에 제네릭스에는 **객체**만 들어갈 수 있다.

### LinkedList값 추가
```java
public class Solution {
    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<Integer>();
        list.addFirst(1);//가장 앞에 데이터 추가
        list.addLast(2);//가장 뒤에 데이터 추가
        list.add(3);//데이터 추가(인덱스 미작성시 맨 뒤에 추가)
        list.add(1,10);//index 1에 데이터 10 추가

        for(int i: list){
            System.out.println(i);
        }
    }
}
```

### LinkedList 값 삭제
```java
        //list에 1 10 2 3순으로 데이터가 삽입되어 있음
        list.removeFirst();//가장 앞의 데이터 제거 : 1
        list.removeLast();//가장 뒤에 데이터 제거 : 3
        list.remove();// 생략시 0번째 index제거 : 10
        list.remove(1);//index 1 제거 2
        list.clear();// 모든 값 제거
```

### LinkedList 크기 구하기
```java
list.size()//LinkedList의 크기
```

### LinkedList값 접근
```java
list.get(0);//0번째 index 접근
```
**내부의 순차 탐색이 이루워지므로 ArrayList의 get메서드보다 속도가 느림**

### LinkedList 값 검색
```java
        System.out.println(list.contains(1));//list에 1이 있는지 검색 : true
        System.out.println(list.indexOf(1));//1이 있는 index반환 없으면 -1
        System.out.println(list.isEmpty());//list가 비어 있으면 true, 아니면 false
```

## 참고 문헌
[Linkedlist 참고문헌](https://coding-factory.tistory.com/552)

[Linkedlist 메서드 참고](https://codedragon.tistory.com/6113)