# 난이도업: 공간복잡도 O(1) 조건 추가
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
from typing import Optional


class Solution:
    # time complexity: O(n)
    # space complexity: O(n)
    def deleteDuplicates(self, head: Optional["ListNode"]) -> Optional["ListNode"]:
        unique_nums = set()
        node = unique_node = head
        while node:
            if node.val in unique_nums:
                unique_node.next = node.next
            else:
                unique_nums.add(node.val)
                unique_node = node

            node = node.next
        return head


class Solution2:
    # time complexity: O(n)
    # space complexity: O(1)
    def deleteDuplicates(self, head: Optional["ListNode"]) -> Optional["ListNode"]:
        node = head
        if node is None:
            return head

        while node.next is not None:
            if node.val == node.next.val:
                node.next = node.next.next
            else:
                node = node.next

        return head
