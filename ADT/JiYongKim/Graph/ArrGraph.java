package ADT.JiYongKim.Graph;

// 그래프(행렬) 클래스
class ArrGraph {
    private int[][] arrGraph;

    // 그래프 초기화
    public ArrGraph(int initSize) {
        this.arrGraph = new int[initSize+1][initSize+1];
    }

    // 그래프 return
    public int[][] getGraph() {
        return this.arrGraph;
    }

    // 그래프 추가 (양방향)
    public void insertVertexEdge(int x, int y) {
        arrGraph[x][y] = arrGraph[y][x] = 1;
    }

    // 그래프 추가 (단방향)
    public void putVertexEdge(int x, int y) {
        arrGraph[x][y] = 1;
    }
    
    // 그래프 출력 (인접행렬)
    public void printGraph() {
        for(int i=0; i<arrGraph.length; i++) {
            for(int j=0; j<arrGraph[i].length; j++) {
                System.out.print(" " + arrGraph[i][j]);
            }
            System.out.println();
        }
    }
}