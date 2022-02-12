# 난이도업: 공간복잡도 O(1) 조건 추가
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
from typing import Optional


class Solution:
    # time complexity: O(n)
    # space complexity: O(n)
    def hasCycle(self, head: Optional["ListNode"]) -> bool:
        visited = set()
        node = head
        while node:
            if node in visited:
                return True

            visited.add(node)
            node = node.next
        return False


class Solution2:
    # time complexity: O(n)
    # space complexity: O(1)
    # NOTE: 실무에서는 이렇게 풀이 안 함. 인풋에 대해 mutatation이 발생하기 때문
    # 하지만 space complexity를 O(1)으로 만드는 아이디어는 주목할만 함
    def hasCycle(self, head: Optional["ListNode"]) -> bool:
        node = head
        while node:
            if node.val is None:
                return True
            node.val = None
            node = node.next
        return False
