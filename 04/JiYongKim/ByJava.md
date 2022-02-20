## Stack

<배열로 스택 구현하기>

```java
package stack;

class ArrayStack {
    private int top;
    private int stackSize;
    private char stackArr[];

    public ArrayStack(int stackSize) {
        top = -1;
        this.stackSize = stackSize;
        stackArr = new char[this.stackSize];
    }

    public boolean isEmpty() {
        return (top == -1);
    }

    public boolean isFull() {
        return (top == this.stackSize - 1);
    }

    public void push(char item) {
        if (isFull()) {
            System.out.println("Stack is Full");
        } else {
            stackArr[++top] = item;
        }
    }

    public char pop() {
        if (isEmpty()) {
            System.out.println("Stack is Empty");
            return 0;
        } else {
            return stackArr[top--];
        }
    }

    public char peek() {
        if (isFull()) {
            System.out.println("Stack is Empty");
            return 0;
        } else {
            return stackArr[top];

        }
    }

    public void clear() {
        if (isEmpty()) {
            System.out.println("Stack is Empty");
        } else {
            top = -1;
            stackArr = new char[this.stackSize];
        }
    }

    public void print() {
        if (isEmpty()) {
            System.out.println("Stack is Empty");
        } else {
            for(int i =0; i<=top ; i ++)
                System.out.println(stackArr[i]);
        }
    }

}

public class Stack {
    public static void main(String[] args) {
        ArrayStack arrStack = new ArrayStack(5);

        arrStack.push('A');
        arrStack.push('B');
        arrStack.push('C');
        arrStack.push('D');
        arrStack.push('E');
        arrStack.print();

        System.out.println("---");
        arrStack.pop();
        arrStack.print();

        System.out.println("peek ="+arrStack.peek());
        arrStack.print();

        arrStack.clear();
        arrStack.print();

    }
}
```

<br>

< 공식 Java 스택 라이브러리 사용법>

```java
// 스택 선언
        Stack<Integer> stack = new Stack<>();

        //push
        stack.push(1);
        stack.push(2);
        stack.push(3);

        //pop
        stack.pop();

        //peek
        stack.peek();

        //contains
        System.out.println(stack.contains(1));
        
        //clear
        stack.clear();
```

<br>

**<공식 Java 스택 라이브러리 스택 시간 복잡도>**

```java
push	 O(1)
pop      O(1)
peek 	 O(1)
contains O(n)
```

<br>

* * *

<br>

## Queue

<배열로 큐 구현>

```java
package queue;

class Queue{
    private int front;
    private int rear;
    private int capacity;
    private Object[] queue;

    public Queue(int capacity) {
        this.front = -1;
        this.rear = -1;
        this.capacity = capacity;
        queue = new Object[this.capacity];
    }

    public boolean isFull() {
        return (this.rear == this.capacity-1);
    }

    public boolean isEmpty() {
        if(front == rear){
            front = -1;
            rear = -1;
        }
        return(this.front == this.rear);
    }

    public void enqueue(Object element) {
        if(isFull()){
            System.out.println("Queue is Full");
            return;
        }
        rear = (rear+1) % this.capacity;
        queue[rear] = element;
    }

    public Object dequeue() {
        if(isEmpty()){
            System.out.println("Queue is empty");
            return null;
        }
        front = (front+1) % this.capacity;
        return queue[front];
    }

    public Object peek() {
        if(isEmpty()){
            System.out.println("Queue is Empty");
            return null;
        }
        return queue[front+1];
    }

    public void clear() {
        if(isEmpty()){
            System.out.println("Queue is already empty");
        }else{
            front = -1;
            rear = -1;
            queue = new Object[this.capacity];
        }

    }

}

public class ByJavaQueue {
    public static void main(String[] args) {
        Queue queue = new Queue(5);
        
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);
        
        queue.dequeue();
        
        queue.peek();
        
        queue.clear();
                
        
    }

}
```

<br>

**<공식 Java 큐 라이브러리 사용법>**

```java
// 자바에서 큐를 사용하기 위해 LinkedList와 Queue 를 import 해야한다.
java.util.LinkeList;
java.util.Queue;

public static void main(String args[]){
// 큐 선언
        Queue<Integer> queue = new LinkedList<>();

        // 큐 값 추가
        queue.add(1);
        queue.add(2);
        queue.add(3);

        queue.offer(4);
        queue.offer(5);
        queue.offer(6);

        // 큐의 첫번째 값 반환하고 제거
        queue.poll();
        System.out.println(queue);

        // 큐의 첫번째 값 제거
        queue.remove();
        System.out.println(queue);

        //큐의 첫번째 값 참조
        System.out.println(queue.peek());

        // 큐 초기화
        queue.clear();
        System.out.println(queue);
}
```

<br>

<공식 Java 큐 라이브러리 시간 복잡도>

```java
시간복잡도
offer    : O(log n)
peek     : O(1)
poll     : O(log n)
size     : O(1)
```