package algorithmStudyGraph;

import java.util.ArrayList;

public class ListGraph {
    private ArrayList<ArrayList<Integer>> listGraph;

    //그래프 초기화
    public ListGraph(int initSize) {
        this.listGraph = new ArrayList<ArrayList<Integer>>(); // 그래프 생성

        // 그래프 초기화
        // put(int x, int y) 에서 입력되는 정점의 값은 0 이상의 정수이나
        // ArrayList의 index는 0 부터 시작이므로
        // ArrayIndexOutOfBoundsException 방지를 위해
        // 정점을 담는 인접리스트의 size는 1을 더하여 초기화해줌
        // ex) initSize = 3
        // graph[0]
        // graph[1] -> 2 -> 3
        // graph[2] -> 1 -> 3 -> 4
        // graph[3] -> 1 -> 2 -> 4 -> 5
        for(int i=0; i<initSize+1; i++) {
            listGraph.add(new ArrayList<Integer>());
        }
    }

    //단방향 간선 추가
    public void insertEdge(int vertexA, int vertexB){
        listGraph.get(vertexA).add(vertexB);
    }

    //정점 삭제
    public void deleteVertex(int vertex){
        listGraph.remove(Integer.valueOf(vertex));
    }

    //단방향 간선 삭제
    public void deleteEdge(int vertexA, int vertexB){
        listGraph.get(vertexA).remove(Integer.valueOf(vertexB));
    }

    //정점에 인접한 정점 반환
    public ArrayList<Integer> adjacent(int vertex){
        return this.listGraph.get(vertex);
    }

    //그래프 출력(인접 리스트)
    public void printGraphToAdjList(){
        for(int i=1;i< listGraph.size();i++){
            System.out.print("정점 " + i + "의 인접리스트");

            for(int j=0;j<listGraph.get(i).size();j++){
                System.out.print(" -> " + listGraph.get(i).get(j));
            }
            System.out.println();
        }
    }
}