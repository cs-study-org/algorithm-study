# 트리

- [트리](#트리)
  - [이론](#이론)
    - [배열 표현](#배열-표현)
    - [링크 표현](#링크-표현)
  - [구현](#구현)
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

## 구현

<!-- <details> -->
<br/>

<div align="center"><img width="60%" src="assets/tree-example.jpg"/></div>

필수메소드와 빅오는 다음과 같다.

- time(worst)는 이진 트리에 적용되고,

- time(avg)는 완전 이진 트리에 적용된다.

|             |  `insert`  |   `delete`  | `_getMinValueAtRightSubtree` |
|:-----------:|:----------:|:----------:|:---------------------------:|
| time(worst) |   `O(n)`   |   `O(n)`   |            `O(n)`           |
|  time(avg)  | `O(log n)` | `O(log n)` |            `O(1)`           |
|    space    |   `O(1)`   |   `O(1)`   |            `O(1)`           |

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
|:-----:|:---------:|:---------:|:----------:|:-----------:|:------------:|
|  time |   `O(1)`  |   `O(1)`  |   `O(1)`   |    `O(1)`   |    `O(L)`    |
| space |   `O(n)`  |   `O(1)`  |   `O(1)`   |    `O(1)`   |    `O(L)`    |

</details>

<hr/>

## 참고 문헌

[트리 이론](https://namu.wiki/w/트리(그래프)#s-4.1.1) ━ *나무위키*

[트리 delete 구현](https://www.geeksforgeeks.org/binary-search-tree-set-2-delete/) ━ *GeeksforGeeks*