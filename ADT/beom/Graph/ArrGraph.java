package algorithmStudyGraph;

public class ArrGraph {
    private int[][] arrGraph;

    //그래프 초기화
    public ArrGraph(int initSize){
        // 그래프 초기화
        // put(int x, int y) 에서 입력되는 정점의 값은 0 이상의 정수이나
        // 배열의 index는 0 부터 시작이므로
        // ArrayIndexOutOfBoundsException 방지를 위해
        // 정점을 담는 인접행렬의 행과 열 size는 1을 더하여 초기화해줌
        this.arrGraph = new int[initSize +1][initSize +1];
    }


    //단방향 간선 추가
    public void insertEdge(int vertexA, int vertexB){
        arrGraph[vertexA][vertexB] = 1;
    }

    //정점 삭제
    public void deleteVertex(int vertex){
        for(int i=0;i<arrGraph[vertex].length;i++){
            arrGraph[vertex][i] = 0;
        }
    }

    //단방향 간선 삭제
    public void deleteEdge(int vertexA, int vertexB){
        arrGraph[vertexA][vertexB] = 0;
    }

    //정점에 인접한 정점 반환
    public int[] adjacent(int vertex){
        return this.arrGraph[vertex];
    }

    //그래프 출력(인접 행렬)
    public void printGraphToAdjArr(){
        for(int i=0; i<arrGraph.length;i++){
            for(int j=0; j<arrGraph[i].length; j++){
                System.out.print(" " + arrGraph[i][j]);
            }
            System.out.println();
        }
    }
}
