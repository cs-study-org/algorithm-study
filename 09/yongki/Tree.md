# 트리

- [트리](#트리)
  - [이론](#이론)
    - [배열 표현](#배열-표현)
    - [링크 표현](#링크-표현)
  - [구현](#구현)
  - [이월된 문제 리스트](#이월된-문제-리스트)
    - [문제 풀이](#문제-풀이)
    - [문제 풀이](#문제-풀이-1)
    - [문제 풀이 1/2 (`#Recursive DFS`)](#문제-풀이-12-recursive-dfs)
    - [문제 풀이 2/2 (`#BFS`)](#문제-풀이-22-bfs)
  - [참고 문헌](#참고-문헌)

## 이론

<details>
<summary>트리 종류</summary>
<br/>

트리란

    계층적인 관계를 가진 자료의 표현에 사용하는 자료구조이다.

일반 트리는

    노드가 임의의 개수의 자식을 가질 수 있는 트리이다.    

    노드마다 링크의 수가 다르기 때문에 복잡하다.

이진 트리는

    노드가 최대 2개의 자식만 가지도록 제한한다.

포화 이진 트리는

    각 레벨에 노드가 꽉 차있는 이진 트리이다.

    따라서 노드에 순서대로 번호를 붙일 수 있다.

완전 이진 트리는

    포화 이진 트리와 유사하지만, 마지막 레벨의 노드는 비어있어도 된다.

</details>

<details>
<summary>이진 트리 표현</summary>

### 배열 표현

포화 이진 트리와 완전 이진 트리에 가장 적합하다.

배열 항목 사이에 빈칸이 발생하지 않기 때문이다.

    이와 반대로, 경사 이진 트리는 빈칸이 많이 발생한다.

어떤 노드의 인덱스를 알면 

    부모 인덱스 =             i / 2

    왼쪽 자식 인덱스 =        2i

    오른쪽 자식 인덱스 =      2i + 1  알 수 있다.

### 링크 표현

두개의 링크를 담는 구조체를 활용한다.

```js
var TreeNode = function (value, left, right) {
  this.value;
  this.left;
  this.right;
}
```
> 이번 주제의 구현 문제는 모두 링크 표현으로 진행한다.

</details>

<details>
<summary>사용 사례</summary>
<br/>

Node.js의 패키지 의존성이 직관적으로 떠올랐다.

Node.js는 패키지가 어딨는지 알지 못해 패키지의 모듈이 필요 할 때, 매번 `readdir` 시스템 콜을 날려 탐색한다.

이때 아래와 같은 탐색 알고리즘을 사용한다.

<div align="center"><img width="60%" src="assets/node-module-search-alg.jpg"/></div>

`node_modules 폴더`에는 의존성이 동기화된 패키지만 설치된다.

즉, 같은 이름인 패키지의 다른 버전의 모듈들이 설치되지 않는다.

어떻게 동기화했을까?

다음은 최상위 경로인 프로젝트에서 명시한 `package.json`이다.

```json
  "dependencies": {        
    "body-parser": "^1.19.0",
    ...
  }
```

실제 설치는 다른 패키지의 버전이 설치되었다.

`body-parser`를 의존하는 `express`패키지의 버전이 더 major 하기 때문이다.

```shell
├─┬ body-parser@1.19.2
├─┬ express@4.17.3
│ ├── body-parser@1.19.2 deduped
```

어떤 패키지가 의존하는 패키지는 각 패키지의 `package.json`에 명시된다.

패키지 간의 의존성을 `package.json`에 명시된 패키지를 트리의 노드로 생각하여 의존성 트리가 구성되었다고 생각하자.

<div align="center"><img width="100%" src="assets/node-module-tree.drawio.svg"/></div>

현재 설치된 `body-parser`와 다른 버전을 설치한다고 했을 때, 

트리에서 `body-parser`노드를 찾아 버전을 확인한뒤, 동기화를 맞춘다.

</details>

## 구현

<details>
<br/>

<div align="center"><img width="60%" src="assets/tree-example.jpg"/></div>

필수메소드와 빅오는 다음과 같다.

- time(worst)는 이진 트리에 적용되고,

- time(avg)는 완전 이진 트리에 적용된다.

|             |  `insert`  |  `delete`  | `_getMinValueAtRightSubtree` |
| :---------: | :--------: | :--------: | :--------------------------: |
| time(worst) |   `O(n)`   |   `O(n)`   |            `O(n)`            |
|  time(avg)  | `O(log n)` | `O(log n)` |            `O(1)`            |
|    space    |   `O(1)`   |   `O(1)`   |            `O(1)`            |

`delete` 메소드 같은 경우 까다로운 경우가 있다.

예로, 90을 삭제했을 때, 해당 노드로 올라올 계승자를 선정해야한다.

이 부분을 우측 서브트리에서 찾는다. (`_getMinValueAtRightSubtree`)

또한, `delete` 메소드는 최적화가 가능하다.

여기서 최적화는 재귀를 최소화함을 의미한다. 자바스크립트 언어에서는 특히 중요하다고 판단한다.

```js
BinarySearchTree.prototype._deleteAtNode = function (node, deleteValue) {
  // +++ node.value === deleteValue
  else {
    ...
    // +++ left, right all exist
    node.value = this._getMinValueAtRightSubtree(node.right);
    node.right = this._deleteAtNode(node.right, node.value);
  }

  return node;
}
```

```js

```

트리 순회 관련 메소드와 빅오는 다음과 같다.

- `n`은 트리의 모든 노드의 수를 의미한다.
- `L`은 트리의 level 수를 의미한다.

|       | `display` | `inorder` | `preorder` | `postorder` | `levelorder` |
| :---: | :-------: | :-------: | :--------: | :---------: | :----------: |
| time  |  `O(n)`   |  `O(n)`   |   `O(n)`   |   `O(n)`    |    `O(n)`    |
| space |  `O(n)`   |  `O(1)`   |   `O(1)`   |   `O(1)`    |    `O(L)`    |

</details>

## 이월된 문제 리스트

입력값으로 주어진 이진 트리는 이진 탐색 트리가 아니라서 별도의 에디터에서 그대로 구현하기 어려웠다.

따라서, 별도의 문제 파일로 빼지 못하고, 문제 에디터에서 바로 해결하였다.

> 단, 문제에서 사용되는 자료구조는 구현해본 코드를 사용하였다.

**[조건: DFS 풀이]**

<details>
<summary>112. Path Sum
  <a href="https://leetcode.com/problems/path-sum/">👊</a>
</summary>

### 문제 풀이

```js
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 * 
 * n is all nodes
 * h is tree's height
 *
 * time:    O(n)
 * space:   O(h)
 */
var hasPathSum = function (root, targetSum) {
  if (!root)
    return false;

  const stack = new Stack();
  stack.push({ 'node': root, 'remainValue': targetSum });

  while (!stack.isEmpty()) {
    const { node, remainValue } = stack.pop();

    if (
      !node.left
      && !node.right
      && node.val === remainValue
    )
      return true;

    if (node.left)
      stack.push({ 'node': node.left, 'remainValue': remainValue - node.val });

    if (node.right)
      stack.push({ 'node': node.right, 'remainValue': remainValue - node.val });
  }
  return false;
};
```
</details>

<details>
<summary>257. Binary Tree Paths
  <a href="https://leetcode.com/problems/binary-tree-paths/">👊</a>
</summary>

### 문제 풀이

```js
/**
 * @param {TreeNode} root
 * @return {string[]}
 * 
 * n is all nodes
 * h is tree's height
 * w is tree's width
 * 
 * time:    O(n)
 * space:   O(h + w)
 */
var binaryTreePaths = function (root) {
  const result = [];

  const stack = new Stack();
  stack.push({ 'node': root, 'path': String(root.val) });

  while (!stack.isEmpty()) {    
    const { node, path } = stack.pop();

    if (
      !node.left
      && !node.right
    )
      result.push(path);

    if (node.left)
      stack.push({
        'node': node.left, 'path': `${path}->${String(node.left.val)}`
      });

    if (node.right)
      stack.push({
        'node': node.right, 'path': `${path}->${String(node.right.val)}`
      });
  }
  return result;
};
```
</details>
<br/>

**[조건: BFS 풀이]**

<details>
<summary>104. Maximum Depth of Binary Tree
  <a href="https://leetcode.com/problems/maximum-depth-of-binary-tree/">👊</a>
</summary>

### 문제 풀이 1/2 (`#Recursive DFS`)

직관적으로 떠오른 풀이다.

함수를 노드의 자식을 발견할 때마다 

깊이를 1 더한 매개변수와 함께 재귀적 호출한다.

리턴된 값들에서 최댓값이 결과값이다.

```js
var getMaxDepth = function(node, level){
  let curDepth = level;
  let left = 1;
  let right = 1;
  
  if(!node)
    return curDepth;
  
  if(node.left)
    left = getMaxDepth(node.left, level + 1);

  if(node.right)
    right = getMaxDepth(node.right, level + 1);  
  
  return Math.max(curDepth, left, right);
}

/**
 * @param {TreeNode} root
 * @return {number}
 * 
 * time:    O(n)
 * space:   O(n)
 */
var maxDepth = function(root) {
  if(!root)
    return 0;
    
  return getMaxDepth(root, 1);
};
```

### 문제 풀이 2/2 (`#BFS`)

```js
/**
 * @param {TreeNode} root
 * @return {number}
 * 
 * time:    O(n)
 * space:   O(n)
 */
var maxDepth = function(root) {
  if(!root)
    return 0;
  
  let result = 1;
  
  const queue = new Queue();
  queue.enQueue({'node': root, 'depth': 1});
  
  while(!queue.isEmpty()){
    const {node, depth} =  queue.Front();        
    
    if(!node)
      continue;
    
    if(!node.left && !node.right)
      result = Math.max(result, depth);
    
    if (node.left)
      queue.enQueue({'node': node.left, 'depth': depth + 1});
    
    if (node.right)
      queue.enQueue({'node': node.right, 'depth': depth + 1});
    
    queue.deQueue();
  }
  
  return result;
};
```
</details>

<hr/>

## 참고 문헌

[트리 이론](https://namu.wiki/w/트리(그래프)#s-4.1.1) ━ *나무위키*

[Node.js의 모듈 검색 알고리즘 예시 사진](https://www.youtube.com/watch?v=EncMFNfuBw0&list=PLYpU5pCXtxyhLiu0YoBeQq_SSQg8BA2-C&index=5&ab_channel=온라인코딩스쿨코드잇) ━ *코드잇*

[`package-lock.json` 역할](https://junwoo45.github.io/2019-10-02-package-lock/) ━ *박준우 블로그*

[이진 탐색 트리 `delete 메소드` 구현](https://www.geeksforgeeks.org/binary-search-tree-set-2-delete/) ━ *GeeksforGeeks*

[이진 트리 DFS vs BFS](https://www.geeksforgeeks.org/bfs-vs-dfs-binary-tree/) ━ *GeeksforGeeks*

[Simple Solution at 112. Path Sum](https://leetcode.com/problems/path-sum/discuss/36581/My-Python-iterative-DFS-solution) ━ *LeetCode*