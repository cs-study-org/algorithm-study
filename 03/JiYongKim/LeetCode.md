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

![스크린샷 2022-02-09 오후 7.36.07.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6f1db566-9883-49de-b6c0-895047706fe0/스크린샷_2022-02-09_오후_7.36.07.png)

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
        
        ArrayList <ListNode>list = new ArrayList<>();
        
        while(tempA !=null){
            list.add(tempA);
            tempA = tempA.next;
        }
        
        while(tempB != null){
            if(list.contains(tempB)){
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

![스크린샷 2022-02-09 오후 7.54.56.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/889cc184-2093-4654-9c15-b363ccc41d35/스크린샷_2022-02-09_오후_7.54.56.png)

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

![스크린샷 2022-02-10 오전 1.21.31.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3687a39e-40de-4a52-9dcd-15db63deecd5/스크린샷_2022-02-10_오전_1.21.31.png)

1. 주어진 노드 값과 다음 노드의 값이 동일하다면 새로운 temp2를 생성하여 앞 뒤의 값이 동일하지 않은 노드를 찾는다.
2. 현재의 노드의 next에 이전에 찾은 앞 뒤의 값이 동일하지않은 노드를 할당한다. 
</details>


