# Tree
## 목차
- 99. Recover Binary Search Tree
- 222. Count Complete Tree Nodes
- 112. Path Sum


## 99. Recover Binary Search Tree
### 문제 요약
BST의 순서가 잘못된 것을 복원하시오

> 풀이</br>
> 주어진 root를 중위순회 방식으로 하여 오름차순 또는 내림차순으로 정렬된 배열을 바꿔야할 것같다는 생각까지만 들었다. 하지만 그 이후로는 생각이 나지 않아 discuss의 도움을 받았다.

### 시간 복잡도 공간복잡도
| time | space |
|------|-------|
| O(n) | O(n)  |

### 코드
```java
class Solution {
    TreeNode prev = null;
    TreeNode first = null;
    TreeNode second = null;

    public void recoverTree(TreeNode root) {
        inOrder(root);
        int temp = first.val;
        first.val = second.val;
        second.val = temp;
    }

    public void inOrder(TreeNode root){
        if(root==null)return;
        inOrder(root.left);

        if(prev!=null&&root.val<prev.val){
            if(first==null)first=prev;
            second=root;
        }
        prev=root;
        inOrder(root.right);

    }
}
```


## 222. Count Complete Tree Nodes
### 문제 요약
완전 이진 트리의 루트 노드가 입력으로 주어지면 트리의 노드 수를 반환해라

### 시간 복잡도 공간복잡도
| time | space |
|------|-------|
| O(log2 n) | O(n)  |



### 코드
```java
class Solution {
    int count = 0;

    public class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode() {
        }

        TreeNode(int val) {
            this.val = val;
        }

        TreeNode(int val, TreeNode left, TreeNode right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }
    public int countNodes(TreeNode root) {
        if(root == null) return 0;

        fixCount(root);
        return count;
    }

    public void fixCount(TreeNode node){
        count++;

        if(node.left != null){
            fixCount(node.left);
        }

        if(node.right != null){
            fixCount(node.right);
        }
    }

}
```



## 112. Path Sum
### 문제 요약
주어진 이진트리를 root부터 leaf 노드까지 탐색하여 targetSum과 일치하는 값이 있는지 찾아가는 문제입니다.

### 시간 복잡도 공간복잡도
| time | space |
|------|-------|
| O(log2 n) | O(n)  |

### 코드
```java
class Solution {
    public class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode() {
        }

        TreeNode(int val) {
            this.val = val;
        }

        TreeNode(int val, TreeNode left, TreeNode right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }

    public boolean hasPathSum(TreeNode root, int targetSum) {
        if(root == null){
            return false;
        }
        if(root.left == null && root.right == null){
            if(targetSum == root.val){
                return true;
            }else{
               return false;
            }
        }

        int requiredSum = targetSum - root.val;
        return hasPathSum(root.left, requiredSum) || hasPathSum(root.right, requiredSum);
    }
}
```


## 705. Design HashSet
### 문제 요약

### 시간 복잡도 공간복잡도

### 코드



## 705. Design HashSet
### 문제 요약

### 시간 복잡도 공간복잡도

### 코드




## 705. Design HashSet
### 문제 요약

### 시간 복잡도 공간복잡도

### 코드
