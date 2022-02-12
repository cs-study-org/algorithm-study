# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
from typing import Optional


class Solution:
    # time complexity: O(n)
    # space complexity: O(1)
    def removeElements(self, head: Optional["ListNode"], val: int) -> Optional["ListNode"]:
        node = head
        prev_node = None
        while node:
            if node.val != val:
                prev_node = node
            else:
                if prev_node is None:
                    head = node.next
                else:
                    prev_node.next = node.next

            node = node.next

        return head
