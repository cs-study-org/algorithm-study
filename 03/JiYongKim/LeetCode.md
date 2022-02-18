# LeetCode 문제

<주제 : LinkedList>

<details>
    <summary>1290. Convert Binary Number in a Linked List to Integer</summary>
문제 : 주어진 노드 순서에 맞는 비트값을 구하여 반환하라.

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public int getDecimalValue(ListNode head) {
      
        int result = 0;
        ListNode node = head;
        
        while(node != null){
            result = 2*result + node.val;
            node = node.next;
        }
        return result;
        
    }
    
}
```

설명)

1. 리스트 노드를 새로운 변수에 할당
2. 다음 노드가 null 일때까지 반복을 돌린다.
3. `result = 2* result + node.val`
    
    ex) 1011 
    
    - result = 2*0+1  = 1
    - result = 2*1+0  = 2
    - result = 2*2+1 = 5
    - result = 2*5+1 = 11

</details>

<br>

<details>
    <summary>237. Delete Node in a Linked List</summary>
문제 : 인자로 넘어오는 노드를 삭제하는 함수를 작성하라.

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public void deleteNode(ListNode node) {
        node.val = node.next.val;
        node.next = node.next.next;
        
    }
}
```

설명)

<img width="335" alt="스크린샷 2022-02-10 오전 1 42 21" src="https://user-images.githubusercontent.com/81874493/153247885-909d4b00-2d38-433e-bc6e-8e74f910536b.png">

1. 주어진 노드의 value 를 다음 노드의 값(1)으로 할당한다.
2. 주어진 노드의 next를 다음 노드의 next 노드(9)로 변경한다.

</details>

<br>

<details>
    <summary>160. Intersection of Two Linked Lists</summary>
문제: 주어진 두 노드에서 처음으로 서로 결합되는 노드를 반환하라.

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        
        if(headA ==null || headB == null)
            return null;
        
        ListNode tempA = headA;
        ListNode tempB = headB;
        ListNode result = null;
        
        Set <ListNode> set = new HashSet<>();

        while(tempA !=null){
            set.add(tempA);
            tempA = tempA.next;
        }
        
        while(tempB != null){
            if(set.contains(tempB)){
                result = tempB;
                break;
            }
            tempB = tempB.next;
        }
        return result;
        
    }
}
```

설명)

<img width="617" alt="스크린샷 2022-02-10 오전 1 42 29" src="https://user-images.githubusercontent.com/81874493/153247938-daa2e9dc-c34f-47b1-bdbb-f1e880b25ff6.png">

1. A 노드에서 연결되는 모든 노드들의 객체 값을  ArrayList에 넣는다.
2. ArrayList에서 B의 노드값을 순환하며 처음으로 동일되는 객체값을 result에 할당하여 반환한다.
</details>

<br>

<details>
    <summary>83. Remove Duplicates from Sorted List</summary>
문제 : 주어진 노드중 중복된 값이 있는 노드가 없도록 구성하라

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        if(head == null){
            return null;
        }
        
        ListNode temp1 = head;
        
        while(temp1 !=null){
            
            if(temp1.next!=null && temp1.val == temp1.next.val){
                ListNode temp2 = temp1;
                while(temp2.next !=null && temp2.val == temp2.next.val){
                    temp2=temp2.next;
                }
                temp1.next = temp2.next;
            } 
            temp1 = temp1.next;
        }
        
        return head;
        
    }
}
```

설명)

<img width="505" alt="스크린샷 2022-02-10 오전 1 42 35" src="https://user-images.githubusercontent.com/81874493/153247976-89e76b22-4190-4bc9-a664-93e09d449a01.png">

1. 주어진 노드 값과 다음 노드의 값이 동일하다면 새로운 temp2를 생성하여 앞 뒤의 값이 동일하지 않은 노드를 찾는다.
2. 현재의 노드의 next에 이전에 찾은 앞 뒤의 값이 동일하지않은 노드를 할당한다. 
</details>

<br>

<details>
    <summary>141.Linked List Cycle</summary>
    문제 : 주어진 연결리스트에 cycle의 존재 여부 파악

```java
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        
        ArrayList<ListNode> list = new ArrayList<>();
        
        ListNode temp = head;
        while(temp != null){
            if(list.contains(temp)){
                return true;
            }
            list.add(temp);
            temp = temp.next;
        }
        return false;
        
    }
}
```

설명)
f
<img width="407" alt="스크린샷 2022-02-10 오전 1 42 42" src="https://user-images.githubusercontent.com/81874493/153248014-72d741b3-1ea2-415e-9035-99ad7b94e280.png">

1. 새로운 ArrayList를 만들고 연결리스트를 순회하며 노드 객체값을 리스트에 저장
2. 만약 순회중 ArrayList내에 동일한 노드 객체값이 있다면 true 반환 아닐경우 false 반환
</details>

<br>

<details>
    <summary>203. Remove Linked List Elements</summary>

- 203. Remove Linked List Elements
    
    문제 : 주어진 연결리스트에서 주어진 값과 동일한 값의 제거
    
    ```java
    class Solution {
        public ListNode removeElements(ListNode head, int val) {
    
            while (head != null && head.val == val)
                head = head.next;
    
            if (head == null) return head;
    
            ListNode node = head;
    
            while (node != null && node.next != null) {
                if (node.next.val == val) {
                    node.next = node.next.next;
                } else {
                    node = node.next;
                }
            }
            return head;
        }
    }
    ```
    
    설명 ) 
    
    <img width="680" alt="스크린샷 2022-02-18 오후 4 27 17" src="https://user-images.githubusercontent.com/81874493/154637295-1b879a6c-852a-40a7-9428-93ae6eb44051.png">

    1. head 노드에서 현재 노드값이 val 값이 아닐때까지 다음 노드로 넘긴다.
    2. node 에서 next 노드의 값이 val 과 동일하면 다음 노드를 다다음 노드로 연결시킨다.
        1. 연결이후 다음 노드로 넘어가지 않고 (2)번을 반복
    3. head 반환

</details>

<br>ff
	
<details>
    <summary>707. Designed Linked List</summary>
- 707. Designed Linked List

<br>

문제 : 연결리스트를 구현하라.

```java
class MyLinkedList {
	Node head;
	int length;
    public class Node{
        int val;
        Node next;
        
        Node(int val){
            this.val = val;
        }
    }

    public MyLinkedList() {
        this.head = null;
        this.length = 0;
    }
    
    public int get(int index) {
        if(index >= length)
        	return -1;
        int counter = 0;
        Node node = head;
        while(counter < index) {
        	counter++;
        	node = node.next;
        }
        return node.val;
    }
    
    public void addAtHead(int val) {
        Node newNode = new Node(val);
        newNode.next = head;
        head = newNode;
        length++;
    }
    
    public void addAtTail(int val) {
        if(head == null) {
        	addAtHead(val);
        }else {
        	Node node = head;
        	while(node.next != null)
        		node = node.next;
        	Node newNode = new Node(val);
        	node.next = newNode;
        	length++;
        }
    }
    
    public void addAtIndex(int index, int val) {
    	if(index > length)
    		return;
        if(index == 0)
        	addAtHead(val);
        else {
        	int counter = 1;
        	Node node = head;
        	while(counter < index) {
        		node = node.next;
        		counter++;
        	}
        	Node newNode = new Node(val);
        	Node next = node.next;
        	node.next = newNode;
        	newNode.next = next;
        	length++;
        }
    }
    
    public void deleteAtIndex(int index) {
        if(index >= length)
        	return;
        if(index == 0) {
        	head = head.next;
        	length--;
        }else {
        	int counter = 1;
        	Node node = head;
        	while(counter < index) {
        		counter++;
        		node = node.next;
        	}
        	node.next = node.next.next;
        	length--;
        }
    }
}
```
</details>
