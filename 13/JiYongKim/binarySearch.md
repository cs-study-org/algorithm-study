## 탐색 알고리즘의 종류

- 선형 탐색
- 이진 탐색
- 해시

<br>

## 선형 탐색(Linear Search) 알고리즘

- 정의 : 배열 전체를 하나씩 확인해 가며 탐색하는 알고리즘
- 시간 복잡도 : O(n)
- 특징
    - 모든 데이터 타입에 사용 가능 (문자열, 숫자,…etc)
    - 데이터의 양 n만큼의 저장 공간이 필요

<br>

## 이진 탐색 (Binary Search) 알고리즘

- 정의 : 전체 배열의 중앙을 비교하여 찾으려 하는 값이 작으면 왼쪽 크면 오른쪽 에서 부터 다시 탐색하는 방법으로 , 탐색양을 절반씩 줄여가며 찾는 탐색 알고리즘
- 시간 복잡도 : O(log n)

<br>

- 특징
    - 전제 조건
        - 정렬이 미리 되어있어야 한다
        - 입력시마다 재정렬을 필요로 한다
        - 데이터의 비교가 가능해야 한다.
    - [ 출력 < 입력 ]의 상황시 입력시 마다 재정렬을 해야하기 때문에 느려질 수 있다.
    - 분할 정복 기법 중 하나이다.
    
    <Binary Search Source by Java>
    
    ```java
    public class BinarySearch {
    	public static void main(String[] args) {
    		int[] arr = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
    
    		binarySearch(2, arr);
    	}
    
    	public static void binarySearch(int iKey, int arr[]) {
    		int mid;
    		int left = 0;
    		int right = arr.length - 1;
    
    		while (right >= left) {
    			mid = (right + left) / 2;
    
    			if (iKey == arr[mid]) {
    				System.out.println(iKey + " is in the array with index value: " + mid);
    				break;
    			}
    
    			if (iKey < arr[mid]) {
    				right = mid - 1;
    			} else {
    				left = mid + 1;
    			}
    
    		}
    	}
    }
    
    ```
    
<br>

## 해시

- 정의 : 해싱함수를 통해 얻은 해시값을 저장 위치로 삼아 데이터를 탐색하는 방법
- 시간 복잡도 : O(1)
- 특징
    - HashMap or HashTable 사용
    - 모든 데이터에 사용이 가능하다
    - 해시 충돌의 수를 줄이기 위하여 데이터 n 이상의 저장 공간이 필요하다
    - 해시 충돌이 일어날 경우
        - 해시충돌을 어떻게 예방 하느냐에 따라 시간복잡도가 변경될 수 있다
            
            ⇒ 대부분 느려진다라고 할 수 있다.
            

---

<br>

## Search Algorithm 정리

- [ 데이터 삽입 < 데이터 탐색 ] → 이진 탐색이 유리
- [ 데이터 삽입  > 데이터 탐색 ] → 선형 탐색이 유리
- 데이터를 저장할 용량이 커도 좋다 → 해시