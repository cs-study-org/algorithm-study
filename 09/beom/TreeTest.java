package algorithmStudyTree;

public class implementTree {

    public static void main(String[] args) {
        BinTree<Integer, Integer> binTree = new BinTree<>();

        binTree.add(30,30);
        binTree.add(25,25);
        binTree.add(90,90);
        binTree.add(19,19);
        binTree.add(26,26);
        binTree.add(77,77);
        binTree.add(99,99);
        binTree.add(5,5);

        binTree.printPreOrder();
        System.out.println();
        binTree.printInOrder();
        System.out.println();
        binTree.printPostOrder();
        System.out.println();
        binTree.printLevelOrder();
        System.out.println();
    }
}