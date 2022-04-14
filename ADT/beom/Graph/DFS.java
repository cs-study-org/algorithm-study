import java.util.LinkedList;
import java.util.Stack;

public class DFS {
    static class Graph{
        int vertex;
        LinkedList<Integer> list[];

        public Graph(int vertex){
            this.vertex = vertex;
            list = new LinkedList[vertex];
            for(int i=0;i<vertex;i++){
                list[i] = new LinkedList<>();
            }
        }

        public void addEdge(int source, int destination){
            list[source].addFirst(destination);
            list[destination].addFirst(source);

        }

        public void DFS(int start){
            System.out.print("Depth First Traversal: ");
            boolean[] visited = new boolean[vertex];
            Stack<Integer> stack =new Stack<Integer>();
            stack.push(start);
            while(!stack.isEmpty()){
                int v = stack.pop();
                if(!visited[v]){
                    System.out.print(v + " ");
                    visited[v] = true;
                    for(int i = 0; i<list[v].size();i++){
                        int dest = list[v].get(i);
                        if(!visited[dest]){
                            stack.push(dest);
                        }
                    }
                }
            }
        }

        public void printGraph(){
            for(int i=0;i<vertex;i++){
                LinkedList<Integer> nodeList = list[i];
                if(nodeList.isEmpty()==false){
                    System.out.print("source = " + i+ "is connected to node : ");
                    for(int j=0;j<nodeList.size();j++){
                        System.out.print(" " + nodeList.get(j));
                    }
                }
                System.out.println();
            }
        }
    }

    public static void main(String[] args) {
        Graph graph = new Graph(6);
        graph.addEdge(0, 1);
        graph.addEdge(0, 2);
        graph.addEdge(1, 2);
        graph.addEdge(1, 3);
        graph.addEdge(3, 4);
        graph.addEdge(2, 3);
        graph.addEdge(4, 0);
        graph.addEdge(4, 1);
        graph.addEdge(4, 5);
        graph.printGraph();
        graph.DFS(0);
    }
}