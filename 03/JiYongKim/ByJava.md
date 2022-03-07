# 자바 LinkedList 구현
```java
package linkedList;

class ListNode {
    private String data;
    public ListNode link;

    public ListNode() {
        this.data =null;
        this.link = null;
    }

    public ListNode(String data) {
        this.data = data;
        this.link =null;
    }

    public ListNode(String data, ListNode link) {
        this.data = data;
        this.link = link;
    }

    public String getData() {
        return this.data;
    }
}

public class LinkedList {
    private ListNode head;

    public LinkedList() {
        head = null;
    }

    // 중간 노드 삽입
    public void insertNode(ListNode preNode, String data){
        ListNode newNode = new ListNode(data);

        newNode.link = preNode.link;
        preNode.link = newNode;
    }

    // 마지막 노드 삽입
    public void insertNode(String data){
        ListNode newNode = new ListNode(data);
        if (head == null) {
            this.head = newNode;
        } else{
            ListNode tempNode = head;
            while(tempNode.link != null){
                tempNode = tempNode.link;
            }
            tempNode.link = newNode;
        }
    }


    // 중간 노드 삭제
    public void deleteNode(String data){
        ListNode preNode = head;
        ListNode tempNode = head.link;

        if(data.equals(preNode.getData())){
            head = preNode.link;
            preNode.link = null;
        }else{
            while(tempNode != null){
                if(data.equals(tempNode.getData())){
                    if(tempNode.link == null){
                        preNode.link = null;
                    } else{
                        preNode.link = tempNode.link;
                        tempNode.link = null;
                    }
                    break;

                } else{
                    preNode = tempNode;
                    tempNode = tempNode.link;
                }
            }
        }

    }
    //마지막 노드 삭제
    public void deleteNode() {
        ListNode preNode;
        ListNode tempNode;

        if(head == null){
            return;
        }

        if(head.link == null){
            head = null;
        }else{
            preNode = head;
            tempNode = head.link;

            while(tempNode.link !=null){
                preNode = tempNode;
                tempNode = tempNode.link;
            }
            preNode.link = null;
        }
    }

    // 노드 탐색
    public ListNode searchNode(String data) {
        ListNode tempNode = this.head;

        while(tempNode != null){
            if(data.equals(tempNode.getData())){
                return tempNode;
            }else{
                tempNode = tempNode.link;
            }

        }
        return tempNode;
    }

    // 연결리스트 print
    public void printList() {
        ListNode tempNode = this.head;

        while(tempNode != null){
            System.out.print(tempNode.getData() + " ");
            tempNode = tempNode.link;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        LinkedList linkedList = new LinkedList();
        String str = "C";
        linkedList.insertNode("A");
        linkedList.insertNode("B");
        linkedList.insertNode("C");
        linkedList.insertNode("D");
        linkedList.insertNode("E");
        linkedList.insertNode("F");
        linkedList.insertNode("G");
        linkedList.insertNode("H");

        System.out.println(linkedList.searchNode(str));
        linkedList.printList();

        linkedList.insertNode(linkedList.searchNode("F"),"묭");
        linkedList.printList();

        linkedList.deleteNode("묭");
        linkedList.printList();
    }

}

```

<br>

# 자바 LinkedList 라이브러리


**Linked List 사용법**

```java
//선언
LinkedList list = new LinkedList();
LinkedList<Integer> list = new LinkedList<>();
LinkedList<Integer> list = new LinkedList<>(anotherLinkedList); // 다른 Collection값으로 초기화
LinkedList<Integer> list = new LinkedList<>(Arrays.asList(1, 2, 3, 4, 5)); // Arrays.asList()

//추가
list.addFirst(1);
list.addLast(1);
list.add(new Student("kim"));
list.add(new Student("kim"));

//제거
list.removeFirst(); //가장 앞 데이터 제거
list.removeLast(); // 가장 뒤 데이터 제거
list.remove(); // 0번째 인덱스 제거
list.remove(2); // 2번째 인덱스 제거
list.clear(); // 모든 값 삭제
```

<br>

**Linked List 시간복잡도**

```
시간복잡도
add             : O(1) => head/tail 참조하고 있기때문에 순회 X
remove          : O(n) => 데이터 삭제를 위해 순회 ( get = O(n)) 
get             : O(n) => 순차 접근하여 값 얻어온다.
set             : O(n) => 순차 접근하여 값 얻어온다.
Contains        : O(n)

java 1.2에 추가, thread-safe 보장 안함
특징 : 데이터를 저장하는 각 노드가 이전 노드와 다음 노드의 상태만 알고 있다.
   - 데이터 추가/삭제시 빠름
   - 데이터 검색시 처음부터 노드를 순화해야 되기 때문에 느림

```