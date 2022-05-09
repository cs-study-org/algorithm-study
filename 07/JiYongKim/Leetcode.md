<h3>

<h3>Graph 태그가 있는 문제들</h3>
<details>
    <summary>1791. Find Center of Star Graph</summary>
- 1791. Find Center of Star Graph

```java
// 시간 복잡도 O(1)
// 공간 복잡도 O(1)
class Solution {
    public int findCenter(int[][] edges) {
        
        
        int a1 = edges[0][0];
        int a2 = edges[0][1];
        
        int b1 = edges[1][0];
        int b2 = edges[1][1];
        
        if(a1 == b1 || a1 == b2) 
					return a1;
        
        else
				 return a2;
    }
}
```
</details>

<br>

<details>
    <summary>997 . Find the Town Judge</summary>
- 997 . Find the Town Judge

```java
// 시간 복잡도 O(a+b) .. a = trust의 크기, b = n
// 공간 복잡도 O(a) ... a = n+1
class Solution {
    public int findJudge(int n, int[][] trust) {
        int[] count = new int[n + 1];
        for (int[] t : trust) {
            count[t[0]]--;
            count[t[1]]++;
        }
        for (int i = 1; i <= n; i++) {
            if (count[i] == n - 1) {
                return i;
            }
        }
        return -1;
    }
}
```
</details>

<br>

<details>
    <summary>1971. Find if Path Exists in Graph (미완)</summary>
- 1971. Find if Path Exists in Graph 
</details>


<br>

<h3>Graph 순회 `알고리즘` + `사용해본 자료구조`</h3>

<details>
    <summary>653. Two Sum IV - Input is a BST (미완)</summary>
- 653. Two Sum IV - Input is a BST

</details>

<br>

<details>
    <summary>463. Island Perimeter (미완)</summary>
- 463. Island Perimeter

</details>

<br>