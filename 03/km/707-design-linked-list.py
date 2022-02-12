from dataclasses import dataclass
from typing import Optional


@dataclass
class Node:
    val: int
    prev: Optional["Node"]  # Optional means that this node is the head.
    next: Optional["Node"]  # Optional means that this node is the tail.


class MyLinkedList:
    def __init__(self):
        self.head: Optional[Node] = None
        self.tail: Optional[Node] = None
        self.length: int = 0

    def _get_node(self, index: int) -> Node:
        # time complexity: O(n)
        # space complexity: O(1)
        if index < 0 or index > self.length - 1:
            raise ValueError("Index out of range")

        node = self.head
        for _ in range(index):
            node = node.next

        return node

    def get(self, index: int) -> int:
        # time complexity: O(n)
        # space complexity: O(1)
        try:
            return self._get_node(index).val
        except (ValueError, AttributeError):
            return -1

    def addAtHead(self, val: int) -> None:
        # time complexity: O(1)
        # space complexity: O(1)
        if self.head is None:
            self.head = self.tail = Node(val=val, prev=None, next=None)
        else:
            new_head = Node(val=val, prev=None, next=self.head)
            self.head.prev = new_head
            self.head = new_head

        self.length += 1

    def addAtTail(self, val: int) -> None:
        # time complexity: O(1)
        # space complexity: O(1)
        if self.tail is None:
            self.head = self.tail = Node(val=val, prev=None, next=None)
        else:
            new_tail = Node(val=val, prev=self.tail, next=None)
            self.tail.next = new_tail
            self.tail = new_tail

        self.length += 1

    def addAtIndex(self, index: int, val: int) -> None:
        # time complexity: O(n)
        # space complexity: O(1)
        if index < 0 or index > self.length:
            return
        elif index == 0:
            self.addAtHead(val)
            return
        elif index == self.length:
            self.addAtTail(val)
            return
        else:
            pushed_node = self._get_node(index)
            node = Node(val=val, prev=pushed_node.prev, next=pushed_node)
            pushed_node.prev.next = node
            pushed_node.prev = node
            self.length += 1

    def _deleteAtHead(self) -> None:
        # time complexity: O(1)
        # space complexity: O(1)
        if self.head is None:
            return

        new_head = self.head.next
        if new_head is None:
            self.head = self.tail = None
        else:
            new_head.prev = None
            self.head = new_head

        self.length -= 1

    def _deleteAtTail(self):
        # time complexity: O(1)
        # space complexity: O(1)
        if self.tail is None:
            return

        new_tail = self.tail.prev
        if new_tail is None:
            self.head = self.tail = None
        else:
            new_tail.next = None
            self.tail = new_tail

        self.length -= 1

    def deleteAtIndex(self, index: int) -> None:
        # time complexity: O(n)
        # space complexity: O(1)
        if index < 0 or index > self.length - 1:
            return
        elif index == 0:
            self._deleteAtHead()
            return
        elif index == self.length - 1:
            self._deleteAtTail()
            return
        else:
            pulled_out_node = self._get_node(index)
            prev_node = pulled_out_node.prev
            next_node = pulled_out_node.next
            prev_node.next = next_node
            next_node.prev = prev_node

            self.length -= 1
