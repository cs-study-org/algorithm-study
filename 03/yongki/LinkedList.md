# 연결리스트

- [연결리스트](#연결리스트)
  - [개념](#개념)
  - [문제 리스트](#문제-리스트)
  - [참고문헌](#참고문헌)

## 개념

<table>
  <tr>
    <th colspan="2">구조</th>
  </tr>
  <tr align="center">
    <td colspan="2">
      <img 
        width="50%"
        src="https://mblogthumb-phinf.pstatic.net/MjAxOTA1MDdfMTEg/MDAxNTU3MjA0OTUwMDA1.DSJlwlTNm2iXdPUkzSrIkz58Q-6C2WKfFi0Tq7KlZVwg.uGAPoVzrcjQv58CzjdZ0Fz1u0BWZoA0rOWT6YUQ2Hacg.PNG.std_34/image.png?type=w800">      
    </td>
  </tr>
  <tr>
    <th colspan="2">종류</th>
  </tr>
  <tr>
    <td>
      <img src="https://mblogthumb-phinf.pstatic.net/MjAxOTA1MDdfMTc4/MDAxNTU3MjA2NzUwNTA2.zFSk59o7XoiUEv20e73r1Qh0csm7PfHL2zgpK0B9NZEg.vDG82wpGHzBLaRyrSP41E6EVIjjdzsszeoWY8mIBOqAg.PNG.std_34/image.png?type=w800">
    </td>
    <td>
<p>
다음은 최악의 경우 시간 복잡도이다.

<b>단일 연결리스트</b>

| Access | Search | Insertion | Deletion |
| :----: | :----: | :-------: | :------: |
| `O(n)` | `O(n)` |  `O(n)`   |  `O(n)`  |
<b>원형 연결리스트</b>

| Access | Search | Insertion | Deletion |
| :----: | :----: | :-------: | :------: |
| `O(n)` | `O(n)` |  `O(n)`   |  `O(n)`  |
> 순차적으로 Insertion / Deletion 행위에는 `O(1)`을 보장한다.

<b>이중 연결리스트</b>

| Access | Search | Insertion | Deletion |
| :----: | :----: | :-------: | :------: |
| `O(n)` | `O(n)` |  `O(1)`   |  `O(1)`  |

> 포인터 공간을 추가로 사용하는 비용에 단점이 있다.
</p>
    </td>
  </tr>
</table>

## 문제 리스트

<hr/>

## 참고문헌

[연결리스트 참고사진](https://m.blog.naver.com/std_34/221532135313) -- 514

[연결리스트 빅오](https://velog.io/@grinding_hannah/CS-자료구조-Big-O-표기법-링크드-리스트Linked-List) -- grinding_hannah