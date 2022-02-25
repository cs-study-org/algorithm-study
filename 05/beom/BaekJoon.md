# 덱 & 우선순위 큐 백준 문제

## 목차
- Deque
  - 1021. 회전하는 큐
  - 2346. 풍선 터뜨리기
  - 11003 최솟값 찾기
- Priority Queue
  - 7662번 이중 우선순위 큐

# Deque
## 1021. 회전하는 큐

### 문제 요약
해당 큐는 세가지 기능을 가지고 있다.

1. 첫번째 원소를 뽑는다.
2. 왼쪽으로 한칸 이동시킨다.
3. 오른쪽으로 한칸 이동킨다.

큐에서 선택한 숫자를 뽑는데 **2,3번기능을 최소**로 해야한다.

2,3기능이 동작하느 횟수를 반환하시오

### 시간복잡도 공간복잡도
| time | space |
|------|-------|
| O(n^2) | O(n)  |


### 코드
```java
import java.util.LinkedList;
import java.util.Scanner;

public class Baekjoon {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        LinkedList<Integer> deque = new LinkedList<>();

        int count = 0;//2,3번 연산 횟수

        int capacity = in.nextInt();//덱의 크기
        int Num = in.nextInt();//고르는 수의 갯수

        int[] pickNum = new int[Num]; //고르고자하는 수를 담은 배열

        for(int i=0;i<capacity;i++){
            deque.offer(i+1);
        }

        for(int i=0;i<Num;i++){
            pickNum[i] = in.nextInt();
        }

        for(int i=0;i<Num;i++){
            int targetIndex = deque.indexOf(pickNum[i]);
            int halfIndex = deque.size()/2;

            if(targetIndex>halfIndex){
                while(pickNum[i]!=deque.getFirst()){
                    deque.offerFirst(deque.pollLast());
                    count++;
                }
            }
            else{
                while (pickNum[i]!=deque.getFirst()){
                    deque.offerLast(deque.pollFirst());
                    count++;
                }
            }
            deque.pollFirst();
        }
        
        System.out.println(count);

    }
}
```


## 2346. 풍선 터뜨리기
### 문제 요약
처음에는 원형 큐의 첫번째 인덱스의 값을 확인한다.

인덱스의 값만큼 인덱스를 움직여 값을 확인한다.

이동작을 반복한 후

인덱스를 나열한다.
### 시간복잡도 공간복잡도
아래 링크 코드의 시간복잡도이다.

| time | space |
|------|-------|
| O(n^2) | O(n)  |

### 코드
인덱스와 인덱스의 값을 같이 써야하는데 해당 방법이 떠오르지 못해 못풀었다...

아래 코드가 내가 생각했던 코드와 비슷해 가져왔다.

[내가 생각했던 답안](https://ltk3934.tistory.com/222?category=906235)






## 11003 최솟값 찾기

### 문제 요약
N개의 수 A1, A2, ..., AN과 L이 주어진다.

Di = Ai-L+1 ~ Ai 중의 최솟값이라고 할 때, D에 저장된 수를 출력하는 프로그램을 작성하시오. 이때, i ≤ 0 인 Ai는 무시하고 D를 구해야 한다.
### 시간복잡도 공간복잡도

| time | space |
|------|-------|
| O(nm) | O(n)  |

### 코드
```java
import java.util.Deque;
import java.util.LinkedList;
import java.util.Scanner;


public class Baekjoon{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Deque<Node> deque = new LinkedList<>();

        int arraySize = sc.nextInt();
        int maximumDequeSize = sc.nextInt();

        StringBuilder sb = new StringBuilder();

        for(int i = 0;i<arraySize;i++){
            int element = sc.nextInt();
            Node node = new Node(element,i);

            while (!deque.isEmpty() && deque.getLast().value > element){
                deque.removeLast();
            }
            deque.addLast(node);
            if(deque.getFirst().index <= i-maximumDequeSize){
                deque.removeFirst();
            }
            sb.append(deque.getFirst().value).append(" ");
        }

        System.out.println(sb);
    }

    static public class Node{
        public int value;
        public int index;

        Node(int value, int index){
            this.value = value;
            this.index = index;
        }
    }
}
```

해당 풀이는 답은 맞지만 시간초과가 난다...






# Priority Queue

## 7662번 이중 우선순위 큐
### 문제 요약
이중 우선순위 큐라는 데이터 구조가 있다.

처음 입력된 숫자 두개는 하나는 입력된 데이터구조의 갯수, 하나는 데이터구조안에 입력되는 연산의 수이다.

연산은 I와 D만 가능한데 I는 Insert, D는 Delete를 의미한다.

I 다음에 오는 수는 데이터 구조에 구조에 삽입하면되고
D 다음에 오는 수가 1이면 최댓값 삭제, -1이면 최솟값 삭제를 의미한다.

데이터 구조의 최솟값과 최댓값을 출력하여라, 없으면 EMPTY 출력


### 시간복잡도 공간복잡도
| time | space |
|------|-------|
| O(nm log m) | O(n)  |

### 코드
```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Collections;
import java.util.PriorityQueue;
import java.util.StringTokenizer;


public class Baekjoon {
    public static void main(String[] args) throws IOException {
        StringBuilder sb = new StringBuilder();
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st =null;

        int t = Integer.parseInt(br.readLine());//입력 데이터의 수

        while(t-- > 0){
            PriorityQueue<Integer> minQueue = new PriorityQueue<>();
            PriorityQueue<Integer> maxQueue = new PriorityQueue<>(Collections.reverseOrder());

            int k = Integer.parseInt(br.readLine());//연산의 갯수
            for(int i=0;i<k;i++){
                st = new StringTokenizer(br.readLine());
                String method = st.nextToken();//삽입 또는 삭제
                int value = 0;//연산 다음에 올 value값
                switch (method){
                    case "D":
                        if(maxQueue.isEmpty()){
                            break;
                        }
                        value = Integer.parseInt(st.nextToken());
                        if(value == 1){
                            int max = maxQueue.poll();
                            minQueue.remove(max);
                        }
                        else{
                            int min = minQueue.poll();
                            maxQueue.remove(min);
                        }
                        break;
                    case "I":
                        value = Integer.parseInt(st.nextToken());
                        maxQueue.offer(value);
                        minQueue.offer(value);
                        break;
                }
            }
            if(maxQueue.isEmpty()){
                sb.append("EMPTY\n");
            }
            else{
                sb.append(maxQueue.poll() + " " + maxQueue.poll() + "\n");
            }
        }
        System.out.println(sb);
    }
}
```

시간 초과가 났다... 다음에 TreeMap을 공부할 때 한번 더 보자
