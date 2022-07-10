**※ 그래프 탐색**

- 하나의 정점으로부터 시작하여 차례대로 모든 정점들을 한 번씩 방문하는 것

Ex) 특정 도시에서 다른 도시로 갈 수 있는지 없는지, 전자 회로에서 특정 단자와 단자가 서로 연결되어 있는지

<br>

**※ 깊이 우선 탐색 (DFS, Depth-First Search)의 개념**

- 루트 노드(혹은 다른 임의의 노드)에서 시작해서 다음 분기(branch)로 넘어가기 전에 해당 분기를 완벽하게 탐색하는 방법

1. 미로를 탐색할 때 한 방향으로 갈 수 있을 때까지 계속 가다가 더 이상 갈 수 없게 되면 다시 가장 가까운 갈림길로 돌아와서 이곳으로부터 다른 방향으로 다시 탐색을 진행하는 방법과 유사함

2. 즉 넓게(wide) 탐색하기 전에 깊게(deep) 탐색함

**3. 모든 노드를 방문하고자 하는 경우에 이 방법을 선택함**

4. 깊이 우선 탐색(DFS)이 너비 우선 탐색(BFS)보다 좀 더 간단함

5. 검색 속도 자체는 너비 우선 탐색(BFS)에 비해서 느림

<br>

**※ 깊이 우선 탐색(DFS)의 특징**

- 자기 자신을 호출하는 순환 알고리즘의 형태를 지님
- 이 알고리즘을 구현할 때 가장 큰 차이점은 그래프 탐색의 경우 어떤 노드를 방문했었는지 여부를 반드시 검사해야한다는 것 (이를 검사하지 않을 경우 무한루프에 빠질 위험이 있음)

<br>

**※ 깊이 우선 탐색(DFS)의 과정**


<img width="734" alt="스크린샷 2022-04-16 오후 4 56 58" src="https://user-images.githubusercontent.com/81874493/163667161-6b46096b-c309-4d86-a7fa-9af08b094f79.png">

<br>

**※ 깊이 우선 탐색(DFS)의 시간 복잡도**

- DFS는 그래프(정점의 수 : N, 간선의 수: E)의 모든 간선을 조회함
- 인접 리스트로 표현된 그래프 : O(N+E)
- 인접 행렬로 표현된 그래프 : O(N^2)

<br>

* * *
<br>

**※ 너비 우선 탐색 (BFS, Breadth-First Search)**

- 루트 노드(혹은 다른 임의의 노드)에서 시작해서 인접한 노드를 먼저 탐색하는 방법

1. 시작 정점으로부터 가까운 정점을 먼저 방문하고 멀리 떨어져 있는 정점을 나중에 방문하는 순회 방법

2. 즉 깊게(deep) 탐색하기 전에 넓게(wide) 탐색하는 것

3. **두 노드 사이의 최단 경로 혹은 임의의 경로를 찾고 싶을 때 이 방법을 선택함**

ex) 지구 상에 존재하는 모든 친구 관계를 그래프로 표현한 후 Ash 와 Vanessa 사이에 존재하는 경로를 찾는 경우

- 깊이 우선 탐색의 경우 - 모든 친구 관계를 다 살펴봐야할지도 모름
- 너비 우선 탐색의 경우 - Ash와 가까운 관계부터 탐색

<br>

**※ 너비 우선 탐색(BFS)의 특징**

- BFS 는 재귀적으로 동작하지 않는다.
- 이 알고리즘을 구현할 때 가장 큰 차이점은 그래프 탐색의 경우 어떤 노드를 방문했었는지 여부를 반드시 검사해야한다는 것이다 이를 검사하지 않을 경우 무한 루프에 빠질 위험이 있다.
- BFS 는 방문한 노드들을 차례로 저장한 후 꺼낼 수 있는 자료 구조인 큐(Queue)를 사용함
- 즉 선입선출(FIFO) 원칙으로 탐색

<br>

**※ 너비 우선 탐색(BFS)이 과정**

- 깊이가 1인 모든 노드를 방문하고 나서 그 다음에는 깊이가 2인 모든 노드를, 그 다음에는 깊이가 3인 모든 노드를 방문하는 식으로 계속 방문하다가 더 이상 방문할 곳이 없으면 탐색을 마친다.


<img width="546" alt="스크린샷 2022-04-16 오후 4 57 04" src="https://user-images.githubusercontent.com/81874493/163667168-3a85c176-b68c-417b-bb8f-3aa5885f44e6.png">

<br>

**※ DFS 와 BFS 의 차이**

997C3C3E5BD01AF41D](https://t1.daumcdn.net/cfile/tistory/997C3C3E5BD01AF41D)

<br>

* * *
<br>

## 구현

DFS 구현
<details> 
    <summary>DFS</summary>
    ## DFS

· DFS(**Depth-First Search**)는 **깊이 우선 탐색**이라고 부르며, 그래프에서 깊은 부분을 우선적으로 탐색하는 알고리즘

### 알고리즘 동작 방식

· **스택 자료구조**를 이용한다.

1. 탐색 시작 노드를 스택에 삽입하고, 방문 처리한다.

2. 스택의 최상단 노드에 방문하지 않은 인접 노드가 있으면 그 인접 노드를 스택에 넣고 방문 처리하고,

방문하지 않은 인접 노드가 없으면 스택에서 최상단 노드를 꺼낸다.

3. 위의 1번과 2번 과정을 더 이상 수행할 수 없을 때까지 반복한다.

- ‘**방문 처리':** 스택에 한 번 삽입되어 처리된 노드가 다시 삽입되지 않게 체크하는 것을 의미한다. 이를 통해 각 노드를 한 번씩만 처리할 수 있다.

▶ 예시 - 그래프의 노드 1을 시작 노드로 설정하여 DFS를 이용해 탐색

![https://blog.kakaocdn.net/dn/pULIc/btqUtpM4pXE/UgjZXl2srkmwDklAwISWV1/img.png](https://blog.kakaocdn.net/dn/pULIc/btqUtpM4pXE/UgjZXl2srkmwDklAwISWV1/img.png)

인접한 노드 중에서 방문하지 않은 노드가 여러 개 있으면 번호가 낮은 순서부터 처리한다.

방문 처리된 노드는 회색으로, 현재 처리하는 스택의 최상단 노드는 하늘색으로 표현한다.

**step1.**  시작 노드 ‘1’을 스택에 삽입하고 방문 처리

![https://blog.kakaocdn.net/dn/cw7uiF/btqUBvyaPjV/DPUBNI6l00rD5oQpRHpif1/img.png](https://blog.kakaocdn.net/dn/cw7uiF/btqUBvyaPjV/DPUBNI6l00rD5oQpRHpif1/img.png)

**step2.**  스택의 최상단 노드 ‘1’에 방문하지 않은 인접 노드 ‘2’, ‘3’, ‘8’ 중에서 가장 작은 노드 ‘2’를 스택에 넣고 방문 처리

![https://blog.kakaocdn.net/dn/bojcxK/btqUwyWu37u/PYaKHm2sypxE3dABjTqmwk/img.png](https://blog.kakaocdn.net/dn/bojcxK/btqUwyWu37u/PYaKHm2sypxE3dABjTqmwk/img.png)

**step3.**  스택의 최상단 노드 ‘2’에 방문하지 않은 인접 노드 ‘7’을 스택에 넣고 방문 처리

![https://blog.kakaocdn.net/dn/dPzdSW/btqUBwcMlMp/EehLKRqinj2ptuzuanlVS1/img.png](https://blog.kakaocdn.net/dn/dPzdSW/btqUBwcMlMp/EehLKRqinj2ptuzuanlVS1/img.png)

**step4.**  스택의 최상단 노드 ‘7’에 방문하지 않은 인접 노드 ‘6’과 ‘8’ 중에서 가장 작은 노드인 ‘6’을 스택에 넣고 방문 처리

![https://blog.kakaocdn.net/dn/0lMDn/btqUtW4WhZq/5uNYdki0k7glf81FfjtvS0/img.png](https://blog.kakaocdn.net/dn/0lMDn/btqUtW4WhZq/5uNYdki0k7glf81FfjtvS0/img.png)

**step5.**  스택의 최상단 노드 ‘6’에 방문하지 않은 인접 노드가 없으므로, 스택에서 ‘6’번 노드를 꺼냄

![https://blog.kakaocdn.net/dn/bvw8xL/btqUBxbHl4Z/fKExHBlbPR04vmw8iEeRr1/img.png](https://blog.kakaocdn.net/dn/bvw8xL/btqUBxbHl4Z/fKExHBlbPR04vmw8iEeRr1/img.png)

**step6.**  스택의 최상단 노드 ‘7’에 방문하지 않은 인접 노드 ‘8’이 있으므로, ‘8’번 노드를 스택에 넣고 방문 처리

![https://blog.kakaocdn.net/dn/0oWCS/btqUvDqdjPi/ng4E6N48Gf5sXklvI3TV91/img.png](https://blog.kakaocdn.net/dn/0oWCS/btqUvDqdjPi/ng4E6N48Gf5sXklvI3TV91/img.png)

**step7.**  스택 최상단 노드 ‘8’에 방문하지 않은 인접 노드가 없으므로, 스택에서 ‘8’번 노드를 꺼냄

![https://blog.kakaocdn.net/dn/bqV1XL/btqUwy91PmZ/XamQfxAyu19BYxcXeFEkS0/img.png](https://blog.kakaocdn.net/dn/bqV1XL/btqUwy91PmZ/XamQfxAyu19BYxcXeFEkS0/img.png)

**step8.**  스택의 최상단 노드 ‘7’에 방문하지 않은 인접 노드가 없으므로, 스택에서 ‘7’번 노드를 꺼냄

![https://blog.kakaocdn.net/dn/eh4lVY/btqUwx4m9Wm/pvIFHKZkJxSnCpo5TSFfe0/img.png](https://blog.kakaocdn.net/dn/eh4lVY/btqUwx4m9Wm/pvIFHKZkJxSnCpo5TSFfe0/img.png)

**step9.**  스택의 최상단 노드 ‘2’에 방문하지 않은 인접 노드가 없으므로, 스택에서 ‘2’번 노드를 꺼냄

![https://blog.kakaocdn.net/dn/M3YNn/btqUsdlLvE3/ShKXEQLTJ7HCPmWxFsN6Bk/img.png](https://blog.kakaocdn.net/dn/M3YNn/btqUsdlLvE3/ShKXEQLTJ7HCPmWxFsN6Bk/img.png)

**step10.**  스택의 최상단 노드 ‘1’에 방문하지 않은 인접 노드 ‘3’을 스택에 넣고 방문 처리

![https://blog.kakaocdn.net/dn/XEiJC/btqUuNs5XEk/dzSSo1pvPYrqxKSkhZdfW1/img.png](https://blog.kakaocdn.net/dn/XEiJC/btqUuNs5XEk/dzSSo1pvPYrqxKSkhZdfW1/img.png)

**step11.**  스택의 최상단 노드 ‘3’에 방문하지 않은 인접 노드 ‘4’, ‘5’ 중 가장 작은 노드 ‘4’를 스택에 넣고 방문 처리

![https://blog.kakaocdn.net/dn/RqWko/btqUtp7g8O3/lGJCGYfbggrW8x0svbn0EK/img.png](https://blog.kakaocdn.net/dn/RqWko/btqUtp7g8O3/lGJCGYfbggrW8x0svbn0EK/img.png)

**step12.**  스택의 최상단 노드 ‘4’에 방문하지 않은 인접 노드 ‘5’가 있으므로, ‘5’번 노드를 스택에 넣고 방문 처리

![https://blog.kakaocdn.net/dn/NnZu2/btqUtq6d9Yg/wkH8QmzwqHY6UgvW7BkZn0/img.png](https://blog.kakaocdn.net/dn/NnZu2/btqUtq6d9Yg/wkH8QmzwqHY6UgvW7BkZn0/img.png)

**step13.**  남아 있는 노드에 방문하지 않은 인접 노드가 없다. 따라서 모든 노드를 차례대로 꺼내면 다음과 같다.

![https://blog.kakaocdn.net/dn/lHKq0/btqUGUYu3Fg/K6BND5VgNBzjQqm7aea9i1/img.png](https://blog.kakaocdn.net/dn/lHKq0/btqUGUYu3Fg/K6BND5VgNBzjQqm7aea9i1/img.png)

위 단계에서 노드의 탐색 순서(스택에 들어간 순서)는 다음과 같다.

1 -> 2 -> 7 -> 6 -> 8 -> 3 -> 4 -> 5

**·** 깊이 우선 탐색 알고리즘인 DFS는 **스택 자료구조**에 기초하므로, 실제 구현은 **재귀 함수**를 이용했을 때 간결하게 구현할 수 있다.

**· 소요시간:** 데이터의 개수가 N개인 경우, O(N)

▶ 예시 - 재귀 함수를 통해 dfs 구현

```java
public class DFSExamRecursion {
//각 노드가 방문된 정보를 1차원 배열 자료형으로 표현public static boolean [] visited = {false, false, false ,false ,false ,false ,false ,false, false};
// 각 노드가 연결된 정보를 2차원 배열 자료형으로 표현public static int[][] graph = {{},
        {2, 3, 8},
        {1, 7},
        {1, 4, 5},
        {3, 5},
        {3, 4},
        {7},
        {2, 6, 8},
        {1, 7}};

    public static void main(String[] args){
        int start = 1;// 시작 노드
        dfs(start);
    }

/*
	 * dfs 알고리즘을 수행하는 함수
	 * @param v 탐색할 노드
    */public static void dfs(int v){
// 현재 노드 방문 처리
        visited[v] = true;
// 방문 노드 출력
        System.out.print(v + "");

// 인접 노드 탐색for (int i : graph[v]){
// 방문하지 않은 인접 노드 중 가장 작은 노드를 스택에 넣기if (visited[i]==false){
                dfs(i);
            }
        }
    }
}
```

![https://blog.kakaocdn.net/dn/bqijpM/btqUvD4O2A0/2mgaoD9ZLsOI98HTArY8zk/img.png](https://blog.kakaocdn.net/dn/bqijpM/btqUvD4O2A0/2mgaoD9ZLsOI98HTArY8zk/img.png)

DFSExam 결과

예시 - Stack 클래스를 통한 DFS 구현

```sql
public class DFS_Stack {
    public static void main(String[] args){

        //각 노드가 연결된 정보를 2차원 배열 자료형으로 표현
        int [][]graph = {{},
            {2, 3, 8},
            {1, 7},
            {1, 4, 5},
            {3, 5},
            {3, 4},
            {7},
            {2, 6, 8},
            {1, 7}};

        //각 노드가 방문된 정보를 1차원 배열 자료형으로 표현
        boolean [] visited = {false, false, false ,false ,false ,false ,false ,false, false};

        //정의된 DFS 함수 호출
        DFS_Stack dfsExam = new DFS_Stack();
        dfsExam.dfs(graph, 1, visited);
    }

/*
     * dfs 메서드
     * graph 노드 연결 정보를 저장
     * v 방문을 시작하는 최상단 노드의 위치
     * visited 노드 방문 정보를 저장
    */
    void dfs(int [][]graph,int start, boolean [] visited){
        //시작 노드를 방문 처리
        visited[start] = true;
        System.out.print(start + " ");//방문 노드 출력

        Deque<Integer> stack = new LinkedList<>();
            stack.push(start); //시작 노드를 스택에 입력

            while(!stack.isEmpty()){
                int now = stack.peek();

                boolean hasNearNode = false; // 방문하지 않은 인접 노드가 있는지 확인
                //인접한 노드를 방문하지 않았을 경우 스택에 넣고 방문처리
                for(int i: graph[now]){
                    if (!visited[i]) {
                        hasNearNode = true;
                        stack.push(i);
                        visited[i] = true;
                        System.out.print(i + " ");//방문 노드 출력
                        break;
                    }
                }
                //반문하지 않은 인접 노드가 없는 경우 해당 노드 꺼내기
                if(hasNearNode==false)
                    stack.pop();
            }
            }
            }
```
</details>

BFS 구현
<details> 
    <summary>BFS</summary>
    **·** BFS(Breadth First Search)의 약자로 ‘**너비 우선 탐색**’ 알고리즘을 의미한다.

- 즉, **가까운 노드부터 탐색**하는 알고리즘이다.

- 최대한 멀리 있는 노드를 우선으로 탐색하는 DFS와는 반대다.

### 알고리즘의 동작 방식

**·** 선입선출 방식인 **큐** 자료구조를 이용하는 것이 정석이다.

**- 인접한 노드를 반복적으로 큐에 넣도록 알고리즘을 작성**하면 자연스럽게 먼저 들어온 것이 먼저 나가며, 가까운 노드부터 탐색하게 된다.

1. 탐색 시작 노드를 큐에 삽입하고 방문 처리한다.

2. 큐에서 노드를 꺼내 해당 노드의 인접 노드 중에서 방문하지 않은 노드를 모두 큐에 삽입하고 방문 처리한다.

3. 위의 1번과 2번 과정을 더 이상 수행할 수 없을 때까지 반복한다.

**▶ 예시 - 그래프의 노드 1을 시작 노드로 설정하여 BFS를 이용해 탐색**

**·**  인접한 노드가 여러 개 있을 때, 숫자가 작은 노드부터 먼저 큐에 삽입한다고 가정한다.

큐에 원소가 들어올 때, 위에서 들어오고 아래쪽에서 꺼낸다.

![https://blog.kakaocdn.net/dn/prwHL/btqUBwjyDuN/i3WmRIe9JdvZxSIFatU7Bk/img.png](https://blog.kakaocdn.net/dn/prwHL/btqUBwjyDuN/i3WmRIe9JdvZxSIFatU7Bk/img.png)

**step 1.**  시작 노드 ‘1’을 큐에 삽입하고 방문 처리 한다.

방문 처리된 노드는 회색으로, 큐에서 꺼내 현재 처리하는 노드는 하늘색으로 표시하다.

![https://blog.kakaocdn.net/dn/bQpd86/btqUtqd6lv2/tclv2r7rxo890PFpaHK891/img.png](https://blog.kakaocdn.net/dn/bQpd86/btqUtqd6lv2/tclv2r7rxo890PFpaHK891/img.png)

**step 2.**  큐에서 노드 ‘1’을 꺼내고 방문하지 않은 인접 노드 ‘2’, ‘3’, ‘8’을 모두 큐에 삽입하고 방문 처리한다.

![https://blog.kakaocdn.net/dn/kGtWY/btqUzu0DQRY/o69as4nCkSKk9oreosker0/img.png](https://blog.kakaocdn.net/dn/kGtWY/btqUzu0DQRY/o69as4nCkSKk9oreosker0/img.png)

**step 3.**  큐에서 노드 ‘2’를 꺼내고 방문하지 않은 인접 노드 ‘7’을 큐에 삽입하고 방문 처리 한다.

![https://blog.kakaocdn.net/dn/ce4PpK/btqUzwxoQAU/okhUIqaZuQUVGEagXi4B1k/img.png](https://blog.kakaocdn.net/dn/ce4PpK/btqUzwxoQAU/okhUIqaZuQUVGEagXi4B1k/img.png)

**step 4.**  큐에서 노드 ‘3’을 꺼내고 방문하지 않은 인접 노드 ‘4’와 ‘5’를 모두 큐에 삽입하고 방문 처리한다.

![https://blog.kakaocdn.net/dn/BTsbO/btqUsd0qG4H/qoKj8boq0MeWnCir9ZwXxK/img.png](https://blog.kakaocdn.net/dn/BTsbO/btqUsd0qG4H/qoKj8boq0MeWnCir9ZwXxK/img.png)

step 5.  큐에서 노드 ‘8’을 꺼내고 방문하지 않은 인접 노드가 없으므로 무시한다.

![https://blog.kakaocdn.net/dn/tCzKL/btqUvD4O2Bf/oCi82kI7RdCkrkY2AcoL11/img.png](https://blog.kakaocdn.net/dn/tCzKL/btqUvD4O2Bf/oCi82kI7RdCkrkY2AcoL11/img.png)

**step 6.**  큐에서 노드 ‘7’을 꺼내고 방문하지 않은 인접 노드 ‘6’을 큐에 삽입하고 방문 처리를 한다.

![https://blog.kakaocdn.net/dn/8z2Ah/btqUEy9fjiT/9qJImYpNda9RIVArN5ts2K/img.png](https://blog.kakaocdn.net/dn/8z2Ah/btqUEy9fjiT/9qJImYpNda9RIVArN5ts2K/img.png)

**step 7.**  남아 있는 노드에 방문하지 않은 인접 노드가 없다. 따라서 모든 노드를 차례로 꺼낸다.

![https://blog.kakaocdn.net/dn/5pP0v/btqUuNGCarJ/kXYrVPGc9SKmqwmVixlGxk/img.png](https://blog.kakaocdn.net/dn/5pP0v/btqUuNGCarJ/kXYrVPGc9SKmqwmVixlGxk/img.png)

**노드의 탐색 순서**(큐에 들어간 순서) 1 -> 2 -> 3 -> 8 -> 7 -> 4 -> 5 -> 6

**·** 너비 우선 탐색 알고리즘인 BFS는 **큐 자료구조**에 기초한다.

**·** 구현할 때는 언어에서 제공하는 **큐 라이브러리**를 사용하자.

**·** 탐색 수행 시간은 O(N)의 시간이 소요되고, 일반적인 경우 실제 **수행 시간**은 DFS보다 좋다.

**-** 재귀 함수로 DFS를 구현하면 컴퓨터 시스템의 동작 특성상 실제 프로그램의 수행 시간이 느려질 수 있기 때문이다.

```java
import java.util.LinkedList;
import java.util.Queue;

public class BFS {
    public static void main(String[] args){
//각 노드가 연결된 정보를 2차원 배열 자료형으로 표현int [][]graph = {{},
            {2, 3, 8},
            {1, 7},
            {1, 4, 5},
            {3, 5},
            {3, 4},
            {7},
            {2, 6, 8},
            {1, 7}};

//각 노드가 방문된 정보를 1차원 배열 자료형으로 표현boolean [] visited = {false, false, false ,false ,false ,false ,false ,false, false};

        int start = 1;// 시작 노드// 큐 구현
        Queue<Integer> queue = new LinkedList<>();
            queue.add(start);

// 현재 노드를 방문 처리
            visited[start] = true;

// 큐가 빌때까지 반복while(!queue.isEmpty()){
// 큐에서 하나의 원소를 뽑아 출력int v = queue.poll();
                System.out.println(v + " ");

// 인접한 노드 중 아직 방문하지 않은 원소들을 큐에 삽입for (int i : graph[v]){
                    if (visited[i] == false){
                        queue.add(i);
                        visited[i] = true;
                    }
                }
            }
            }
            }
```

**결과**

![https://blog.kakaocdn.net/dn/b3hwex/btrnuWIzmX5/8tkwzlRIkFDGKYXlGuvtP1/img.png](https://blog.kakaocdn.net/dn/b3hwex/btrnuWIzmX5/8tkwzlRIkFDGKYXlGuvtP1/img.png)

</details>

<br>

* * *

<br>

## 정리

|  | DFS | BFS |
| --- | --- | --- |
| 동작 원리 | 스택 | 큐 |
| 구현 | 재귀 함수 또는 스택 자료구조 이용 |  큐 자료구조 이용 |

**·**  앞서 DFS와 BFS를 설명하는 데 전형적인 그래프 그림을 이용했다.

**1차원 배열**이나 **2차원 배열** 또한 **그래프 형태로 생각**하면 수월하게 문제를 풀 수 있다.

**·**  예를 들어 게임 맵이 3 x 3 형태의 2차원 배열이고 각 데이터를 좌표라고 생각해보자.

이때 각 표로 상하좌우로만 이동할 수 있다면, 모든 좌표의 형태를 다음처럼 그래프의 형태로 바꿔서 생각할 수 있다.

![https://blog.kakaocdn.net/dn/bBK37H/btqUBvrpSa7/61307GU3iXkyNArV0cgk70/img.png](https://blog.kakaocdn.net/dn/bBK37H/btqUBvrpSa7/61307GU3iXkyNArV0cgk70/img.png)

**·** 코딩 테스트 중 2차원 배열에서의 탐색 문제를 만나면 이렇게 그래프 형태로 바꿔서 생각하자. 풀이 방법을 더 쉽게 떠올릴 수 있다.
