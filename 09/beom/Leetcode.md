# Tree
## 목차
- 99. Recover Binary Search Tree


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



## 705. Design HashSet
### 문제 요약

### 시간 복잡도 공간복잡도

### 코드




## 705. Design HashSet
### 문제 요약

### 시간 복잡도 공간복잡도

### 코드
