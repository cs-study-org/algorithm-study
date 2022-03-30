package algorithmStudyGraph;

public class AdjacencyList {

    public static void main(String[] args) {
        int initSize = 5;
        ListGraph adjList = new ListGraph(initSize);
        
        adjList.deleteVertex(1);

        adjList.insertEdge(0,4);
        adjList.insertEdge(2,4);
        adjList.insertEdge(4,2);
        adjList.insertEdge(2,0);
        adjList.insertEdge(2,3);

        adjList.deleteEdge(2,4);

        adjList.printGraphToAdjList();
    }
}