# 난이도업: 공간복잡도 O(1) 조건 추가
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
from typing import Optional


class Solution:
    # time complexity: O(a+b)
    # space complexity: O(a+b)
    # NOTE: 링크드 리스트를 뒤에서 부터 비교하여 교차점을 결정한다.
    #       space complexity 를 줄일 방법이 있지 않을까?

    def getIntersectionNode(self, headA: "ListNode", headB: "ListNode") -> Optional["ListNode"]:
        node_a = headA
        list_a = []
        while node_a:
            list_a.append(node_a)
            node_a = node_a.next

        node_b = headB
        list_b = []
        while node_b:
            list_b.append(node_b)
            node_b = node_b.next

        intersect_node = None
        for a_element, b_element in zip(list_a[::-1], list_b[::-1]):
            if a_element is not b_element:
                break
            intersect_node = a_element

        return intersect_node


class Solution2:
    # time complexity: O(a+b)
    # space complexity: O(a)
    # NOTE: headA 를 set 자료형에 담는다. set의 탐색 속도는 O(1)이기 때문에 headB를 순회할 때 set과 비교할 수 있다.

    def getIntersectionNode(self, headA: "ListNode", headB: "ListNode") -> Optional["ListNode"]:
        a_ids = set()
        while headA:
            a_ids.add(headA)
            headA = headA.next

        while headB:
            if headB in a_ids:
                return headB
            headB = headB.next

        return None


class Solution3:
    # time complexity: O(a+b)
    # space complexity: O(1)
    # NOTE: 둘의 길이를 알아낸 후, 긴 쪽을 짧은 노드의 길이에 맞춘다. 그리고 비교하면서 같은 노드가 발견하면 리턴한다.
    #       공간 복잡도에서 상당한 이점이 있는 풀이

    def getIntersectionNode(self, headA: "ListNode", headB: "ListNode") -> Optional["ListNode"]:
        def get_length(node: "ListNode") -> int:
            count = 0
            while node:
                count += 1
                node = node.next

            return count

        def move(node: "ListNode", space: int) -> "ListNode":
            for _ in range(space):
                node = node.next

            return node

        a_length = get_length(headA)
        b_length = get_length(headB)

        if a_length > b_length:
            headA = move(headA, a_length - b_length)
        else:
            headB = move(headB, b_length - a_length)

        while headA:
            if headA is headB:
                return headA
            headA = headA.next
            headB = headB.next

