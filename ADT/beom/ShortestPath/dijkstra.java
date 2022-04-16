```java

import java.util.*;
import java.util.stream.IntStream;

class Node implements Comparable<Node>{
    private int index;
    private int distance;

    public Node(int index, int distance){
        this.index = index;
        this.distance = distance;

    }

    public int getIndex(){
        return this.index;
    }

    public int getDistance(){
        return this.distance;
    }

    /* 거리가 짮은 것이 높은 우선순위를 가지도록 설정 */
    @Override
    public int compareTo(Node other){
        if(this.distance < other.distance){
            return -1;
        }
        return 1;
    }
}

public class Dijkstra {

    public static final int INF = (int) 1e9;//무한을 의미하는 값으로 10억 설정

    public static int n;//노드의 개수
    public static int m;//간선의 개수
    public static int start;//시작 노드 번호

    /* 각 노드에 연결되어 있는 노드에 대한 정보를 담는 배열 */
    public static ArrayList<ArrayList<Node>> graph = new ArrayList<ArrayList<Node>>();

    public static int[] d = new int[100001];//최단 거리 테이블 선언

    public static void dijkstra(int start) {
        PriorityQueue<Node> pq = new PriorityQueue<>();

        pq.offer(new Node(start, 0));//시작 노드로 가기 위한 최단 경로는 0으로 설정하여 큐에 삽입

        d[start] = 0;

        while(!pq.isEmpty()){
            Node node = pq.poll();
            int dist = node.getDistance();//현재 노드까지의 비용
            int now = node.getIndex(); // 현재 노드

            //현재 노드가 이미 처리된 적이 있는 노드라면 무시
            if(d[now] < dist) continue;

            //현재 노드와 연결된 다른 인접한 노드들을 확인
            for(int i=0; i < graph.get(now).size(); i++){
                int cost = d[now] + graph.get(now).get(i).getDistance();

                //현재 노드를 거쳐서, 다른 노드로 이동하는 거리가 더 짧은 경우
                if(cost < d[graph.get(now).get(i).getIndex()]){
                    d[graph.get(now).get(i).getIndex()] = cost;
                    pq.offer(new Node(graph.get(now).get(i).getIndex(), cost));
                }
            }
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        n = sc.nextInt();
        m = sc.nextInt();
        start = sc.nextInt();

        //그래프 초기화
        for(int i=0; i<= n; i++){
            graph.add(new ArrayList<Node>());
        }

        //모든 간선 정보 입력 받기
        for(int i=0; i<m; i++){
            int a = sc.nextInt();
            int b = sc.nextInt();
            int c = sc.nextInt();
            //a번 노드에서 b번 노드로 가는 비용을 c라고 한다
            graph.get(a).add(new Node(b,c));
        }

        //최단 경로 테이블을 모두 무한으로 초기화
        Arrays.fill(d, INF);

        //다익스트라 알고리즘을 수행
        dijkstra(start);

        //모든 노드로 가기 위한 최단 거리를 출력
        for(int i=1; i<=n; i++){
            //도달한 수 없는 경우, 무한이라고 출력
            if(d[i] ==INF){
                System.out.println("무한");
            }else{
                System.out.println(d[i]);//거리 출력력
            }
        }
    }
}
```