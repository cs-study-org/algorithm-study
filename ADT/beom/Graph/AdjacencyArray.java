public class AdjacencyArray {

    public static void main(String[] args) {
        int initSize = 6;
        ArrGraph adjArr = new ArrGraph(initSize);

        adjArr.put(1, 2);
        adjArr.put(1, 3);
        adjArr.put(2, 3);
        adjArr.put(2, 4);
        adjArr.put(3, 4);
        adjArr.put(3, 5);
        adjArr.put(4, 5);
        adjArr.put(4, 6);

        adjArr.printGraphToAdjArr();
    }

}