```java
package algorithmStudyTree;

import java.security.PublicKey;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.Queue;

public class BinTree<K, V> {
    static class Node<K, V>{
        private K key;
        private V data;
        private Node<K,V> left;
        private Node<K,V> right;

        public Node(K key, V data, Node<K, V> left, Node<K, V> right) {
            this.key = key;
            this.data = data;
            this.left = left;
            this.right = right;
        }

        public K getKey() {
            return key;
        }

        public V getData() {
            return data;
        }

        void print(){
            System.out.println(data);
        }
    }

    private Node<K,V> root;
    private Comparator<? super K> comparator =null; //비교자

    public BinTree() {
        root = null;
    }

    public BinTree(Comparator<? super K> c) {
        this();
        this.comparator = c;
    }

    private int comp(K key1, K key2){
        return (comparator == null) ? ((Comparable<K>) key1).compareTo(key2)
                : comparator.compare(key1, key2);
    }

    public V search(K key){
        Node<K,V> p = root;

        while(true){
            if(p==null)
                return null;
            int cond = comp(key, p.getKey());
            if(cond == 0){
                //System.out.println(p.getData());
                return p.getData();
            }
            else if(cond <0)
                p = p.left;
            else
                p=p.right;
        }
    }

    private void addNode(Node<K,V> node, K key, V data){
        int cond = comp(key, node.getKey());
        if(cond ==0)
            return;
        else if(cond < 0){
            if(node.left == null)
                node.left = new Node<K, V>(key, data,null,null);
            else
                addNode(node.left, key,data);
        } else{
            if(node.right == null)
                node.right = new Node<K, V>(key, data,null,null);
            else
                addNode(node.right, key,data);
        }
    }

    //addNode는 private로 외부에서 사용x
    public void add(K key, V data){
        if(root == null)
            root = new Node<K,V>(key,data,null,null);
        else
            addNode(root, key, data);
    }

    public boolean remove(K key){
        Node<K,V> p = root;
        Node<K,V> parent = null;
        boolean isLeftChild = true;

        while (true){
            if(p==null)
                return false;
            int cond = comp(key,p.getKey());
            if (cond == 0)
                break;
            else{
                parent = p;
                if(cond < 0){
                    isLeftChild = true;
                    p = p.left;
                } else {
                    isLeftChild = false;
                    p = p.right;
                }
            }
        }

        if(p.left == null){
            if(p == root)
                root = p.right;
            else if(isLeftChild)
                parent.left = p.right;
            else
                parent.right = p.right;
        } else if(p.right ==null){
            if(p == root)
                root = p.left;
            else if(isLeftChild)
                parent.left = p.left;
            else
                parent.right = p.left;
        } else{
            parent = p;
            Node<K,V> left = p.left;
            isLeftChild = true;
            while(left.right != null){
                parent = left;
                left = left.right;
                isLeftChild = false;
            }
            p.key = left.key;
            p.data = left.data;
            if(isLeftChild)
                parent.left = left.left;
            else
                parent.right = left.left;
        }
        return true;
    }

    private void preOrder(Node node){
        if(node != null){
            System.out.print(node.data + " " );
            if(node.left != null) preOrder(node.left);
            if(node.right != null) preOrder(node.right);
        }
    }

    public void printPreOrder(){
        preOrder(root);
    }

    private void inOrder(Node node){
        if(node != null){
            if(node.left != null) inOrder(node.left);
            System.out.print(node.data + " ");
            if(node.right != null) inOrder(node.right);
        }
    }

    public void printInOrder(){
        inOrder(root);
    }

    private void postOrder(Node node){
        if(node != null){
            if(node.left != null) postOrder(node.left);
            if(node.right != null) postOrder(node.right);
            System.out.print(node.data + " ");
        }
    }

    public void printPostOrder(){
        postOrder(root);
    }

    private void levelOrder(Node a){
        Queue<Node> queue= new LinkedList<>();
        queue.offer(a);

        while(!queue.isEmpty()){
            Node node = queue.poll();
            System.out.print(node.getData()+ " ");

            if(node.left != null){
                queue.offer(node.left);
            }

            if(node.right != null){
                queue.offer(node.right);
            }
        }
    }

    public void printLevelOrder(){
        levelOrder(root);
    }


}


```
