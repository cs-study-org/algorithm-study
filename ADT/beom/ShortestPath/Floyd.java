package algorithmStudyShortestPath;

import java.util.Arrays;
import java.util.Scanner;

public class Floyd {
    public static final int INF = (int) 1e9;//무한을 의미하는 값으로 10억 설정

    public static int n;//노드의 개수
    public static int m;//간선의 개수

    //인접행렬 그래프 선언
    public static int[][] graph = new int[501][501];

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        m = sc.nextInt();

        //최단 거리 테이블을 모두 무제한으로 초기화
        for(int i=0; i<501; i++){
            Arrays.fill(graph[i], INF);
        }

        //자기 자신에서 자기 자신으로 가는 비용은 0으로 초기화
        for(int a = 1; a<=n; a++){
            for(int b = 1; b<=n;b++){
                if(a==b) graph[a][b] = 0;
            }
        }

        //각 간선에 대한 정보를 입력받아, 그 값으로 초기화
        for(int i=0; i<m; i++){
            //a에서 b로 가는 비용은 c라고 설정
            int a = sc.nextInt();
            int b = sc.nextInt();
            int c = sc.nextInt();
            graph[a][b] = c;
        }

        //플로이드 알고리즘 수행
        for(int k=1; k<=n; k++){
            for(int a = 1; a<=n; a++){
                for(int b = 1; b<=n; b++){
                    graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
                }
            }
        }

        //결과 출력
        for(int a = 1; a<=n; a++){
            for(int b = 1; b <= n; b++){
                if(graph[a][b] == INF){
                    System.out.println("무한");
                }else{
                    System.out.println(graph[a][b] + " ");
                }
            }
            System.out.println();
        }
    }
}
