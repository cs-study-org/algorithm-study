package ADT.JiYongKim.Graph;

import java.util.ArrayList;

// 그래프(리스트) 클래스
class ListGraph {
    private ArrayList<ArrayList<Integer>> listGraph;

    
    public ListGraph(int initSize) {
        this.listGraph = new ArrayList<ArrayList<Integer>>(); // 그래프 생성
        
        for(int i=0; i<initSize+1; i++) {
            listGraph.add(new ArrayList<Integer>());
        }
    }

    public ArrayList<ArrayList<Integer>> getGraph() {
        return this.listGraph;
    }


    public ArrayList<Integer> getNode(int i) {
        return this.listGraph.get(i);
    }

    // 그래프 정점 및  양방향 간선 추가 
    public void insertVertexEdge(int x, int y) {
        listGraph.get(x).add(y);
        listGraph.get(y).add(x);
    }

    // 그래프 정점 및 단방향 간선 추가 
    public void putVertexEdge(int x, int y) {
        listGraph.get(x).add(y);
    }
    
    // 그래프 출력 (인접리스트)
    public void printGraph() {
        for(int i=1; i<listGraph.size(); i++) {
            System.out.print("정점 " + i + "의 인접리스트");
            
            for(int j=0; j<listGraph.get(i).size(); j++) {
                System.out.print(" -> " + listGraph.get(i).get(j));
            }
            System.out.println();
        }
    }
}
