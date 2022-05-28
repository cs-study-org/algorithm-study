public class AdjacencyArray {

    public static void main(String[] args) {
        int initSize = 4;
        ArrGraph adjArr = new ArrGraph(initSize);

        adjArr.deleteVertex(1);

        adjArr.insertEdge(0,4);
        adjArr.insertEdge(2,4);
        adjArr.insertEdge(4,2);
        adjArr.insertEdge(2,0);
        adjArr.insertEdge(2,3);

        adjArr.deleteEdge(2,4);

        adjArr.printGraphToAdjArr();
    }

}