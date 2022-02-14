# Definition for singly-linked list.

# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    # time complexity = O(n)
    # space complexity = O(1)
    def getDecimalValue(self, head: "ListNode") -> int:
        result = 0
        node = head
        while node:
            result = (result << 1) + node.val
            node = node.next

        return result
